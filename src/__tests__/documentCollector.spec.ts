import nock from "nock";
import {
    Client,
    DocumentCollectorAPI,
    Types,
} from "../index";
import { EnvironmentEnum } from "../config";

describe("Document Collector", () => {
    beforeEach(() => {
        nock.cleanAll();
    });

    test("uploads a cross-border invoice as multipart form data", async () => {
        const apiKey = "test-api-key";
        const client = new Client({
            apiKey,
            environment: EnvironmentEnum.TEST,
        });
        const documentCollector = new DocumentCollectorAPI(client);
        const fileBytes = Buffer.from("%PDF-1.7\nbinary-\x00-content", "binary");
        let requestBody = Buffer.alloc(0);
        let contentType = "";

        const scope = nock("https://document-collector-test.adyen.com", {
            reqheaders: {
                "x-api-key": apiKey,
                "x-custom-header": "custom-value",
            },
        })
            .post("/v1/crossBorderInvoices", (body) => {
                requestBody = Buffer.isBuffer(body) ? body : Buffer.from(body);
                return true;
            })
            .reply(function () {
                contentType = String(this.req.headers["content-type"]);
                return [
                    201,
                    {
                        context: "paCbInvoice",
                        fileName: "QRMJC25GDZRKDM92.pdf",
                        merchantAccount: "YourMerchantAccount",
                        pspReference: "QRMJC25GDZRKDM92",
                    },
                ];
            });

        const response = await documentCollector.DocumentsApi.uploadCrossBorderInvoice(
            Types.documentCollector.DocumentContext.PaCbInvoice,
            {
                data: fileBytes,
                name: "QRMJC25GDZRKDM92.pdf",
            },
            "YourMerchantAccount",
            { headers: { "X-Custom-Header": "custom-value" } },
        );

        expect(scope.isDone()).toBe(true);
        expect(contentType).toMatch(/^multipart\/form-data; boundary=/);
        const boundary = contentType.match(/boundary=(.+)$/)?.[1];
        expect(boundary).toBeDefined();
        expect(requestBody.includes(Buffer.from(`--${boundary}`))).toBe(true);
        expect(requestBody.includes(Buffer.from("name=\"context\""))).toBe(true);
        expect(requestBody.includes(Buffer.from("paCbInvoice"))).toBe(true);
        expect(requestBody.includes(Buffer.from("name=\"file\""))).toBe(true);
        expect(requestBody.includes(Buffer.from("filename=\"QRMJC25GDZRKDM92.pdf\""))).toBe(true);
        expect(requestBody.includes(fileBytes)).toBe(true);
        expect(requestBody.includes(Buffer.from("name=\"merchantAccount\""))).toBe(true);
        expect(requestBody.includes(Buffer.from("YourMerchantAccount"))).toBe(true);
        expect(response).toBeInstanceOf(Types.documentCollector.DocumentUploadResponse);
        expect(response.pspReference).toBe("QRMJC25GDZRKDM92");
    });

    test.each([
        ["context", undefined, { data: Buffer.from("file"), name: "invoice.pdf" }, "merchant"],
        ["file", Types.documentCollector.DocumentContext.PaCbInvoice, undefined, "merchant"],
        ["merchantAccount", Types.documentCollector.DocumentContext.PaCbInvoice, { data: Buffer.from("file"), name: "invoice.pdf" }, undefined],
    ])("rejects a missing required %s before sending a request", async (
        parameterName,
        context,
        file,
        merchantAccount,
    ) => {
        const client = new Client({
            apiKey: "test-api-key",
            environment: EnvironmentEnum.TEST,
        });
        const documentCollector = new DocumentCollectorAPI(client);

        await expect(documentCollector.DocumentsApi.uploadCrossBorderInvoice(
            context as Types.documentCollector.DocumentContext,
            file as Types.HttpFile,
            merchantAccount as string,
        )).rejects.toThrow(`Required parameter ${parameterName} was null or undefined`);

        expect(nock.isDone()).toBe(true);
    });
});
