import nock from "nock";
import { Readable } from "stream";
import Config, { EnvironmentEnum } from "../config";
import HttpClientException from "../httpClient/httpClientException";
import HttpURLConnectionClient from "../httpClient/httpURLConnectionClient";

const toRequestBuffer = (body: unknown): Buffer => {
    if (Buffer.isBuffer(body)) {
        return body;
    }
    if (typeof body === "string" && /^[\da-f]+$/i.test(body) && body.length % 2 === 0) {
        return Buffer.from(body, "hex");
    }
    return Buffer.from(String(body));
};

describe("HttpURLConnectionClient", () => {
    let client: HttpURLConnectionClient;

    beforeEach(() => {
        client = new HttpURLConnectionClient();
        nock.cleanAll();
    });

    test("preserves multipart headers and transmits Buffer bodies byte-for-byte", async () => {
        const body = Buffer.from([0, 1, 2, 127, 128, 255]);
        const contentType = "multipart/form-data; boundary=test-boundary";
        let receivedBody = Buffer.alloc(0);

        const scope = nock("https://document-collector-test.adyen.com", {
            reqheaders: {
                "content-type": contentType,
                "content-length": String(body.length),
                "authorization": `Basic ${Buffer.from("username:password").toString("base64")}`,
                "x-custom-header": "custom-value",
            },
        })
            .post("/v1/crossBorderInvoices", (requestBody) => {
                receivedBody = toRequestBuffer(requestBody);
                return true;
            })
            .reply(201, "{}");

        await client.request(
            "https://document-collector-test.adyen.com/v1/crossBorderInvoices",
            body,
            new Config({
                username: "username",
                password: "password",
                environment: EnvironmentEnum.TEST,
            }),
            false,
            {
                headers: {
                    "content-type": contentType,
                    "content-length": body.length,
                    "x-custom-header": "custom-value",
                },
                method: "POST",
            },
        );

        expect(scope.isDone()).toBe(true);
        expect(receivedBody.equals(body)).toBe(true);
    });

    test("replays a multipart Buffer after a 308 redirect", async () => {
        const body = Buffer.from("--test-boundary\r\nbinary-\x00-body", "binary");
        const contentType = "multipart/form-data; boundary=test-boundary";
        let redirectedBody = Buffer.alloc(0);

        const redirectScope = nock("https://document-collector-test.adyen.com")
            .post("/v1/crossBorderInvoices")
            .reply(308, "", {
                Location: "https://document-collector-live.adyen.com/v1/crossBorderInvoices",
            });
        const targetScope = nock("https://document-collector-live.adyen.com", {
            reqheaders: {
                "content-type": contentType,
                "x-api-key": "test-api-key",
            },
        })
            .post("/v1/crossBorderInvoices", (requestBody) => {
                redirectedBody = toRequestBuffer(requestBody);
                return true;
            })
            .reply(201, "{}");

        await client.request(
            "https://document-collector-test.adyen.com/v1/crossBorderInvoices",
            body,
            new Config({
                apiKey: "test-api-key",
                environment: EnvironmentEnum.TEST,
            }),
            true,
            {
                headers: {
                    "content-type": contentType,
                    "content-length": body.length,
                },
                method: "POST",
            },
        );

        expect(redirectScope.isDone()).toBe(true);
        expect(targetScope.isDone()).toBe(true);
        expect(redirectedBody.equals(body)).toBe(true);
    });

    describe("multi-byte characters split across response chunks", () => {
        const name = "José Müller 北京 😀";
        const config = new Config({apiKey: "test-api-key", environment: EnvironmentEnum.TEST});

        const splitEverywhere = (text: string): Readable => {
            const bytes = Buffer.from(text, "utf8");
            return Readable.from(Array.from(bytes, (byte) => Buffer.from([byte])));
        };

        test("decodes a successful response", async () => {
            const body = JSON.stringify({resultCode: "Authorised", additionalData: {cardHolderName: name}});
            nock("https://checkout-test.adyen.com").post("/payments").reply(200, () => splitEverywhere(body));

            const response = await client.request("https://checkout-test.adyen.com/payments", "{}", config, true);

            expect(response).toBe(body);
        });

        test.each([422, 500])("decodes an error response with status %d", async (status) => {
            const message = `Invalid shopper name: ${name}`;
            const body = JSON.stringify({status, errorCode: "000", message, errorType: "validation"});
            nock("https://checkout-test.adyen.com").post("/payments").reply(status, () => splitEverywhere(body));

            const error = await client.request("https://checkout-test.adyen.com/payments", "{}", config, true)
                .catch((e: HttpClientException) => e);

            expect(error).toBeInstanceOf(HttpClientException);
            expect((error as HttpClientException).responseBody).toBe(body);
            expect((error as HttpClientException).apiError?.message).toBe(message);
        });
    });

    test("rejects when the certificate cannot be loaded", async () => {
        await expect(client.request(
            "https://checkout-test.adyen.com",
            "{}",
            new Config({
                certificatePath: "/does-not-exist/terminal.pem",
                environment: EnvironmentEnum.TEST,
            }),
            false,
        )).rejects.toThrow("Error loading certificate from path");
    });

    describe("verifyLocation", () => {
        test.each([
            "https://example.adyen.com/path",
            "https://sub.adyen.com",
            "http://another.adyen.com/a/b/c?q=1",
            "https://checkout-test.adyen.com",
            "https://custom-url.adyenpayments.com",
        ])("should return true for valid adyen.com domain: %s", (location) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - testing a private method
            expect(client.verifyLocation(location)).toBe(true);
        });

        test.each([
            "https://example.ADYEN.com/path",
            "HTTPS://sub.adyen.COM",
        ])("should be case-insensitive for valid adyen.com domain: %s", (location) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - testing a private method
            expect(client.verifyLocation(location)).toBe(true);
        });

        test.each([
            "https://adyen.com.evil.com/path",
            "https://evil-adyen.com",
            "http://adyen.co",
            "https://www.google.com",
            "https://adyen.com-scam.com",
        ])("should return false for invalid domain: %s", (location) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - testing a private method
            expect(client.verifyLocation(location)).toBe(false);
        });

        test.each([
            "https://adyen.com.another.domain/path",
            "https://myadyen.com.org",
        ])("should return false for domains that contain but do not end with adyen.com: %s", (location) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - testing a private method
            expect(client.verifyLocation(location)).toBe(false);
        });

        test.each([
            "not a url",
            "adyen.com",
            "//adyen.com/path",
        ])("should return false for malformed URLs: %s", (location) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - testing a private method
            expect(client.verifyLocation(location)).toBe(false);
        });
    });

    describe("agent configuration", () => {
        test("passes agent options to the reusable agent", () => {
            const configuredClient = new HttpURLConnectionClient({keepAlive: true});
            const requestOptions = {headers: {}};
            const scope = nock("https://checkout-test.adyen.com").post("/").reply(200, "{}");

            return configuredClient.request(
                "https://checkout-test.adyen.com",
                "{}",
                new Config({apiKey: "test-api-key", environment: EnvironmentEnum.TEST}),
                true,
                requestOptions,
            ).then(() => {
                const agent = (requestOptions as unknown as {agent: {options: {keepAlive?: boolean}}}).agent;
                expect(agent.options.keepAlive).toBe(true);
                expect(scope.isDone()).toBe(true);
            });
        });

        test("does not use mutations to the original agent options", async () => {
            const agentOptions = {keepAlive: true};
            const configuredClient = new HttpURLConnectionClient(agentOptions);
            agentOptions.keepAlive = false;
            const requestOptions = {headers: {}};
            const scope = nock("https://checkout-test.adyen.com").post("/").reply(200, "{}");

            await configuredClient.request(
                "https://checkout-test.adyen.com",
                "{}",
                new Config({apiKey: "test-api-key", environment: EnvironmentEnum.TEST}),
                true,
                requestOptions,
            );

            const agent = (requestOptions as unknown as {agent: {options: {keepAlive?: boolean}}}).agent;
            expect(agent.options.keepAlive).toBe(true);
            expect(scope.isDone()).toBe(true);
        });

        test("reuses the same agent for multiple requests", async () => {
            const requestOptions = {headers: {}};
            const configuredClient = new HttpURLConnectionClient({keepAlive: true});
            const scope = nock("https://checkout-test.adyen.com").post("/").times(3).reply(200, "{}");

            await configuredClient.request(
                "https://checkout-test.adyen.com",
                "{}",
                new Config({apiKey: "test-api-key", environment: EnvironmentEnum.TEST}),
                true,
                requestOptions,
            );
            const firstAgent = (requestOptions as unknown as {agent: object}).agent;

            await configuredClient.request(
                "https://checkout-test.adyen.com",
                "{}",
                new Config({apiKey: "test-api-key", environment: EnvironmentEnum.TEST}),
                true,
                requestOptions,
            );
            await configuredClient.request(
                "https://checkout-test.adyen.com",
                "{}",
                new Config({apiKey: "test-api-key", environment: EnvironmentEnum.TEST}),
                true,
                requestOptions,
            );

            expect((requestOptions as unknown as {agent: object}).agent).toBe(firstAgent);
            expect(scope.isDone()).toBe(true);
        });
    });
});
