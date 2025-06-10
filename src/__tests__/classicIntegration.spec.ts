import nock from "nock";
import {createClient} from "../__mocks__/base";
import Client from "../client";
import { PaymentAPI } from "../services";
import { payment } from "../typings";
import HttpClientException from "../httpClient/httpClientException";
import {PaymentResult} from "../typings/payment/paymentResult";

let client: Client;
let classicIntegration: PaymentAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock("https://pal-test.adyen.com/pal/servlet/Payment/v68");
    classicIntegration = new PaymentAPI(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Classic Integration", (): void => {
    test("Should authorise payment", async (): Promise<void> => {
        scope.post("/authorise")
            .reply(200, {
                "additionalData": {
                "scaExemptionRequested": "transactionRiskAnalysis",
                "checkout.cardAddedBrand": "visa"
                },
                "pspReference": "JVBXGSDM53RZNN82",
                "resultCode": "Authorised",
                "authCode": "011381"
            }
        );
        const paymentRequest: payment.PaymentRequest = {
            "card": {
                "number": "4111111111111111",
                "expiryMonth": "03",
                "expiryYear": "2030",
                "cvc": "737",
                "holderName": "John Smith"
              },
              "amount": {
                "value": 1500,
                "currency": "EUR"
              },
              "reference": "YOUR_REFERENCE",
              "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
        };

        const paymentResult: PaymentResult = await classicIntegration.PaymentsApi.authorise(paymentRequest);
        expect(paymentResult.pspReference).toEqual("JVBXGSDM53RZNN82");
    });

    test("Should properly handle invalid merchant account from API", async (): Promise<void> => {
        try {
            scope.post("/authorise")
                .reply(403, {
                        "status": 403,
                        "errorCode": "901",
                        "message": "Invalid Merchant Account",
                        "errorType": "security"
                    }
                );
            const paymentRequest: payment.PaymentRequest = {
                "card": {
                    "number": "4111111111111111",
                    "expiryMonth": "03",
                    "expiryYear": "2030",
                    "cvc": "737",
                    "holderName": "John Smith"
                },
                "amount": {
                    "value": 1500,
                    "currency": "EUR"
                },
                "reference": "YOUR_REFERENCE",
                "merchantAccount": "INVALID_MERCHANT_ACCOUNT"
            };

           await classicIntegration.PaymentsApi.authorise(paymentRequest);
        } catch (error) {
            expect(error instanceof HttpClientException).toBeTruthy();
            if(error instanceof HttpClientException && error.responseBody && error.stack) {
                expect(JSON.parse(error.responseBody).errorType).toBe("security");
            } else {
                fail("Error did not contain the expected data");
            }
        }
    });

    test("Should complete 3DS authorisation", async (): Promise<void> => {
        scope.post("/authorise3d")
            .reply(200, {
                "additionalData": {
                "scaExemptionRequested": "transactionRiskAnalysis",
                "checkout.cardAddedBrand": "visa"
                },
                "pspReference": "JVBXGSDM53RZNN82",
                "resultCode": "Authorised",
                "authCode": "011381"
            }
        );
        const paymentRequest: payment.PaymentRequest3d = {
            "md": "31h..........vOXek7w",
            "paResponse": "eNqtmF........wGVA4Ch",
            "shopperIP": "61.294.12.12",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

        const paymentResult: payment.PaymentResult = await classicIntegration.PaymentsApi.authorise3d(paymentRequest);
        expect(paymentResult.pspReference).toEqual("JVBXGSDM53RZNN82");
    });

    test("Should complete 3DS2 authorisation", async (): Promise<void> => {
        scope.post("/authorise3ds2")
            .reply(200, {
                "additionalData": {
                "scaExemptionRequested": "transactionRiskAnalysis",
                "checkout.cardAddedBrand": "visa"
                },
                "pspReference": "JVBXGSDM53RZNN82",
                "resultCode": "Authorised",
                "authCode": "011381"
            }
        );
        const paymentRequest: payment.PaymentRequest3ds2 = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "amount": {
                "value": 1500,
                "currency": "EUR"
              },
            "reference": "YOUR_REFERENCE",
            "threeDS2RequestData": {
              "threeDSCompInd": "Y",
              "deviceChannel": "testDeviceChannel"
            },
            "threeDS2Token": "— - BINARY DATA - -"
          };

        const paymentResult: payment.PaymentResult = await classicIntegration.PaymentsApi.authorise3ds2(paymentRequest);
        expect(paymentResult.pspReference).toEqual("JVBXGSDM53RZNN82");
    });

    test("Should get auth result after 3DS authentication", async (): Promise<void> => {
        scope.post("/getAuthenticationResult").reply(200, {
            "threeDS2Result": { "authenticationValue": "THREEDS2RESULT"}
        });

        const getAuthenticationResultrequest: payment.AuthenticationResultRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "pspReference": "9935272408535455"
        };

        const getAuthenticationResultResponse: payment.AuthenticationResultResponse = await classicIntegration.PaymentsApi.getAuthenticationResult(getAuthenticationResultrequest);
        expect(getAuthenticationResultResponse?.threeDS2Result?.authenticationValue).toEqual("THREEDS2RESULT");
    });

    test("Should retrieve 3DS2 result", async (): Promise<void> => {
        scope.post("/retrieve3ds2Result").reply(200, {
            "threeDS2Result": { "authenticationValue": "THREEDS2RESULT"}
        });
        const retrieve3ds2ResultRequest: payment.ThreeDS2ResultRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "pspReference": "9935272408535455"
          };

        const retrieve3ds2ResultResponse: payment.ThreeDS2ResultResponse = await classicIntegration.PaymentsApi.retrieve3ds2Result(retrieve3ds2ResultRequest);
        expect(retrieve3ds2ResultResponse?.threeDS2Result?.authenticationValue).toEqual("THREEDS2RESULT");
    });

    test("Should successfully send Capture request", async (): Promise<void> => {
        scope.post("/capture")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[capture-received]"
            });

        const modificationRequest: payment.CaptureRequest = {
            "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
            "modificationAmount": {
              "value": 500,
              "currency": "EUR"
            },
            "reference": "YourModificationReference",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

          const modificationResult: payment.ModificationResult = await classicIntegration.ModificationsApi.capture(modificationRequest);
          expect(modificationResult.response).toEqual(payment.ModificationResult.ResponseEnum.CaptureReceived);
    });

    test("Should successfully send Cancel request", async (): Promise<void> => {
        scope.post("/cancel")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[cancel-received]"
            });

        const modificationRequest: payment.CancelRequest = {
            "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
            "reference": "YourModificationReference",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

          const modificationResult: payment.ModificationResult = await classicIntegration.ModificationsApi.cancel(modificationRequest);
          expect(modificationResult.response).toEqual(payment.ModificationResult.ResponseEnum.CancelReceived);
    });

    test("Should successfully send Refund request", async (): Promise<void> => {
        scope.post("/refund")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[refund-received]"
            });

        const modificationRequest: payment.RefundRequest = {
            "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
            "modificationAmount": {
              "value": 500,
              "currency": "EUR"
            },
            "reference": "YourModificationReference",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

          const modificationResult: payment.ModificationResult = await classicIntegration.ModificationsApi.refund(modificationRequest);
          expect(modificationResult.response).toEqual(payment.ModificationResult.ResponseEnum.RefundReceived);
    });

    test("Should successfully send CancelOrRefund request", async (): Promise<void> => {
        scope.post("/cancelOrRefund")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[cancelOrRefund-received]"
            });

        const modificationRequest: payment.CancelOrRefundRequest = {
            "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
            "reference": "YourModificationReference",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

          const modificationResult: payment.ModificationResult = await classicIntegration.ModificationsApi.cancelOrRefund(modificationRequest);
          expect(modificationResult.response).toEqual(payment.ModificationResult.ResponseEnum.CancelOrRefundReceived);
    });
    
    test("Should successfully send TechnicalCancel request", async (): Promise<void> => {
        scope.post("/technicalCancel")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[technical-cancel-received]"
            });

        const modificationRequest: payment.TechnicalCancelRequest = {
            "originalMerchantReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
            "modificationAmount": {
              "value": 500,
              "currency": "EUR"
            },
            "reference": "YourModificationReference",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

          const modificationResult: payment.ModificationResult = await classicIntegration.ModificationsApi.technicalCancel(modificationRequest);
          expect(modificationResult.response).toEqual(payment.ModificationResult.ResponseEnum.TechnicalCancelReceived);
    });

    test("Should successfully send AdjustAuthorisation request", async (): Promise<void> => {
        scope.post("/adjustAuthorisation")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[adjustAuthorisation-received]"
            });

        const modificationRequest: payment.AdjustAuthorisationRequest = {
            "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
            "modificationAmount": {
              "value": 500,
              "currency": "EUR"
            },
            "reference": "YourModificationReference",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

          const modificationResult: payment.ModificationResult = await classicIntegration.ModificationsApi.adjustAuthorisation(modificationRequest);
          expect(modificationResult.response).toEqual(payment.ModificationResult.ResponseEnum.AdjustAuthorisationReceived);
    });

    test("Should successfully send Donate request", async (): Promise<void> => {
        scope.post("/donate")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[donation-received]"
            });

        const modificationRequest: payment.DonationRequest = {
            "originalReference": "COPY_PSP_REFERENCE_FROM_AUTHORISE_RESPONSE",
            "modificationAmount": {
              "value": 500,
              "currency": "EUR"
            },
            "reference": "YOUR_DONATION_REFERENCE",
            "donationAccount": "AdyenGivingDemo",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
          };

          const modificationResult: payment.ModificationResult = await classicIntegration.ModificationsApi.donate(modificationRequest);
          expect(modificationResult.response).toEqual(payment.ModificationResult.ResponseEnum.DonationReceived);
    });

    test("Should successfully send VoidPendingRefund request", async (): Promise<void> => {
        scope.post("/voidPendingRefund")
            .reply(200, {
                "pspReference": "YOUR_REFERENCE",
                "response": "[voidPendingRefund-received]"
            });

        const modificationRequest: payment.VoidPendingRefundRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "tenderReference": "5Iw8001176969533005",
            "uniqueTerminalId": "VX820-123456789"
          };

          const modificationResult: payment.ModificationResult = await classicIntegration.ModificationsApi.voidPendingRefund(modificationRequest);
          expect(modificationResult.response).toEqual(payment.ModificationResult.ResponseEnum.VoidPendingRefundReceived);
    });
});