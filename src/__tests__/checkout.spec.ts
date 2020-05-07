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
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import nock from "nock";
import { createClient } from "../__mocks__/base";
import {paymentMethodsSuccess} from "../__mocks__/checkout/paymentMethodsSuccess";
import {paymentsSuccess} from "../__mocks__/checkout/paymentsSuccess";
import {paymentDetailsSuccess} from "../__mocks__/checkout/paymentsDetailsSuccess";
import {paymentSessionSuccess} from "../__mocks__/checkout/paymentSessionSucess";
import {paymentsResultMultibancoSuccess} from "../__mocks__/checkout/paymentsResultMultibancoSuccess";
import {paymentsResultSuccess} from "../__mocks__/checkout/paymentsResultSucess";
import Client from "../client";
import Checkout from "../services/checkout";
import HttpClientException from "../httpClient/httpClientException";

const merchantAccount = process.env.ADYEN_MERCHANT!;
const reference = "Your order number";

function createAmountObject(currency: string, value: number): ICheckout.Amount {
    return {
        currency,
        value,
    };
}

function createPaymentsDetailsRequest(): ICheckout.DetailsRequest {
    return {
        details: {
            MD: "mdValue",
            PaRes: "paResValue",
        },
        paymentData: "Ab02b4c0!BQABAgCJN1wRZuGJmq8dMncmypvknj9s7l5Tj...",
    };
}

export function createPaymentsCheckoutRequest(): ICheckout.PaymentRequest {
    const paymentMethodDetails = {
        cvc: "737",
        expiryMonth: "03",
        expiryYear: "2030",
        holderName: "John Smith",
        number: "4111111111111111",
        type: "scheme",
    };

    return {
        amount: createAmountObject("USD", 1000),
        merchantAccount,
        paymentMethod: paymentMethodDetails,
        reference,
        returnUrl: "https://your-company.com/...",
        enableRecurring: true,
        enableOneClick: true,
        shopperReference: "shopperReference",
        storePaymentMethod: true
    };
}

function createPaymentSessionRequest(): ICheckout.PaymentSetupRequest {
    return {
        amount: createAmountObject("USD", 1000),
        countryCode: "NL",
        merchantAccount,
        reference,
        returnUrl: "https://your-company.com/...",
        channel: "Web",
        sdkVersion: "3.7.0"
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

        const paymentsRequest: ICheckout.PaymentRequest = createPaymentsCheckoutRequest();
        const paymentsResponse: ICheckout.PaymentResponse = await checkout.payments(paymentsRequest);
        expect(paymentsResponse.pspReference).toBeTruthy();
    });

    test.each([false, true])("should return correct Exception, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        try {
            scope.post("/payments")
                .reply(401);

            const paymentsRequest: ICheckout.PaymentRequest = createPaymentsCheckoutRequest();
            await checkout.payments(paymentsRequest);
        } catch (e) {
            expect(e instanceof HttpClientException).toBeTruthy();
        }
    });

    test.each([false, true])("should have valid payment methods, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const paymentMethodsRequest: ICheckout.PaymentMethodsRequest = {merchantAccount: "MagentoMerchantTest"};

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
        const amount = createAmountObject("BRL", 1000);
        const expiresAt = "2019-12-17T10:05:29Z";
        const paymentLinkRequest: ICheckout.CreatePaymentLinkRequest = {
            allowedPaymentMethods: ["scheme", "boletobancario"],
            amount,
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

        const paymentLinkSuccess: ICheckout.CreatePaymentLinkResponse = {
            amount,
            expiresAt,
            reference,
            url: "paymentLinkResponse.url"
        };

        scope.post("/paymentLinks").reply(200, paymentLinkSuccess);

        const paymentSuccessLinkResponse = await checkout.paymentLinks(paymentLinkRequest);
        expect(paymentSuccessLinkResponse).toBeTruthy();
    });

    test.each([false, true])("should have payment details, isMock: %p", async (isMock): Promise<void> => {
        if (!isMock) {
            console.warn("Cannot perform /payments/details without manual user validation. Skipping test.");
            return;
        }
        scope.post("/payments/details")
            .reply(200, paymentDetailsSuccess);

        const paymentsResponse = await checkout.paymentsDetails(createPaymentsDetailsRequest());
        expect(paymentsResponse.resultCode).toEqual("Authorised");
    });

    test.each([false, true])("should have payment session success, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/paymentSession")
            .reply(200, paymentSessionSuccess);
        const paymentSessionRequest: ICheckout.PaymentSetupRequest = createPaymentSessionRequest();
        const paymentSessionResponse = await checkout.paymentSession(paymentSessionRequest);
        expect(paymentSessionResponse.paymentSession).not.toBeUndefined();
    });

    test.each([false, true])("should have payments result, isMock: %p", async (isMock): Promise<void> => {
        if (!isMock) {
            console.warn("Cannot perform /payments/result without payload. Skipping test.");
            return;
        }
        scope.post("/payments/result")
            .reply(200, paymentsResultSuccess);
        const paymentResultRequest: ICheckout.PaymentVerificationRequest = {
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

        const paymentsRequest: ICheckout.PaymentRequest = createPaymentsCheckoutRequest();
        const paymentsResponse: ICheckout.PaymentResponse = await checkout.payments(paymentsRequest);

        expect(paymentsResponse.pspReference).toBeTruthy();
        expect(paymentsResponse.additionalData).toBeTruthy();
    });
});

