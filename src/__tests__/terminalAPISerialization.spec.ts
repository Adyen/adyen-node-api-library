import { MessageCategoryType, MessageClassType, MessageType, ObjectSerializer, TerminalApiRequest } from "../typings/terminal/models";


describe("ObjectSerializer.serialize", () => {

    it("should serialize TerminalAPIPaymentRequest", () => {
        const terminalAPIPaymentRequest = newTerminalAPIPaymentRequest();

        const json = ObjectSerializer.serialize(terminalAPIPaymentRequest, "TerminalApiRequest");

        expect(json).toBeTruthy();
        expect(json).toHaveProperty("SaleToPOIRequest");
        expect(json.SaleToPOIRequest).toHaveProperty("MessageHeader");
        expect(json.SaleToPOIRequest).toHaveProperty("PaymentRequest");

        expect(json.SaleToPOIRequest.PaymentRequest).toHaveProperty("SaleData");
        expect(json.SaleToPOIRequest.PaymentRequest.SaleData).toHaveProperty("SaleTransactionID");
        expect(json.SaleToPOIRequest.PaymentRequest.SaleData.SaleTransactionID).toHaveProperty("TimeStamp");
        expect(json.SaleToPOIRequest.PaymentRequest.SaleData).toHaveProperty("SaleToAcquirerData");

        const saleToAcquirerData = json.SaleToPOIRequest.PaymentRequest.SaleData.SaleToAcquirerData;
        // SaleToAcquirerData should be a string
        expect(typeof(saleToAcquirerData)).toBe("string");
        // SaleToAcquirerData should be base64 encoded
        expect(() => Buffer.from(saleToAcquirerData, "base64").toString("utf-8")).not.toThrow();

        // decode and test metadata
        const decoded = JSON.parse(Buffer.from(saleToAcquirerData, "base64").toString("utf-8"));
        expect(decoded).toHaveProperty("applicationInfo");

        expect(decoded).toHaveProperty("metadata");
        expect(decoded.metadata).toHaveProperty("someMetaDataKey1");
        expect(decoded.metadata).toHaveProperty("someMetaDataKey2");
        expect(decoded.metadata.someMetaDataKey1).toBe("YOUR_VALUE");
        expect(decoded.metadata.someMetaDataKey2).toBe("YOUR_VALUE");
    });

    it("should serialize SaleToAcquirerData as base64 if object", () => {
        const obj = { foo: "bar" };
        const expected = Buffer.from(JSON.stringify(obj)).toString("base64");
        expect(ObjectSerializer.serialize(obj, "SaleToAcquirerData")).toBe(expected);
    });

    it("should serialize TerminalAPIPaymentRequest with additionalData as JSON object", () => {
        const terminalAPIPaymentRequest = newTerminalAPIPaymentRequestWithAdditionalDataAsJSONObject();

        const json = ObjectSerializer.serialize(terminalAPIPaymentRequest, "TerminalApiRequest");

        expect(json).toBeTruthy();
        expect(json).toHaveProperty("SaleToPOIRequest");
        expect(json.SaleToPOIRequest).toHaveProperty("MessageHeader");
        expect(json.SaleToPOIRequest).toHaveProperty("PaymentRequest");

        expect(json.SaleToPOIRequest.PaymentRequest).toHaveProperty("SaleData");
        expect(json.SaleToPOIRequest.PaymentRequest.SaleData).toHaveProperty("SaleToAcquirerData");
        const saleToAcquirerData = json.SaleToPOIRequest.PaymentRequest.SaleData.SaleToAcquirerData;
        // SaleToAcquirerData should be a string
        expect(typeof(saleToAcquirerData)).toBe("string");
        // SaleToAcquirerData should be base64 encoded
        expect(() => Buffer.from(saleToAcquirerData, "base64").toString("utf-8")).not.toThrow();

        // decode and test metadata
        const decoded = JSON.parse(Buffer.from(saleToAcquirerData, "base64").toString("utf-8"));
        // verify manualCapture
        expect(decoded).toHaveProperty("additionalData");
        expect(decoded.additionalData).toHaveProperty("manualCapture");
        expect(decoded.additionalData.manualCapture).toBe("true");
    });

    it("should return undefined when data is undefined", () => {
        expect(ObjectSerializer.serialize(undefined, "string")).toBeUndefined();
    });

    it("should serialize primitive types", () => {
        expect(ObjectSerializer.serialize("hello", "string")).toBe("hello");
        expect(ObjectSerializer.serialize(123, "number")).toBe(123);
        expect(ObjectSerializer.serialize(true, "boolean")).toBe(true);
    });

    it("should serialize Date to ISO string", () => {
        const date = new Date("2024-01-01T12:00:00Z");
        expect(ObjectSerializer.serialize(date, "Date")).toBe(date.toISOString());
    });

    it("should serialize Array of primitives", () => {
        expect(ObjectSerializer.serialize([1, 2, 3], "Array<number>")).toEqual([1, 2, 3]);
        expect(ObjectSerializer.serialize(["a", "b"], "Array<string>")).toEqual(["a", "b"]);
    });

    it("should serialize SaleToAcquirerData as string if already string", () => {
        expect(ObjectSerializer.serialize("somestring", "SaleToAcquirerData")).toBe("somestring");
    });

    it("should serialize enums as is", () => {
        expect(ObjectSerializer.serialize("Default", "AccountType")).toBe("Default");
    });

});

const newTerminalAPIPaymentRequest = (): TerminalApiRequest => {
    const messageHeader = {
        MessageCategory: MessageCategoryType.Payment,
        MessageClass: MessageClassType.Service,
        MessageType: MessageType.Request,
        POIID: "V400m-324688179",
        ProtocolVersion: "3.0",
        SaleID: "POSSystemID12345",
        ServiceID: "0207111104",
    };

    const paymentRequest = {
        PaymentTransaction: {
            AmountsReq: {
                Currency: "EUR",
                RequestedAmount: 1000, 
            },
        },
        SaleData: {
            SaleTransactionID: {
                TimeStamp: new Date().toISOString(),
                TransactionID: "1234567890",
            },
            SaleToAcquirerData: {
                applicationInfo: {
                    merchantApplication: {
                        version: "1.0",
                        name: "TestApp",
                    },
                },
                metadata: {
                    someMetaDataKey1: "YOUR_VALUE",
                    someMetaDataKey2: "YOUR_VALUE",
                },
            },
        },
    };

    return { SaleToPOIRequest: {MessageHeader: messageHeader, PaymentRequest: paymentRequest} };
};

const newTerminalAPIPaymentRequestWithAdditionalDataAsJSONObject = (): TerminalApiRequest => {
    const messageHeader = {
        MessageCategory: MessageCategoryType.Payment,
        MessageClass: MessageClassType.Service,
        MessageType: MessageType.Request,
        POIID: "V400m-324688179",
        ProtocolVersion: "3.0",
        SaleID: "POSSystemID12345",
        ServiceID: "0207111104",
    };

    const paymentRequest = {
        PaymentTransaction: {
            AmountsReq: {
                Currency: "EUR",
                RequestedAmount: 1000, 
            },
        },
        SaleData: {
            SaleTransactionID: {
                TimeStamp: new Date().toISOString(),
                TransactionID: "1234567890",
            },
            SaleToAcquirerData: {
                additionalData: {
                    manualCapture: "true"
                },
            },
        },
    };

    return { SaleToPOIRequest: {MessageHeader: messageHeader, PaymentRequest: paymentRequest} };
};
