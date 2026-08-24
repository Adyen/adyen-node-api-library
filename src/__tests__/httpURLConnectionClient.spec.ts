import HttpURLConnectionClient from "../httpClient/httpURLConnectionClient";
import nock from "nock";
import Config, { EnvironmentEnum } from "../config";

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
});
