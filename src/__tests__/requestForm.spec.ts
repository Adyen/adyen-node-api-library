import {
    createRequestForm,
    finalizeRequestForm,
} from "../helpers/requestForm";

describe("requestForm", () => {
    test("creates and finalizes a multipart form", () => {
        const form = createRequestForm(["multipart/form-data"]);
        expect("getBuffer" in form).toBe(true);

        form.append("context", "paCbInvoice");
        if ("getBuffer" in form) {
            form.append("file", Buffer.from("pdf"), { filename: "invoice.pdf" });
        }

        const { request, headers } = finalizeRequestForm(form);

        expect(Buffer.isBuffer(request)).toBe(true);
        expect(headers?.["content-type"]).toMatch(/^multipart\/form-data; boundary=/);
        expect(headers?.["Content-Length"]).toBe((request as Buffer).length);
    });

    test("creates and finalizes a URL-encoded form", () => {
        const form = createRequestForm(["application/x-www-form-urlencoded"]);
        form.append("merchantAccount", "Merchant Account");

        const { request, headers } = finalizeRequestForm(form, {
            "X-Custom-Header": "custom-value",
        });

        expect(request).toBe("merchantAccount=Merchant+Account");
        expect(headers).toEqual({
            "X-Custom-Header": "custom-value",
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": Buffer.byteLength(request as string),
        });
    });

    test("replaces existing content headers case-insensitively", () => {
        const form = createRequestForm(["application/x-www-form-urlencoded"]);
        form.append("context", "paCbInvoice");

        const { request, headers } = finalizeRequestForm(form, {
            "CoNtEnT-TyPe": "application/json",
            "content-LENGTH": 1,
            "X-Custom-Header": "custom-value",
        });

        expect(headers).toEqual({
            "X-Custom-Header": "custom-value",
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": Buffer.byteLength(request as string),
        });
    });
});
