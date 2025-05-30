import nock from "nock";
import {createClient} from "../__mocks__/base";
import {paymentMethodsSuccess} from "../__mocks__/checkout/paymentMethodsSuccess";
import {paymentsSuccess} from "../__mocks__/checkout/paymentsSuccess";
import {paymentsRedirectAction} from "../__mocks__/checkout/paymentsRedirectAction";
import {paymentDetailsSuccess} from "../__mocks__/checkout/paymentsDetailsSuccess";
// import {paymentSessionSuccess} from "../__mocks__/checkout/paymentSessionSucess";
import {originKeysSuccess} from "../__mocks__/checkout/originkeysSuccess";
import {paymentsResultMultibancoSuccess} from "../__mocks__/checkout/paymentsResultMultibancoSuccess";
// import {paymentsResultSuccess} from "../__mocks__/checkout/paymentsResultSucess";
import {sessionsSuccess} from "../__mocks__/checkout/sessionsSuccess";
import Client from "../client";
import {CheckoutAPI} from "../services";
import HttpClientException from "../httpClient/httpClientException";
import { checkout } from "../typings";
import { IRequest } from "../typings/requestOptions";
import { SessionResultResponse } from "../typings/checkout/sessionResultResponse";
import { payments3DS2NativeAction } from "../__mocks__/checkout/payments3DS2NativeAction";

const merchantAccount = process.env.ADYEN_MERCHANT!;
const reference = "Your order number";
function createAmountObject(currency: string, value: number): checkout.Amount {
    return {
        currency,
        value,
    };
}

function createPaymentsDetailsRequest(): checkout.PaymentDetailsRequest {
    return {
        details: {
            MD: "mdValue",
            PaRes: "paResValue",
        },
        paymentData: "Ab02b4c0!BQABAgCJN1wRZuGJmq8dMncmypvknj9s7l5Tj...",
    };
}

export function createPaymentsCheckoutRequest(): checkout.PaymentRequest {
    const paymentMethodDetails = {
        type: checkout.CardDetails.TypeEnum.Scheme,
        encryptedCardNumber: "test_4111111111111111",
        encryptedExpiryMonth: "test_03",
        encryptedExpiryYear: "test_2030",
        encryptedSecurityCode: "test_737"
    };

    return {
        amount: createAmountObject("USD", 1000),
        merchantAccount,
        paymentMethod: paymentMethodDetails,
        reference,
        returnUrl: "https://your-company.com/...",
        shopperReference: "shopperReference",
        storePaymentMethod: true
    };
}

// function createPaymentSessionRequest(): checkout.PaymentSetupRequest {
//     return {
//         amount: createAmountObject("USD", 1000),
//         countryCode: "NL",
//         merchantAccount,
//         reference,
//         returnUrl: "https://your-company.com/...",
//         channel: checkout.PaymentSetupRequest.ChannelEnum.Web,
//         sdkVersion: "3.7.0"
//     };
// }

function createUpdatePaymentLinkRequest(): checkout.UpdatePaymentLinkRequest {
    return {
        "status": checkout.UpdatePaymentLinkRequest.StatusEnum.Expired
    };
}
function getPaymentLinkSuccess(expiresAt: Date): checkout.PaymentLinkResponse {
    return {
        amount: createAmountObject("USD", 1000),
        expiresAt,
        reference,
        url: "PaymentLinkResponse.url",
        id: "mocked_id",
        merchantAccount,
        status: checkout.PaymentLinkResponse.StatusEnum.Active
    };
}

function createPaymentLinkRequest(): checkout.PaymentLinkRequest {
    return {
        allowedPaymentMethods: ["scheme", "boletobancario"],
        amount: createAmountObject("USD", 1000),
        countryCode: "BR",
        merchantAccount,
        shopperReference: "shopperReference",
        shopperEmail: "test@email.com",
        shopperLocale: "pt_BR",
        billingAddress: {
            street: "Roque Petroni Jr",
            postalCode: "59000060",
            city: "São Paulo",
            houseNumberOrName: "999",
            country: "BR",
            stateOrProvince: "SP"
        },
        deliveryAddress: {
            street: "Roque Petroni Jr",
            postalCode: "59000060",
            city: "São Paulo",
            houseNumberOrName: "999",
            country: "BR",
            stateOrProvince: "SP"
        },
        reference
    };
}

function createSessionRequest(): checkout.CreateCheckoutSessionRequest {
    return {
        amount: createAmountObject("USD", 1000),
        countryCode: "NL",
        merchantAccount,
        reference,
        returnUrl: "https://your-company.com/...",
    };
}

let client: Client;
let checkoutService: CheckoutAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock("https://checkout-test.adyen.com/v71");
    checkoutService = new CheckoutAPI(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Checkout", (): void => {
    test("should deserialize JSON into valid paymentRequest object", async (): Promise<void> => {
        const requestJson: JSON = JSON.parse(`{
            "amount": {
                "currency": "USD",
                "value": 1000
            },
            "reference": "Your order number",
            "paymentMethod": {
                "type": "applepay",
                "applePayToken": "VNRWtuNlNEWkRCSm1xWndjMDFFbktkQU..."
            },
            "returnUrl": "https://your-company.com/...",
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
        }`);
        const paymentRequest: checkout.PaymentRequest = await checkout.ObjectSerializer.deserialize(requestJson, "PaymentRequest", "");
        expect(paymentRequest.returnUrl).toEqual("https://your-company.com/...");
        expect(paymentRequest.amount.value).toBe(1000);
        const paymentMethodDetails: checkout.ApplePayDetails = paymentRequest.paymentMethod as checkout.ApplePayDetails;
        expect(paymentMethodDetails.applePayToken).toEqual("VNRWtuNlNEWkRCSm1xWndjMDFFbktkQU...");
    });
    test("should add idempotency key to request headers", async (): Promise<void> => {
        const paymentsRequest: checkout.PaymentRequest = createPaymentsCheckoutRequest();
        scope.post("/payments")
            .reply(200, paymentsSuccess)
            .matchHeader("Idempotency-Key", "testKey");
        await checkoutService.PaymentsApi.payments(paymentsRequest, {idempotencyKey: "testKey"});

        const paymentMethodsRequest: checkout.PaymentMethodsRequest = {merchantAccount};
        scope.post("/paymentMethods")
            .reply(200, paymentMethodsSuccess)
            .matchHeader("Idempotency-Key", "testKey");
        await checkoutService.PaymentsApi.paymentMethods(paymentMethodsRequest, {idempotencyKey: "testKey"});

        const expiresAt = "2020-12-18T10:15:30+01:00";
        const paymentLinkSuccess: checkout.PaymentLinkResponse = getPaymentLinkSuccess(new Date(expiresAt));
        scope.post("/paymentLinks")
            .reply(200, paymentLinkSuccess)
            .matchHeader("Idempotency-Key", "testKey");
        await checkoutService.PaymentLinksApi.paymentLinks(createPaymentLinkRequest(), {idempotencyKey: "testKey"});

        scope.patch("/paymentLinks/321")
            .reply(200, { ...paymentLinkSuccess, status: "expired" })
            .matchHeader("Idempotency-Key", "testKey");
        await checkoutService.PaymentLinksApi.updatePaymentLink("321",createUpdatePaymentLinkRequest(), {idempotencyKey: "testKey"});

        scope.get("/paymentLinks/123")
            .reply(200, paymentLinkSuccess)
            .matchHeader("Idempotency-Key", "testKey");
        await checkoutService.PaymentLinksApi.getPaymentLink("123", {idempotencyKey: "testKey"});

        scope.post("/payments/details")
            .reply(200, paymentDetailsSuccess)
            .matchHeader("Idempotency-Key", "testKey");
        await checkoutService.PaymentsApi.paymentsDetails(createPaymentsDetailsRequest(), {idempotencyKey: "testKey"});

        // scope.post("/paymentSession")
        //     .reply(200, paymentSessionSuccess)
        //     .matchHeader("Idempotency-Key", "testKey");
        // const paymentSessionRequest: checkout.PaymentSetupRequest = createPaymentSessionRequest();
        // await checkoutService.ClassicCheckoutSDKApi.paymentSession(paymentSessionRequest, {idempotencyKey: "testKey"});

        // scope.post("/payments/result")
        //     .reply(200, paymentsResultSuccess)
        //     .matchHeader("Idempotency-Key", "testKey");
        // const paymentResultRequest: checkout.PaymentVerificationRequest = {
        //     payload: "This is a test payload",
        // };
        // await checkoutService.ClassicCheckoutSDKApi.verifyPaymentResult(paymentResultRequest, {idempotencyKey: "testKey"});

        const orderRequest: checkout.CreateOrderRequest = {
            amount: createAmountObject("USD", 1000),
            merchantAccount,
            reference
        };
        scope.post("/orders")
            .reply(200,  {})
            .matchHeader("Idempotency-Key", "testKey");
        await checkoutService.OrdersApi.orders(orderRequest, {idempotencyKey: "testKey"});

        scope.post("/orders/cancel")
            .reply(200,  {})
            .matchHeader("Idempotency-Key", "testKey");
        await checkoutService.OrdersApi.cancelOrder({
            order: {
                orderData: "mock_data",
                pspReference: "mock_pspref"
            },
            merchantAccount
        }, {idempotencyKey: "testKey"});

        scope.post("/sessions")
            .reply(200, sessionsSuccess)
            .matchHeader("Idempotency-Key", "testKey");

        const sessionsRequest: checkout.CreateCheckoutSessionRequest = createSessionRequest();
        await checkoutService.PaymentsApi.sessions(sessionsRequest, {idempotencyKey: "testKey"});

    });

    test("should make a payment.", async (): Promise<void> => {
        scope.post("/payments")
            .reply(200, paymentsSuccess);

        const paymentsRequest: checkout.PaymentRequest = createPaymentsCheckoutRequest();
        const paymentsResponse: checkout.PaymentResponse = await checkoutService.PaymentsApi.payments(paymentsRequest);
        expect(paymentsResponse.pspReference).toBeTruthy();
    });

    test("Should properly handle error responses from API", async (): Promise<void> => {
        try {
            scope.post("/payments")
                .reply(422, {
                    "status": 422,
                    "errorCode": "200",
                    "message": "Field 'countryCode' is not valid.",
                    "errorType": "validation",
                    "pspReference": "DMB552CV6JHKGK82",
                });

            const paymentsRequest: checkout.PaymentRequest = createPaymentsCheckoutRequest();
            await checkoutService.PaymentsApi.payments(paymentsRequest);
            fail("No exception was thrown");
        } catch (error) {
            expect(error instanceof HttpClientException).toBeTruthy();
            if(error instanceof HttpClientException && error.responseBody && error.stack) {
                expect(JSON.parse(error.responseBody).errorType).toBe("validation");
            } else {
                fail("Error did not contain the expected data");
            }
        }
    });

    test("Should properly handle invalid merchant account from API", async (): Promise<void> => {
        try {
            scope.post("/payments")
                .reply(403, {
                    "status": 403,
                    "errorCode": "901",
                    "message": "Invalid Merchant Account",
                    "errorType": "security",
                    "pspReference": "H9833RR6FASAAA82"
                });

            const paymentsRequest: checkout.PaymentRequest = createPaymentsCheckoutRequest();
            await checkoutService.PaymentsApi.payments(paymentsRequest);
            fail("No exception was thrown");
        } catch (error) {
            expect(error instanceof HttpClientException).toBeTruthy();
            if(error instanceof HttpClientException && error.responseBody && error.stack) {
                expect(JSON.parse(error.responseBody).errorType).toBe("security");
            } else {
                fail("Error did not contain the expected data");
            }
        }
    });

    test("should have valid payment methods", async (): Promise<void> => {
        const paymentMethodsRequest: checkout.PaymentMethodsRequest = {merchantAccount};

        scope.post("/paymentMethods")
            .reply(200, paymentMethodsSuccess);

        const paymentMethodsResponse = await checkoutService.PaymentsApi.paymentMethods(paymentMethodsRequest);
        if (paymentMethodsResponse && paymentMethodsResponse.paymentMethods) {
            expect(paymentMethodsResponse.paymentMethods.length).toBeGreaterThan(0);
        } else {
            fail();
        }
    });

    test("should have valid payment link", async (): Promise<void> => {
        const expiresAt = "2019-12-17T10:05:29Z";
        const paymentLinkSuccess: checkout.PaymentLinkResponse = getPaymentLinkSuccess(new Date(expiresAt));

        scope.post("/paymentLinks").reply(200, paymentLinkSuccess);

        const paymentSuccessLinkResponse = await checkoutService.PaymentLinksApi.paymentLinks(createPaymentLinkRequest());
        expect(paymentSuccessLinkResponse).toBeTruthy();
    });

    test("should get payment link", async (): Promise<void> => {
        const expiresAt = "2019-12-17T10:05:29Z";
        const paymentLinkSuccess: checkout.PaymentLinkResponse = getPaymentLinkSuccess(new Date(expiresAt));

        scope.post("/paymentLinks").reply(200, paymentLinkSuccess);

        const paymentSuccessLinkResponse = await checkoutService.PaymentLinksApi.paymentLinks(createPaymentLinkRequest());

        scope.get(`/paymentLinks/${paymentSuccessLinkResponse.id}`).reply(200, paymentLinkSuccess);
        const paymentLink = await checkoutService.PaymentLinksApi.getPaymentLink(paymentSuccessLinkResponse.id);
        expect(paymentLink).toBeTruthy();
    });

    test("should patch payment link", async (): Promise<void> => {
        const expiresAt = "2019-12-17T10:05:29Z";
        const paymentLinkSuccess: checkout.PaymentLinkResponse = getPaymentLinkSuccess(new Date(expiresAt));

        scope.post("/paymentLinks").reply(200, paymentLinkSuccess);

        const paymentSuccessLinkResponse = await checkoutService.PaymentLinksApi.paymentLinks(createPaymentLinkRequest());

        scope.patch(`/paymentLinks/${paymentSuccessLinkResponse.id}`).reply(200, { ...paymentLinkSuccess, status: "expired" });
        const paymentLink = await checkoutService.PaymentLinksApi.updatePaymentLink(paymentSuccessLinkResponse.id, createUpdatePaymentLinkRequest());
        expect(paymentLink.status).toEqual("expired");
    });

    test("should have payment details", async (): Promise<void> => {
        scope.post("/payments/details")
            .reply(200, paymentDetailsSuccess);

        const paymentsResponse = await checkoutService.PaymentsApi.paymentsDetails(createPaymentsDetailsRequest());
        expect(paymentsResponse.resultCode).toEqual("Authorised");
    });

    // test("should have payment session success", async (): Promise<void> => {
    //     scope.post("/paymentSession")
    //         .reply(200, paymentSessionSuccess);
    //     const paymentSessionRequest: checkout.PaymentSetupRequest = createPaymentSessionRequest();
    //     const paymentSessionResponse = await checkoutService.ClassicCheckoutSDKApi.paymentSession(paymentSessionRequest);
    //     expect(paymentSessionResponse.paymentSession).not.toBeUndefined();
    // });

    // test("should have payments result", async (): Promise<void> => {
    //     scope.post("/payments/result")
    //         .reply(200, paymentsResultSuccess);
    //     const paymentResultRequest: checkout.PaymentVerificationRequest = {
    //         payload: "This is a test payload",
    //     };
    //     const paymentResultResponse = await checkoutService.ClassicCheckoutSDKApi.verifyPaymentResult(paymentResultRequest);
    //     expect(paymentResultResponse.resultCode).toEqual("Authorised");
    // });

    test("should have missing identifier on live", async (): Promise<void> => {
        client.setEnvironment("LIVE");
        try {
            const liveCheckout = new CheckoutAPI(client);
            await liveCheckout.PaymentsApi.payments(createPaymentsCheckoutRequest());
            fail();
        } catch (e) {
            if(e instanceof Error) {
                expect(e.message).toEqual("Please provide your unique live url prefix on the setEnvironment() call on the Client.");

            } else {
                fail();
            }
        }
    });


    test("should succeed on multibanco payment", async (): Promise<void> => {
        scope.post("/payments")
            .reply(200, paymentsResultMultibancoSuccess);

        const paymentsRequest: checkout.PaymentRequest = createPaymentsCheckoutRequest();
        const paymentsResponse: checkout.PaymentResponse = await checkoutService.PaymentsApi.payments(paymentsRequest);

        expect(paymentsResponse.pspReference).toBeTruthy();
        expect(paymentsResponse.additionalData).toBeTruthy();
    });

    test("should return shopper redirect with a card payment.", async (): Promise<void> => {
        scope.post("/payments")
            .reply(200, paymentsRedirectAction);

        const paymentsRequest: checkout.PaymentRequest = createPaymentsCheckoutRequest();
        const paymentsResponse: checkout.PaymentResponse = await checkoutService.PaymentsApi.payments(paymentsRequest);

        expect(paymentsResponse.pspReference).toBeTruthy();
        expect(paymentsResponse.resultCode).toBeTruthy();
        expect(paymentsResponse.resultCode).toEqual("RedirectShopper");
        expect(paymentsResponse.action).toBeTruthy();
        // check type redirect
        expect(paymentsResponse.action?.type).toBeTruthy();
        expect(paymentsResponse.action?.type).toEqual("redirect");
        // TODO check action is polymorphic
        //expect(paymentsResponse.action).toBeInstanceOf(CheckoutRedirectAction); 
        //expect(paymentsResponse.action?.url).toBe("https://checkoutshopper-test.adyen.com/checkoutshopper/threeDS/redirect...");

    });

    test("should return Native 3DS2 with a card payment.", async (): Promise<void> => {
        scope.post("/payments")
            .reply(200, payments3DS2NativeAction);

        const paymentsRequest: checkout.PaymentRequest = createPaymentsCheckoutRequest();
        const paymentsResponse: checkout.PaymentResponse = await checkoutService.PaymentsApi.payments(paymentsRequest);

        expect(paymentsResponse.pspReference).toBeTruthy();
        expect(paymentsResponse.resultCode).toBeTruthy();
        expect(paymentsResponse.resultCode).toEqual("IdentifyShopper");
        expect(paymentsResponse.action).toBeTruthy();
        // check type threeDS2
        expect(paymentsResponse.action?.type).toBeTruthy();
        expect(paymentsResponse.action?.type).toEqual("threeDS2");
        // TODO check action is polymorphic
        //expect(paymentsResponse.action).toBeInstanceOf(CheckoutThreeDS2Action); 
        //expect(paymentsResponse.action?.subtype).toEqual("threeDS2");

    });

    test("should get origin keys", async (): Promise<void> => {
        const checkoutUtility = new CheckoutAPI(client);
        const originKeysRequest: checkout.UtilityRequest = {
            originDomains: ["https://www.your-domain.com"],
        };

        nock("https://checkout-test.adyen.com")
            .post("/v71/originKeys")
            .reply(200, originKeysSuccess);

        const originKeysResponse = await checkoutUtility.UtilityApi.originKeys(originKeysRequest);
        if (originKeysResponse.originKeys) {
            return expect(originKeysResponse.originKeys["https://www.your-domain.com"].startsWith("pub.v2")).toBeTruthy();
        }
        fail("Error: originKeysResponse.originKeys is empty");
    });

    // TODO: add gift card to PaymentMethod and unmock test
    test("should get payment methods balance", async (): Promise<void> => {
        const paymentMethodsRequest: checkout.BalanceCheckRequest = {
            merchantAccount,
            amount: createAmountObject("USD", 1000),
            paymentMethod: { },
            reference: "mocked_reference"
        };

        const paymentMethodsBalanceResponse: checkout.BalanceCheckResponse = {
            balance: {currency: "USD", value: 1000},
            resultCode: <checkout.BalanceCheckResponse.ResultCodeEnum> "Success"
        };
        scope.post("/paymentMethods/balance")
            .reply(200,  paymentMethodsBalanceResponse);

        const paymentsResponse: checkout.BalanceCheckResponse = await checkoutService.OrdersApi.getBalanceOfGiftCard(paymentMethodsRequest);
        expect(paymentsResponse.balance.value).toEqual(1000);
    });

    test("should create order", async (): Promise<void> => {
        const expiresAt = "2019-12-17T10:05:29Z";
        const orderRequest: checkout.CreateOrderRequest = {
            amount: createAmountObject("USD", 1000),
            merchantAccount,
            reference
        };

        const orderResponse: checkout.CreateOrderResponse = {
            expiresAt,
            amount: createAmountObject("USD", 500),
            orderData: "mocked_order_data",
            remainingAmount: {currency: "USD", value: 500} ,
            resultCode: checkout.CreateOrderResponse.ResultCodeEnum.Success
        };
        scope.post("/orders")
            .reply(200,  orderResponse);

        const response: checkout.CreateOrderResponse = await checkoutService.OrdersApi.orders(orderRequest);
        expect(response).toBeTruthy();
    });

    test("should cancel order", async (): Promise<void> => {
        const expiresAt = "2019-12-17T10:05:29Z";
        const orderRequest: checkout.CreateOrderRequest = {
            amount: createAmountObject("USD", 1000),
            merchantAccount,
            reference
        };

        const orderResponse: checkout.CreateOrderResponse = {
            expiresAt,
            amount: createAmountObject("USD", 500),
            orderData: "mocked_order_data",
            remainingAmount: {currency: "USD", value: 500},
            resultCode: checkout.CreateOrderResponse.ResultCodeEnum.Success
        };
        scope.post("/orders")
            .reply(200,  orderResponse);

        const createOrderResponse: checkout.CreateOrderResponse = await checkoutService.OrdersApi.orders(orderRequest);

        const orderCancelResponse: checkout.CancelOrderResponse = {
            pspReference: "mocked_psp_ref",
            resultCode: checkout.CancelOrderResponse.ResultCodeEnum.Received
        };
        scope.post("/orders/cancel")
            .reply(200,  orderCancelResponse);

        const response: checkout.CancelOrderResponse = await checkoutService.OrdersApi.cancelOrder({
            order: {
                orderData: createOrderResponse.orderData,
                pspReference: createOrderResponse.pspReference!
            },
            merchantAccount
        });
        expect(response).toBeTruthy();
    });

    test("should create a session.", async (): Promise<void> => {
        scope.post("/sessions")
            .reply(200, sessionsSuccess);

        const sessionsRequest: checkout.CreateCheckoutSessionRequest = createSessionRequest();
        const sessionsResponse: checkout.CreateCheckoutSessionResponse = await checkoutService.PaymentsApi.sessions(sessionsRequest);
        expect(sessionsResponse.sessionData).toBeTruthy();
        expect(sessionsResponse.expiresAt).toBeInstanceOf(Date);
        expect(sessionsResponse.expiresAt.getFullYear()).toBeGreaterThan(0);
    });

    test("Should get card details", async (): Promise<void> => {
        scope.post("/cardDetails")
            .reply(200, {
                "brands": [
                  {
                    "supported": true,
                    "type": "visa"
                  }
                ]
            });

        const cardDetailsRequest: checkout.CardDetailsRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "cardNumber": "411111"
        };
        const cardDetailsReponse: checkout.CardDetailsResponse = await checkoutService.PaymentsApi.cardDetails(cardDetailsRequest);
        expect(cardDetailsReponse?.brands?.length).toBe(1);
    });
    
    test("Should create applePaySession", async (): Promise<void> => {
        scope.post("/applePay/sessions")
        .reply(200, {
            "data": "eyJ2Z...",
        });

        const applePaySessionRequest: checkout.ApplePaySessionRequest = {
            "displayName": "YOUR_MERCHANT_NAME",
            "domainName": "YOUR_DOMAIN_NAME",
            "merchantIdentifier": "YOUR_MERCHANT_ID"
        };
        const applePaySessionResponse = await checkoutService.UtilityApi.getApplePaySession(applePaySessionRequest);
        expect(applePaySessionResponse.data).toEqual("eyJ2Z...");
    });

    test("Should get stored paymentMethods using params in requestOptions", async (): Promise<void> => {
        scope.get("/storedPaymentMethods?shopperReference=MYSHOPPERREFERENCE")
        .reply(200, {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "shopperReference": "YOUR_SHOPPER_REFERENCE",
            "storedPaymentMethods": [
                { "id": "123"}
            ]
        });

        const requestOptions: IRequest.Options = {
            params: {
                shopperReference: "MYSHOPPERREFERENCE"
            }
        };
        const getStoredPaymentMethodsResponse = await checkoutService.RecurringApi.getTokensForStoredPaymentDetails(undefined, undefined, requestOptions);
        expect(getStoredPaymentMethodsResponse.merchantAccount).toEqual("YOUR_MERCHANT_ACCOUNT");
        expect(getStoredPaymentMethodsResponse?.storedPaymentMethods?.length).toBe(1);
    });

    test("Should delete stored paymentMethod", async (): Promise<void> => {
        scope.delete("/storedPaymentMethods/12321?shopperReference=myShopperReference&merchantAccount=myMerchantAccount")
        .reply(200);

        await expect(
            checkoutService.RecurringApi.deleteTokenForStoredPaymentDetails("12321", "myShopperReference", "myMerchantAccount"),
        ).resolves.not.toThrowError();

    });

    test("Should handle query parameters for getResultOfPaymentSession", async(): Promise<void> => {
        scope.get("/sessions/mySessionIdMock?sessionResult=sessionResult")
        .reply(200, {
            "id": "CS12345678",
            "status": "completed"
        });

        const resultOfPaymentSessionResponse = await checkoutService.PaymentsApi.getResultOfPaymentSession("mySessionIdMock", "sessionResult");
        expect(resultOfPaymentSessionResponse.id).toEqual("CS12345678");
        expect(resultOfPaymentSessionResponse.status).toEqual(SessionResultResponse.StatusEnum.Completed);
    });
});
