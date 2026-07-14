import { SaleData } from "../../../typings/tapi/saleData";
import { RecurringProcessingModel, SaleToAcquirerData } from "../../../utils/tapi/saleToAcquirerData";
import { SaleDataHelper } from "../../../utils/tapi/saleDataHelper";
import * as SaleToAcquirerDataParser from "../../../utils/tapi/saleToAcquirerDataParser";

describe("tapi SaleToAcquirerDataParser", () => {
    const sample: SaleToAcquirerData = {
        shopperEmail: "foo@bar.com",
        shopperReference: "shopper-123",
        currency: "EUR",
        recurringProcessingModel: RecurringProcessingModel.CardOnFile,
        metadata: { orderId: "42" },
    };

    it("fromBase64 should decode a Base64-encoded JSON object", () => {
        const base64 = Buffer.from(JSON.stringify(sample), "utf8").toString("base64");
        expect(SaleToAcquirerDataParser.fromBase64(base64)).toEqual(sample);
    });

    it("fromBase64 should throw on invalid input", () => {
        const invalid = Buffer.from("not json", "utf8").toString("base64");
        expect(() => SaleToAcquirerDataParser.fromBase64(invalid)).toThrow();
    });

    it("parse should auto-detect Base64-encoded JSON", () => {
        const base64 = SaleToAcquirerDataParser.toBase64(sample);
        expect(SaleToAcquirerDataParser.parse(base64)).toEqual(sample);
    });

    it("parse should auto-detect key-value pairs", () => {
        const raw = "shopperEmail=foo@bar.com&currency=EUR&tenderOption=AskGratuity";
        expect(SaleToAcquirerDataParser.parse(raw)).toEqual({
            shopperEmail: "foo@bar.com",
            currency: "EUR",
            tenderOption: "AskGratuity",
        });
    });

    it("fromKeyValuePairs should map all known fields", () => {
        const raw = [
            "shopperEmail=foo@bar.com",
            "shopperReference=ref-1",
            "shopperStatement=statement",
            "recurringContract=RECURRING",
            "recurringDetailName=detail",
            "recurringTokenService=service",
            "recurringProcessingModel=Subscription",
            "store=store-1",
            "merchantAccount=TestMerchant",
            "currency=USD",
            "tenderOption=AskGratuity",
            "authorisationType=PreAuth",
            "ssc=1",
            "redemptionType=type",
        ].join("&");

        expect(SaleToAcquirerDataParser.fromKeyValuePairs(raw)).toEqual({
            shopperEmail: "foo@bar.com",
            shopperReference: "ref-1",
            shopperStatement: "statement",
            recurringContract: "RECURRING",
            recurringDetailName: "detail",
            recurringTokenService: "service",
            recurringProcessingModel: RecurringProcessingModel.Subscription,
            store: "store-1",
            merchantAccount: "TestMerchant",
            currency: "USD",
            tenderOption: "AskGratuity",
            authorisationType: "PreAuth",
            ssc: "1",
            redemptionType: "type",
        });
    });

    it("fromKeyValuePairs should handle metadata dotted notation", () => {
        const raw = "shopperEmail=foo@bar.com&metadata.orderId=42&metadata.channel=pos";
        expect(SaleToAcquirerDataParser.fromKeyValuePairs(raw)).toEqual({
            shopperEmail: "foo@bar.com",
            metadata: { orderId: "42", channel: "pos" },
        });
    });

    it("fromKeyValuePairs should place unknown keys into additionalData", () => {
        const raw = "shopperEmail=foo@bar.com&customField=customValue&another=value2";
        expect(SaleToAcquirerDataParser.fromKeyValuePairs(raw)).toEqual({
            shopperEmail: "foo@bar.com",
            additionalData: { customField: "customValue", another: "value2" },
        });
    });

    it("fromKeyValuePairs should drop unsupported recurringProcessingModel values", () => {
        const result = SaleToAcquirerDataParser.fromKeyValuePairs("recurringProcessingModel=Unknown");
        expect(result.recurringProcessingModel).toBeUndefined();
    });

    it("toJson and toBase64 should round-trip", () => {
        const json = SaleToAcquirerDataParser.toJson(sample);
        expect(JSON.parse(json)).toEqual(sample);

        const base64 = SaleToAcquirerDataParser.toBase64(sample);
        expect(SaleToAcquirerDataParser.parse(base64)).toEqual(sample);
    });
});

describe("tapi SaleDataHelper", () => {
    it("should return parsed data from Base64-encoded JSON", () => {
        const acquirerData: SaleToAcquirerData = { shopperEmail: "foo@bar.com", currency: "EUR" };
        const saleData = new SaleData();
        saleData.SaleToAcquirerData = SaleToAcquirerDataParser.toBase64(acquirerData);

        expect(new SaleDataHelper(saleData).getSaleToAcquirerData()).toEqual(acquirerData);
    });

    it("should return parsed data from key-value pairs", () => {
        const saleData = new SaleData();
        saleData.SaleToAcquirerData = "shopperEmail=foo@bar.com&currency=EUR";

        expect(new SaleDataHelper(saleData).getSaleToAcquirerData()).toEqual({
            shopperEmail: "foo@bar.com",
            currency: "EUR",
        });
    });

    it("should return null when SaleToAcquirerData is absent or empty", () => {
        const empty = new SaleData();
        expect(new SaleDataHelper(empty).getSaleToAcquirerData()).toBeNull();

        const blank = new SaleData();
        blank.SaleToAcquirerData = "   ";
        expect(new SaleDataHelper(blank).getSaleToAcquirerData()).toBeNull();
    });

    it("should throw when constructed without SaleData", () => {
        expect(() => new SaleDataHelper(undefined as unknown as SaleData)).toThrow();
    });
});
