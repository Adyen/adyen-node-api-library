/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import nock from "nock";
import {createClient} from "../__mocks__/base";
import {paymentMethodsSuccess} from "../__mocks__/checkout/paymentMethodsSuccess";
import {paymentsSuccess} from "../__mocks__/checkout/paymentsSuccess";
import {paymentDetailsSuccess} from "../__mocks__/checkout/paymentsDetailsSuccess";
import {paymentSessionSuccess} from "../__mocks__/checkout/paymentSessionSucess";
import {originKeysSuccess} from "../__mocks__/checkout/originkeysSuccess";
import {paymentsResultMultibancoSuccess} from "../__mocks__/checkout/paymentsResultMultibancoSuccess";
import {paymentsResultSuccess} from "../__mocks__/checkout/paymentsResultSucess";
import Client from "../client";
import Checkout from "../services/checkout";
import HttpClientException from "../httpClient/httpClientException";
import {
    Amount,
    CheckoutBalanceCheckRequest,
    CheckoutBalanceCheckResponse,
    CheckoutCancelOrderResponse,
    CheckoutCreateOrderRequest,
    CheckoutCreateOrderResponse,
    CheckoutUtilityRequest,
    CreatePaymentLinkRequest,
    DetailsRequest,
    PaymentLinkResource,
    PaymentMethodsRequest,
    PaymentRequest,
    PaymentResponse,
    PaymentSetupRequest,
    PaymentVerificationRequest,
} from "../typings/checkout/models";
// import StatusEnum = PaymentLinkResource.StatusEnum;

const merchantAccount = process.env.ADYEN_MERCHANT!;
const reference = "Your order number";
const isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);

function createAmountObject(currency: string, value: number): Amount {
    return {
        currency,
        value,
    };
}

function createPaymentsDetailsRequest(): DetailsRequest {
    return {
        details: {
            mD: "mdValue",
            paRes: "paResValue",
        },
        paymentData: "Ab02b4c0!BQABAgCJN1wRZuGJmq8dMncmypvknj9s7l5Tj...",
    };
}

export function createPaymentsCheckoutRequest(): PaymentRequest {
    const paymentMethodDetails = {
        type: "scheme",
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

function createPaymentSessionRequest(): PaymentSetupRequest {
    return {
        amount: createAmountObject("USD", 1000),
        countryCode: "NL",
        merchantAccount,
        reference,
        returnUrl: "https://your-company.com/...",
        channel: PaymentSetupRequest.ChannelEnum.Web,
        sdkVersion: "3.7.0"
    };
}
function getPaymentLinkSuccess(expiresAt: string): PaymentLinkResource {
    return {
        amount: createAmountObject("USD", 1000),
        expiresAt,
        reference,
        url: "paymentLinkResponse.url",
        id: "mocked_id",
        merchantAccount,
        status: PaymentLinkResource.StatusEnum.Active
    };
}

function createPaymentLinkRequest(): CreatePaymentLinkRequest {
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

let client: Client;
let checkout: Checkout;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock(`${client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}`);
    checkout = new Checkout(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Checkout", (): void => {
    test.each([false, true])("should make a payment. isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/payments")
            .reply(200, paymentsSuccess);

        const paymentsRequest: PaymentRequest = createPaymentsCheckoutRequest();
        const paymentsResponse: PaymentResponse = await checkout.payments(paymentsRequest);
        expect(paymentsResponse.pspReference).toBeTruthy();
    });

    test.each([false, true])("should return correct Exception, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        try {
            scope.post("/payments")
                .reply(401);

            const paymentsRequest: PaymentRequest = createPaymentsCheckoutRequest();
            await checkout.payments(paymentsRequest);
        } catch (e) {
            expect(e instanceof HttpClientException).toBeTruthy();
        }
    });

    test.each([false, true])("should have valid payment methods, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const paymentMethodsRequest: PaymentMethodsRequest = {merchantAccount: "MagentoMerchantTest"};

        scope.post("/paymentMethods")
            .reply(200, paymentMethodsSuccess);

        const paymentMethodsResponse = await checkout.paymentMethods(paymentMethodsRequest);
        if (paymentMethodsResponse && paymentMethodsResponse.paymentMethods) {
            expect(paymentMethodsResponse.paymentMethods.length).toBeGreaterThan(0);
        } else {
            fail();
        }
    });

    test.each([false, true])("should have valid payment link, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const expiresAt = "2019-12-17T10:05:29Z";
        const paymentLinkSuccess: PaymentLinkResource = getPaymentLinkSuccess(expiresAt);

        scope.post("/paymentLinks").reply(200, paymentLinkSuccess);

        const paymentSuccessLinkResponse = await checkout.paymentLinks(createPaymentLinkRequest());
        expect(paymentSuccessLinkResponse).toBeTruthy();
    });

    test.each([isCI, true])("should get payment link, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const expiresAt = "2019-12-17T10:05:29Z";
        const paymentLinkSuccess: PaymentLinkResource = getPaymentLinkSuccess(expiresAt);

        scope.post("/paymentLinks").reply(200, paymentLinkSuccess);

        const paymentSuccessLinkResponse = await checkout.paymentLinks(createPaymentLinkRequest());

        scope.get(`/paymentLinks/${paymentSuccessLinkResponse.id}`).reply(200, paymentLinkSuccess);
        const paymentLink = await checkout.getPaymentLinks(paymentSuccessLinkResponse.id);
        expect(paymentLink).toBeTruthy();
    });

    test.each([isCI, true])("should patch payment link, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const expiresAt = "2019-12-17T10:05:29Z";
        const paymentLinkSuccess: PaymentLinkResource = getPaymentLinkSuccess(expiresAt);

        scope.post("/paymentLinks").reply(200, paymentLinkSuccess);

        const paymentSuccessLinkResponse = await checkout.paymentLinks(createPaymentLinkRequest());

        scope.patch(`/paymentLinks/${paymentSuccessLinkResponse.id}`).reply(200, { ...paymentLinkSuccess, status: "expired" });
        const paymentLink = await checkout.updatePaymentLinks(paymentSuccessLinkResponse.id, "expired");
        expect(paymentLink.status).toEqual("expired");
    });

    test.each([isCI, true])("should have payment details, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/payments/details")
            .reply(200, paymentDetailsSuccess);

        const paymentsResponse = await checkout.paymentsDetails(createPaymentsDetailsRequest());
        expect(paymentsResponse.resultCode).toEqual("Authorised");
    });

    test.each([false, true])("should have payment session success, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/paymentSession")
            .reply(200, paymentSessionSuccess);
        const paymentSessionRequest: PaymentSetupRequest = createPaymentSessionRequest();
        const paymentSessionResponse = await checkout.paymentSession(paymentSessionRequest);
        expect(paymentSessionResponse.paymentSession).not.toBeUndefined();
    });

    test.each([isCI, true])("should have payments result, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/payments/result")
            .reply(200, paymentsResultSuccess);
        const paymentResultRequest: PaymentVerificationRequest = {
            payload: "This is a test payload",
        };
        const paymentResultResponse = await checkout.paymentResult(paymentResultRequest);
        expect(paymentResultResponse.resultCode).toEqual("Authorised");
    });

    test.each([false, true])("should have missing identifier on live, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        client.setEnvironment("LIVE");
        try {
            new Checkout(client);
            fail();
        } catch (e) {
            expect(e.message).toEqual("Please provide your unique live url prefix on the setEnvironment() call on the Client or provide checkoutEndpoint in your config object.");
        }
    });


    test.each([false, true])("should succeed on multibanco payment, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/payments")
            .reply(200, paymentsResultMultibancoSuccess);

        const paymentsRequest: PaymentRequest = createPaymentsCheckoutRequest();
        const paymentsResponse: PaymentResponse = await checkout.payments(paymentsRequest);

        expect(paymentsResponse.pspReference).toBeTruthy();
        expect(paymentsResponse.additionalData).toBeTruthy();
    });

    test.each([false, true])("should get origin keys. isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const checkoutUtility = new Checkout(client);
        const originKeysRequest: CheckoutUtilityRequest = {
            originDomains: ["https://www.your-domain.com"],
        };

        nock(`${client.config.checkoutEndpoint}`)
            .post(`/${Client.CHECKOUT_API_VERSION}/originKeys`)
            .reply(200, originKeysSuccess);

        const originKeysResponse = await checkoutUtility.originKeys(originKeysRequest);
        if (originKeysResponse.originKeys) {
            return expect(originKeysResponse.originKeys["https://www.your-domain.com"].startsWith("pub.v2")).toBeTruthy();
        }
        fail("Error: originKeysResponse.originKeys is empty");
    });

    // TODO: add gift card to PaymentMethod and unmock test
    test.each([true, true])("should get payment methods balance", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const paymentMethodsRequest: CheckoutBalanceCheckRequest = {
            merchantAccount,
            amount: createAmountObject("USD", 1000),
            paymentMethod: { },
            reference: "mocked_reference"
        };

        const paymentMethodsBalanceResponse: CheckoutBalanceCheckResponse = {
            balance: {currency: "USD", value: 1000},
            resultCode: CheckoutBalanceCheckResponse.ResultCodeEnum.Success
        };
        scope.post("/paymentMethods/balance")
            .reply(200,  paymentMethodsBalanceResponse);

        const paymentsResponse: CheckoutBalanceCheckResponse = await checkout.paymentMethodsBalance(paymentMethodsRequest);
        expect(paymentsResponse.balance.value).toEqual(1000);
    });

    test.each([false, true])("should create order", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const expiresAt = "2019-12-17T10:05:29Z";
        const orderRequest: CheckoutCreateOrderRequest = {
            amount: createAmountObject("USD", 1000),
            merchantAccount,
            reference
        };

        const orderResponse: CheckoutCreateOrderResponse = {
            expiresAt,
            orderData: "mocked_order_data",
            remainingAmount: {currency: "USD", value: 500} ,
            resultCode: CheckoutCreateOrderResponse.ResultCodeEnum.Success
        };
        scope.post("/orders")
            .reply(200,  orderResponse);

        const response: CheckoutCreateOrderResponse = await checkout.orders(orderRequest);
        expect(response).toBeTruthy();
    });

    test.each([false, true])("should cancel order", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const expiresAt = "2019-12-17T10:05:29Z";
        const orderRequest: CheckoutCreateOrderRequest = {
            amount: createAmountObject("USD", 1000),
            merchantAccount,
            reference
        };

        const orderResponse: CheckoutCreateOrderResponse = {
            expiresAt,
            orderData: "mocked_order_data",
            remainingAmount: {currency: "USD", value: 500},
            resultCode: CheckoutCreateOrderResponse.ResultCodeEnum.Success
        };
        scope.post("/orders")
            .reply(200,  orderResponse);

        const createOrderResponse: CheckoutCreateOrderResponse = await checkout.orders(orderRequest);
        
        const orderCancelResponse: CheckoutCancelOrderResponse = {
            pspReference: "mocked_psp_ref",
            resultCode: CheckoutCancelOrderResponse.ResultCodeEnum.Received
        };
        scope.post("/orders/cancel")
            .reply(200,  orderCancelResponse);

        const response: CheckoutCancelOrderResponse = await checkout.ordersCancel({
            order: {
                orderData: createOrderResponse.orderData,
                pspReference: createOrderResponse.pspReference!
            },
            merchantAccount
        });
        expect(response).toBeTruthy();
    });
});
