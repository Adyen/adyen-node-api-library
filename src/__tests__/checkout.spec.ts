import nock from "nock";
import {createClient} from "../__mocks__/base";
import {paymentMethodsSuccess} from "../__mocks__/checkout/paymentMethodsSuccess";
import {paymentsSuccess} from "../__mocks__/checkout/paymentsSuccess";
import {paymentDetailsSuccess} from "../__mocks__/checkout/paymentsDetailsSuccess";
import {paymentSessionSuccess} from "../__mocks__/checkout/paymentSessionSucess";
import {originKeysSuccess} from "../__mocks__/checkout/originkeysSuccess";
import {paymentsResultMultibancoSuccess} from "../__mocks__/checkout/paymentsResultMultibancoSuccess";
import {paymentsResultSuccess} from "../__mocks__/checkout/paymentsResultSucess";
import {sessionsSuccess} from "../__mocks__/checkout/sessionsSuccess";
import Client from "../client";
import {Checkout} from "../services";
import HttpClientException from "../httpClient/httpClientException";
import { checkout } from "../typings";
import { IRequest } from "../typings/requestOptions";

const merchantAccount = process.env.ADYEN_MERCHANT!;
const reference = "Your order number";
function createAmountObject(currency: string, value: number): checkout.Amount {
    return {
        currency,
        value,
    };
}

function createPaymentsDetailsRequest(): checkout.DetailsRequest {
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

function createPaymentSessionRequest(): checkout.PaymentSetupRequest {
    return {
        amount: createAmountObject("USD", 1000),
        countryCode: "NL",
        merchantAccount,
        reference,
        returnUrl: "https://your-company.com/...",
        channel: checkout.PaymentSetupRequest.ChannelEnum.Web,
        sdkVersion: "3.7.0"
    };
}

function createUpdatePaymentLinkRequest(): checkout.UpdatePaymentLinkRequest {
    return {
        "status": checkout.UpdatePaymentLinkRequest.StatusEnum.Expired
    };
}
function getPaymentLinkSuccess(expiresAt: string): checkout.PaymentLinkResponse {
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

function createPaymentLinkRequest(): checkout.CreatePaymentLinkRequest {
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
let checkoutService: Checkout;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock(`${client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}`);
    checkoutService = new Checkout(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Checkout", (): void => {
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

        const expiresAt = "2019-12-17T10:05:29Z";
        const paymentLinkSuccess: checkout.PaymentLinkResponse = getPaymentLinkSuccess(expiresAt);
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

        scope.post("/paymentSession")
            .reply(200, paymentSessionSuccess)
            .matchHeader("Idempotency-Key", "testKey");
        const paymentSessionRequest: checkout.PaymentSetupRequest = createPaymentSessionRequest();
        await checkoutService.ClassicCheckoutSDKApi.paymentSession(paymentSessionRequest, {idempotencyKey: "testKey"});

        scope.post("/payments/result")
            .reply(200, paymentsResultSuccess)
            .matchHeader("Idempotency-Key", "testKey");
        const paymentResultRequest: checkout.PaymentVerificationRequest = {
            payload: "This is a test payload",
        };
        await checkoutService.ClassicCheckoutSDKApi.verifyPaymentResult(paymentResultRequest, {idempotencyKey: "testKey"});

        const orderRequest: checkout.CheckoutCreateOrderRequest = {
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
            if(error instanceof HttpClientException && error.responseBody) {
                expect(JSON.parse(error.responseBody).errorType).toBe("validation");
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
        const paymentLinkSuccess: checkout.PaymentLinkResponse = getPaymentLinkSuccess(expiresAt);

        scope.post("/paymentLinks").reply(200, paymentLinkSuccess);

        const paymentSuccessLinkResponse = await checkoutService.PaymentLinksApi.paymentLinks(createPaymentLinkRequest());
        expect(paymentSuccessLinkResponse).toBeTruthy();
    });

    test("should get payment link", async (): Promise<void> => {
        const expiresAt = "2019-12-17T10:05:29Z";
        const paymentLinkSuccess: checkout.PaymentLinkResponse = getPaymentLinkSuccess(expiresAt);

        scope.post("/paymentLinks").reply(200, paymentLinkSuccess);

        const paymentSuccessLinkResponse = await checkoutService.PaymentLinksApi.paymentLinks(createPaymentLinkRequest());

        scope.get(`/paymentLinks/${paymentSuccessLinkResponse.id}`).reply(200, paymentLinkSuccess);
        const paymentLink = await checkoutService.PaymentLinksApi.getPaymentLink(paymentSuccessLinkResponse.id);
        expect(paymentLink).toBeTruthy();
    });

    test("should patch payment link", async (): Promise<void> => {
        const expiresAt = "2019-12-17T10:05:29Z";
        const paymentLinkSuccess: checkout.PaymentLinkResponse = getPaymentLinkSuccess(expiresAt);

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

    test("should have payment session success", async (): Promise<void> => {
        scope.post("/paymentSession")
            .reply(200, paymentSessionSuccess);
        const paymentSessionRequest: checkout.PaymentSetupRequest = createPaymentSessionRequest();
        const paymentSessionResponse = await checkoutService.ClassicCheckoutSDKApi.paymentSession(paymentSessionRequest);
        expect(paymentSessionResponse.paymentSession).not.toBeUndefined();
    });

    test("should have payments result", async (): Promise<void> => {
        scope.post("/payments/result")
            .reply(200, paymentsResultSuccess);
        const paymentResultRequest: checkout.PaymentVerificationRequest = {
            payload: "This is a test payload",
        };
        const paymentResultResponse = await checkoutService.ClassicCheckoutSDKApi.verifyPaymentResult(paymentResultRequest);
        expect(paymentResultResponse.resultCode).toEqual("Authorised");
    });

    test("should have missing identifier on live", async (): Promise<void> => {
        client.setEnvironment("LIVE");
        try {
            const liveCheckout = new Checkout(client);
            await liveCheckout.PaymentsApi.payments(createPaymentsCheckoutRequest());
            fail();
        } catch (e) {
            if(e instanceof Error) {
                expect(e.message).toEqual("Please provide your unique live url prefix on the setEnvironment() call on the Client or provide checkoutEndpoint in your config object.");

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

    test("should get origin keys", async (): Promise<void> => {
        const checkoutUtility = new Checkout(client);
        const originKeysRequest: checkout.CheckoutUtilityRequest = {
            originDomains: ["https://www.your-domain.com"],
        };

        nock(`${client.config.checkoutEndpoint}`)
            .post(`/${Client.CHECKOUT_API_VERSION}/originKeys`)
            .reply(200, originKeysSuccess);

        const originKeysResponse = await checkoutUtility.UtilityApi.originKeys(originKeysRequest);
        if (originKeysResponse.originKeys) {
            return expect(originKeysResponse.originKeys["https://www.your-domain.com"].startsWith("pub.v2")).toBeTruthy();
        }
        fail("Error: originKeysResponse.originKeys is empty");
    });

    // TODO: add gift card to PaymentMethod and unmock test
    test("should get payment methods balance", async (): Promise<void> => {
        const paymentMethodsRequest: checkout.CheckoutBalanceCheckRequest = {
            merchantAccount,
            amount: createAmountObject("USD", 1000),
            paymentMethod: { },
            reference: "mocked_reference"
        };

        const paymentMethodsBalanceResponse: checkout.CheckoutBalanceCheckResponse = {
            balance: {currency: "USD", value: 1000},
            resultCode: <checkout.CheckoutBalanceCheckResponse.ResultCodeEnum> "Success"
        };
        scope.post("/paymentMethods/balance")
            .reply(200,  paymentMethodsBalanceResponse);

        const paymentsResponse: checkout.CheckoutBalanceCheckResponse = await checkoutService.OrdersApi.getBalanceOfGiftCard(paymentMethodsRequest);
        expect(paymentsResponse.balance.value).toEqual(1000);
    });

    test("should create order", async (): Promise<void> => {
        const expiresAt = "2019-12-17T10:05:29Z";
        const orderRequest: checkout.CheckoutCreateOrderRequest = {
            amount: createAmountObject("USD", 1000),
            merchantAccount,
            reference
        };

        const orderResponse: checkout.CheckoutCreateOrderResponse = {
            expiresAt,
            amount: createAmountObject("USD", 500),
            orderData: "mocked_order_data",
            remainingAmount: {currency: "USD", value: 500} ,
            resultCode: checkout.CheckoutCreateOrderResponse.ResultCodeEnum.Success
        };
        scope.post("/orders")
            .reply(200,  orderResponse);

        const response: checkout.CheckoutCreateOrderResponse = await checkoutService.OrdersApi.orders(orderRequest);
        expect(response).toBeTruthy();
    });

    test("should cancel order", async (): Promise<void> => {
        const expiresAt = "2019-12-17T10:05:29Z";
        const orderRequest: checkout.CheckoutCreateOrderRequest = {
            amount: createAmountObject("USD", 1000),
            merchantAccount,
            reference
        };

        const orderResponse: checkout.CheckoutCreateOrderResponse = {
            expiresAt,
            amount: createAmountObject("USD", 500),
            orderData: "mocked_order_data",
            remainingAmount: {currency: "USD", value: 500},
            resultCode: checkout.CheckoutCreateOrderResponse.ResultCodeEnum.Success
        };
        scope.post("/orders")
            .reply(200,  orderResponse);

        const createOrderResponse: checkout.CheckoutCreateOrderResponse = await checkoutService.OrdersApi.orders(orderRequest);

        const orderCancelResponse: checkout.CheckoutCancelOrderResponse = {
            pspReference: "mocked_psp_ref",
            resultCode: checkout.CheckoutCancelOrderResponse.ResultCodeEnum.Received
        };
        scope.post("/orders/cancel")
            .reply(200,  orderCancelResponse);

        const response: checkout.CheckoutCancelOrderResponse = await checkoutService.OrdersApi.cancelOrder({
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

        const applePaySessionRequest: checkout.CreateApplePaySessionRequest = {
            "displayName": "YOUR_MERCHANT_NAME",
            "domainName": "YOUR_DOMAIN_NAME",
            "merchantIdentifier": "YOUR_MERCHANT_ID"
        };
        const applepaySessionResponse = await checkoutService.UtilityApi.getApplePaySession(applePaySessionRequest);
        expect(applepaySessionResponse.data).toEqual("eyJ2Z...");
    });

    test("Should get stored paymentMethods", async (): Promise<void> => {
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
        const getStoredPaymentMethodsResponse = await checkoutService.RecurringApi.getTokensForStoredPaymentDetails(requestOptions);
        expect(getStoredPaymentMethodsResponse.merchantAccount).toEqual("YOUR_MERCHANT_ACCOUNT");
        expect(getStoredPaymentMethodsResponse?.storedPaymentMethods?.length).toBe(1);
    });

    test("Should delete stored paymentMethod", async (): Promise<void> => {
        scope.delete("/storedPaymentMethods/12321")
        .reply(200, {
            "id": "123"
        });

        const deletePaymentMethodResponse = await  checkoutService.RecurringApi.deleteTokenForStoredPaymentDetails("12321");
        expect(deletePaymentMethodResponse.id).toEqual("123");
    });
});
