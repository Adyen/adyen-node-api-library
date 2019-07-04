import {createMockClientFromResponse, createTerminalAPIPaymentRequest} from "../__mocks__/base";
import {localRes} from "../__mocks__/terminalApi/local";
import Client from "../client";
import TerminalLocalAPI from "../service/terminalLocalAPI";
import {SecurityKey, TerminalApiRequest, TerminalApiResponse} from "../typings/terminal";

describe("Terminal Local API", (): void => {
    it("should make a local payment", async (): Promise<void> => {
        const client: Client = createMockClientFromResponse(localRes);
        const terminalLocalAPI: TerminalLocalAPI = new TerminalLocalAPI(client);

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest() as TerminalApiRequest;

        const securityKey: SecurityKey = {
            adyenCryptoVersion: 1,
            keyIdentifier: "CryptoKeyIdentifier12345",
            keyVersion: 1,
            passphrase: "p@ssw0rd123456",
        };

        const terminalApiResponse: TerminalApiResponse =
            await terminalLocalAPI.request(terminalAPIPaymentRequest, securityKey);
        const saleToPoiResponse = terminalApiResponse.saleToPoiResponse;
        const messageHeader = saleToPoiResponse.messageHeader;

        expect(messageHeader.messageType).toEqual("Response");
        expect(messageHeader.messageClass).toEqual("Service");
        expect(messageHeader.messageCategory).toEqual("Payment");
        expect(messageHeader.protocolVersion).toEqual("3.0");
        expect(messageHeader.saleId).toEqual("325488592");
        expect(messageHeader.serviceId).toEqual("325488592");
        expect(messageHeader.poiid).toEqual("P400Plus-275039202");

        const response = saleToPoiResponse.paymentResponse.response;
        expect(response.result).toEqual("Success");
        expect(response.additionalResponse).toBeTruthy();

        const poiData = saleToPoiResponse.paymentResponse.poiData;
        expect(poiData.poiReconciliationId).toEqual("1000");
        expect(poiData.poiTransactionId.transactionId).toEqual("4r7i001557325515012.8815573255107661");
        expect(poiData.poiTransactionId.timeStamp).toEqual("2019-05-08T14:25:15.000Z");

        const saleData = saleToPoiResponse.paymentResponse.saleData;
        expect(saleData.saleTransactionId.transactionId).toEqual("999");
        expect(saleData.saleTransactionId.timeStamp).toEqual("2019-05-08T14:24:48.598Z");

        expect(saleToPoiResponse.paymentResponse.paymentReceipt.length).toBeGreaterThan(0);
        saleToPoiResponse.paymentResponse.paymentReceipt.forEach((receipt): void => {
            expect(receipt.outputContent.outputFormat).toEqual("Text");
            expect(receipt.outputContent.outputText.length).toBeGreaterThan(0);
            receipt.outputContent.outputText.forEach((outputText): void => {
                expect(outputText.text).toBeTruthy();
            });
        });

        const paymentResult = saleToPoiResponse.paymentResponse.paymentResult;
        expect(paymentResult.onlineFlag).toBeTruthy();
        expect(paymentResult.paymentAcquirerData.acquirerPoiid).toEqual("P400Plus-275039202");
        expect(paymentResult.paymentAcquirerData.approvalCode).toEqual("123456");
        expect(paymentResult.paymentAcquirerData.merchantId).toEqual("TestMerchantRenatoTest");
        expect(paymentResult.paymentInstrumentData.cardData.paymentBrand).toEqual("mc");
        expect(paymentResult.paymentInstrumentData.cardData.maskedPan).toEqual("541333 **** 0010");
        expect(paymentResult.paymentInstrumentData.paymentInstrumentType).toEqual("Card");
        expect(paymentResult.amountsResp.currency).toEqual("EUR");
        expect(paymentResult.amountsResp.authorizedAmount).toEqual(1);
    });
});
