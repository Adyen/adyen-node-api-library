import nock from "nock";
import { createClient, createTerminalAPIPaymentRequest, createTerminalAPIRefundRequest } from "../__mocks__/base";
import { asyncRes } from "../__mocks__/terminalApi/async";
import { syncRefund, syncRes, syncResEventNotification, syncResEventNotificationWithAdditionalAttributes, syncResEventNotificationWithUnknownEnum } from "../__mocks__/terminalApi/sync";
import Client from "../client";
import TerminalCloudAPI from "../services/terminalCloudAPI";
import { terminal} from "../typings";

let client: Client;
let terminalCloudAPI: TerminalCloudAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient(process.env.ADYEN_TERMINAL_APIKEY);

    terminalCloudAPI = new TerminalCloudAPI(client);
    scope = nock(`${client.config.terminalApiCloudEndpoint}`);
});

afterEach((): void => {
    nock.cleanAll();
});

describe("Terminal Cloud API", (): void => {
    test("should make an async payment request", async (): Promise<void> => {
        scope.post("/async").reply(200, asyncRes);

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();

        const requestResponse: string = await terminalCloudAPI.async(terminalAPIPaymentRequest);

        expect(requestResponse).toEqual("ok");
    });

    test("should make a sync payment request", async (): Promise<void> => {
        scope.post("/sync").reply(200, syncRes);

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
        const terminalAPIResponse: terminal.TerminalApiResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);

        expect(terminalAPIResponse.SaleToPOIResponse?.PaymentResponse).toBeDefined();
        expect(terminalAPIResponse.SaleToPOIResponse?.MessageHeader).toBeDefined();
    });

    test("should make a sync payment request with additional attributes", async (): Promise<void> => {
        scope.post("/sync").reply(200, syncTerminalPaymentResponse);

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();

        await expect(async () => {
            const terminalAPIResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);
            expect(terminalAPIResponse.SaleToPOIResponse?.PaymentResponse).toBeDefined();
            expect(terminalAPIResponse.SaleToPOIResponse?.MessageHeader).toBeDefined();
        }).not.toThrow();

    });

    test("should return event notification Reject", async (): Promise<void> => {

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
        scope.post("/sync").reply(200, syncResEventNotification);

        const terminalAPIResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);

        expect(terminalAPIResponse.SaleToPOIRequest?.EventNotification).toBeDefined();
        expect(terminalAPIResponse.SaleToPOIRequest?.EventNotification?.EventToNotify).toBe("Reject");

    });

    test("should return event notification Shutdown with additional attributes", async (): Promise<void> => {

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
        scope.post("/sync").reply(200, syncResEventNotificationWithAdditionalAttributes);

        await expect(async () => {
            const terminalAPIResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);
            expect(terminalAPIResponse.SaleToPOIRequest?.EventNotification).toBeDefined();
            expect(terminalAPIResponse.SaleToPOIRequest?.EventNotification?.EventToNotify).toBe("Shutdown");
            expect(terminalAPIResponse.SaleToPOIRequest?.MessageHeader).toBeDefined();
        }).not.toThrow();
    });

    test("should return event notification with unknown enum", async (): Promise<void> => {

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
        scope.post("/sync").reply(200, syncResEventNotificationWithUnknownEnum);

        await expect(async () => {
            const terminalAPIResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);
            expect(terminalAPIResponse.SaleToPOIRequest?.EventNotification).toBeDefined();
            expect(terminalAPIResponse.SaleToPOIRequest?.EventNotification?.EventToNotify).toBeUndefined();
        }).not.toThrow();
    });

    test("should make an async refund request", async (): Promise<void> => {
        scope.post("/sync").reply(200, syncRes);

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
        const terminalAPIResponse: terminal.TerminalApiResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);

        const pOITransactionId = terminalAPIResponse.SaleToPOIResponse!.PaymentResponse!.POIData!.POITransactionID;
        expect(pOITransactionId).toBeTruthy();

        scope.post("/sync").reply(200, syncRefund);

        const terminalAPIRefundRequest = createTerminalAPIRefundRequest(pOITransactionId);
        const id = Math.floor(Math.random() * Math.floor(10000000)).toString();
        terminalAPIRefundRequest.SaleToPOIRequest.MessageHeader.ServiceID = id;
        const saleToAcquirerData: terminal.SaleToAcquirerData = new terminal.SaleToAcquirerData();
        saleToAcquirerData.currency = "EUR";
        terminalAPIRefundRequest.SaleToPOIRequest.ReversalRequest!.SaleData!.SaleToAcquirerData = saleToAcquirerData;
        const terminalAPIRefundResponse = await terminalCloudAPI.sync(terminalAPIRefundRequest);

        expect(terminalAPIRefundResponse.SaleToPOIResponse?.ReversalResponse?.Response.Result).toBe("Success");
    }, 20000);
});


export const syncTerminalPaymentResponse = {
  "SaleToPOIResponse": {
    "PaymentResponse": {
      "POIData": {
        "POITransactionID": {
          "TimeStamp": "2019-04-29T00:00:00.000Z",
          "TransactionID": "4r7i001556529591000.8515565295894301"
        },
        "POIReconciliationID": "1000"
      },
      "SaleData": {
        "SaleTransactionID": {
          "TimeStamp": "2019-04-29T00:00:00.000Z",
          "TransactionID": "001"
        }
      },
      "additionalAttribute": "something",
      "PaymentReceipt": [
        {
          "RequiredSignatureFlag": false,
          "DocumentQualifier": "CashierReceipt",
          "OutputContent": {
            "OutputFormat": "Text",
            "OutputText": [
              {
                "CharacterStyle": "Bold",
                "Text": "key=header1",
                "EndOfLineFlag": true
              },
              {
                "CharacterStyle": "Bold",
                "Text": "key=header2",
                "EndOfLineFlag": true
              },
              {
                "CharacterStyle": "Bold",
                "Text": "name=MERCHANT%20COPY&key=merchantTitle",
                "EndOfLineFlag": true
              },
              {
                "Text": "key=filler",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Date&value=29%2f04%2f19&key=txdate",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Time&value=10%3a19%3a51&key=txtime",
                "EndOfLineFlag": true
              },
              {
                "Text": "key=filler",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Card&value=%2a%2a%2a%2a%2a%2a%2a%2a%2a%2a%2a%2a3511&key=pan",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Pref.%20name&value=MCC%20351%20v1%202&key=preferredName",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Card%20type&value=mc&key=cardType",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Payment%20method&value=mc&key=paymentMethod",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Payment%20variant&value=mc&key=paymentMethodVariant",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Entry%20mode&value=Contactless%20swipe&key=posEntryMode",
                "EndOfLineFlag": true
              },
              {
                "Text": "key=filler",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=AID&value=A0000000041010&key=aid",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=MID&value=1000&key=mid",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=TID&value=P400Plus-275039202&key=tid",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=PTID&value=75039202&key=ptid",
                "EndOfLineFlag": true
              },
              {
                "Text": "key=filler",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Auth.%20code&value=123456&key=authCode",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Tender&value=4r7i001556529591000&key=txRef",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Reference&value=003&key=mref",
                "EndOfLineFlag": true
              },
              {
                "Text": "key=filler",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Type&value=GOODS_SERVICES&key=txtype",
                "EndOfLineFlag": true
              },
              {
                "CharacterStyle": "Bold",
                "Text": "name=TOTAL&value=%e2%82%ac%c2%a01.00&key=totalAmount",
                "EndOfLineFlag": true
              },
              {
                "Text": "key=filler",
                "EndOfLineFlag": true
              },
              {
                "CharacterStyle": "Bold",
                "Text": "name=APPROVED&key=approved",
                "EndOfLineFlag": true
              }
            ]
          }
        },
        {
          "RequiredSignatureFlag": false,
          "DocumentQualifier": "CustomerReceipt",
          "OutputContent": {
            "OutputFormat": "Text",
            "OutputText": [
              {
                "CharacterStyle": "Bold",
                "Text": "key=header1",
                "EndOfLineFlag": true
              },
              {
                "CharacterStyle": "Bold",
                "Text": "key=header2",
                "EndOfLineFlag": true
              },
              {
                "CharacterStyle": "Bold",
                "Text": "name=CARDHOLDER%20COPY&key=cardholderHeader",
                "EndOfLineFlag": true
              },
              {
                "Text": "key=filler",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Date&value=29%2f04%2f19&key=txdate",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Time&value=10%3a19%3a51&key=txtime",
                "EndOfLineFlag": true
              },
              {
                "Text": "key=filler",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Card&value=%2a%2a%2a%2a%2a%2a%2a%2a%2a%2a%2a%2a3511&key=pan",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Pref.%20name&value=MCC%20351%20v1%202&key=preferredName",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Card%20type&value=mc&key=cardType",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Payment%20method&value=mc&key=paymentMethod",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Payment%20variant&value=mc&key=paymentMethodVariant",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Entry%20mode&value=Contactless%20swipe&key=posEntryMode",
                "EndOfLineFlag": true
              },
              {
                "Text": "key=filler",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=AID&value=A0000000041010&key=aid",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=MID&value=1000&key=mid",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=TID&value=P400Plus-275039202&key=tid",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=PTID&value=75039202&key=ptid",
                "EndOfLineFlag": true
              },
              {
                "Text": "key=filler",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Auth.%20code&value=123456&key=authCode",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Tender&value=4r7i001556529591000&key=txRef",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Reference&value=003&key=mref",
                "EndOfLineFlag": true
              },
              {
                "Text": "key=filler",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Type&value=GOODS_SERVICES&key=txtype",
                "EndOfLineFlag": true
              },
              {
                "CharacterStyle": "Bold",
                "Text": "name=TOTAL&value=%e2%82%ac%c2%a01.00&key=totalAmount",
                "EndOfLineFlag": true
              },
              {
                "Text": "key=filler",
                "EndOfLineFlag": true
              },
              {
                "CharacterStyle": "Bold",
                "Text": "name=APPROVED&key=approved",
                "EndOfLineFlag": true
              },
              {
                "Text": "key=filler",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Please%20retain%20for%20your%20records&key=retain",
                "EndOfLineFlag": true
              },
              {
                "Text": "name=Thank%20you&key=thanks",
                "EndOfLineFlag": true
              }
            ]
          }
        }
      ],
      "PaymentResult": {
        "OnlineFlag": true,
        "PaymentAcquirerData": {
          "AcquirerPOIID": "P400Plus-123456789",
          "ApprovalCode": "123456",
          "AcquirerTransactionID": {
            "TimeStamp": "2019-04-29T09:19:51.000Z",
            "TransactionID": "8515565295894301"
          },
          "MerchantID": "TestMerchant"
        },
        "CurrencyConversion": [
          {
            "ConvertedAmount": {
              "AmountValue": 48.32,
              "Currency": "EUR"
            },
            "CustomerApprovedFlag": true,
            "Markup": 3,
            "Rate": 0.035
          }
        ],
        "PaymentInstrumentData": {
          "CardData": {
            "EntryMode": [
              "Tapped"
            ],
            "PaymentBrand": "mc",
            "MaskedPan": "411111 **** 1111",
            "SensitiveCardData": {
              "ExpiryDate": "1225"
            }
          },
          "PaymentInstrumentType": "Card"
        },
        "AmountsResp": {
          "AuthorizedAmount": 1,
          "Currency": "EUR"
        }
      },
      "Response": {
        "Result": "Success",
        "AdditionalResponse": "tid=75039202&AID=A0000000041010&transactionType=GOODS_SERVICES&backendGiftcardIndicator=false&expiryYear=2025&acquirerAccountCode=TestPmmAcquirerAccount&alias=M900978995070104&posOriginalAmountCurrency=EUR&giftcardIndicator=false&authorisedAmountValue=100&pspReference=8515565295894301&paymentMethodVariant=mc&cardHolderName=N%2fA&refusalReasonRaw=APPROVED&authorisationMid=1000&expiryDate=12%2f2025&applicationPreferredName=MCC%20351%20v1%202&acquirerCode=TestPmmAcquirer&txtime=10%3a19%3a51&iso8601TxDate=2019-04-29T09%3a19%3a51.0000000%2b0000&cardType=mc&posOriginalAmountValue=100&offline=false&aliasType=Default&txdate=29-04-2019&paymentMethod=mc&cvcResult=0%20Unknown&avsResult=0%20Unknown&mid=1000&merchantReference=003&transactionReferenceNumber=8515565295894301&expiryMonth=12&cardSummary=3511&posTotalAmountValue=100&posAuthAmountCurrency=EUR&cardHolderVerificationMethodResults=3F0300&authCode=123456&shopperCountry=NL&posEntryMode=CLESS_SWIPE&cardScheme=mc&cardBin=541333&posAuthAmountValue=100"
      }
    },
    "MessageHeader": {
      "ProtocolVersion": "3.0",
      "SaleID": "001",
      "MessageClass": "Service",
      "MessageCategory": "Payment",
      "ServiceID": "1234567890",
      "POIID": "P400Plus-123456789",
      "MessageType": "Response",
      "additionalAttribute": "somethingElse",
    }
  }
}

