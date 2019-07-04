import {createMockClientFromResponse, createTerminalAPIPaymentRequest} from "../__mocks__/base";
import {asyncRes} from "../__mocks__/terminalApi/async";
import {syncRes} from "../__mocks__/terminalApi/sync";
import Client from "../client";
import TerminalCloudAPI from "../service/terminalCloudAPI";
import {MessageHeader, SaleToPoiResponse, TerminalApiRequest, TerminalApiResponse} from "../typings/terminal";

describe("Terminal Cloud API", (): void => {
    it("should make an async payment request", async (): Promise<void> => {
        const client: Client = createMockClientFromResponse(asyncRes);
        const terminalCloudAPI: TerminalCloudAPI = new TerminalCloudAPI(client);

        const terminalAPIPaymentRequest: TerminalApiRequest = createTerminalAPIPaymentRequest() as TerminalApiRequest;

        const requestResponse: string = await terminalCloudAPI.async(terminalAPIPaymentRequest);

        expect(requestResponse).toEqual("ok");
    });

    it("should make a sync payment request", async (): Promise<void> => {
        const client: Client = createMockClientFromResponse(syncRes);
        const terminalCloudAPI: TerminalCloudAPI = new TerminalCloudAPI(client);
        const terminalAPIPaymentRequest: TerminalApiRequest = createTerminalAPIPaymentRequest() as TerminalApiRequest;
        const terminalAPIResponse: TerminalApiResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);

        const saleToPoiResponse: SaleToPoiResponse = terminalAPIResponse.saleToPoiResponse;

        const messageHeader: MessageHeader = saleToPoiResponse.messageHeader;
        expect(messageHeader.messageType).toEqual("Response");
        expect(messageHeader.messageClass).toEqual("Service");
        expect(messageHeader.messageCategory).toEqual("Payment");
        expect(messageHeader.protocolVersion).toEqual("3.0");
        expect(messageHeader.saleId).toEqual("001");
        expect(messageHeader.serviceId).toEqual("1234567890");
        expect(messageHeader.poiid).toEqual("P400Plus-123456789");

        const response = saleToPoiResponse.paymentResponse.response;
        expect(response.result).toEqual("Success");
        expect(response.additionalResponse).toBeTruthy();

        const poiData = saleToPoiResponse.paymentResponse.poiData;
        expect(poiData.poiReconciliationId).toEqual("1000");
        expect(poiData.poiTransactionId.transactionId).toEqual("4r7i001556529591000.8515565295894301");
        expect(poiData.poiTransactionId.timeStamp).toEqual("2019-04-29T00:00:00.000Z");

        const saleData = saleToPoiResponse.paymentResponse.saleData;
        expect(saleData.saleTransactionId.transactionId).toEqual("001");
        expect(saleData.saleTransactionId.timeStamp).toEqual("2019-04-29T00:00:00.000Z");

        expect(saleToPoiResponse.paymentResponse.paymentReceipt.length).toBeGreaterThan(0);
        saleToPoiResponse.paymentResponse.paymentReceipt.forEach((receipt): void => {
            expect(receipt.outputContent.outputFormat).toEqual("Text");
            expect(receipt.outputContent.outputText.length).toBeGreaterThan(0);
            receipt.outputContent.outputText.forEach((outputText): void => {
                expect(outputText.text).toBeTruthy();
            });
        });
        const {paymentResult} = saleToPoiResponse.paymentResponse;
        expect(paymentResult.onlineFlag).toBeTruthy();
        expect(paymentResult.paymentAcquirerData.acquirerPoiid).toEqual("P400Plus-123456789");
        expect(paymentResult.paymentAcquirerData.approvalCode).toEqual("123456");
        expect(paymentResult.paymentAcquirerData.merchantId).toEqual("TestMerchant");
        expect(paymentResult.paymentInstrumentData.cardData.paymentBrand).toEqual("mc");
        expect(paymentResult.paymentInstrumentData.cardData.maskedPan).toEqual("411111 **** 1111");
        expect(paymentResult.paymentInstrumentData.paymentInstrumentType).toEqual("Card");
        expect(paymentResult.amountsResp.currency).toEqual("EUR");
        expect(paymentResult.amountsResp.authorizedAmount).toEqual(1);
    });
});
