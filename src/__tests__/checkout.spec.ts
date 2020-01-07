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
import { createMockClientFromResponse } from "../__mocks__/base";
import {paymentMethodsSuccess} from "../__mocks__/checkout/paymentMethodsSuccess";
import {paymentsSuccess} from "../__mocks__/checkout/paymentsSuccess";
import {paymentDetailsSuccess} from "../__mocks__/checkout/paymentsDetailsSuccess";
import {paymentSessionSuccess} from "../__mocks__/checkout/paymentSessionSucess";
import {paymentsResultMultibancoSuccess} from "../__mocks__/checkout/paymentsResultMultibancoSuccess";
import {paymentsResultSuccess} from "../__mocks__/checkout/paymentsResultSucess";
import Client from "../client";
import Checkout from "../services/checkout";
import HttpClientException from "../httpClient/httpClientException";

const merchantAccount = "MagentoMerchantTest";
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
        expiryMonth: "10",
        expiryYear: "2018",
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
    };
}

function createPaymentSessionRequest(): ICheckout.PaymentSetupRequest {
    return {
        amount: createAmountObject("USD", 1000),
        countryCode: "NL",
        merchantAccount,
        reference,
        returnUrl: "https://your-company.com/...",
    };
}

let client: Client;
let checkout: Checkout;
let scope: nock.Scope;

beforeEach((): void => {
    client = createMockClientFromResponse();
    scope = nock(`${client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}`);
    checkout = new Checkout(client);
});

describe("Checkout", (): void => {
    it("should make a payment", async (): Promise<void> => {
        scope.post("/payments")
            .reply(200, paymentsSuccess);

        const paymentsRequest: ICheckout.PaymentRequest = createPaymentsCheckoutRequest();
        const paymentsResponse: ICheckout.PaymentResponse = await checkout.payments(paymentsRequest);
        expect(paymentsResponse.pspReference).toEqual("8535296650153317");
    });

    it("should return correct Exception", async (): Promise<void> => {
        try {
            scope.post("/payments")
                .reply(401);

            const paymentsRequest: ICheckout.PaymentRequest = createPaymentsCheckoutRequest();
            await checkout.payments(paymentsRequest);
        } catch (e) {
            expect(e instanceof HttpClientException).toBeTruthy();
        }
    });

    it("should have valid payment methods", async (): Promise<void> => {
        const paymentMethodsRequest: ICheckout.PaymentMethodsRequest = {merchantAccount: "MagentoMerchantTest"};

        scope.post("/paymentMethods")
            .reply(200, paymentMethodsSuccess);

        const paymentMethodsResponse = await checkout.paymentMethods(paymentMethodsRequest);
        if (paymentMethodsResponse && paymentMethodsResponse.paymentMethods) {
            expect(paymentMethodsResponse.paymentMethods.length).toEqual(65);
            expect(paymentMethodsResponse.paymentMethods[0].name).toEqual("AliPay");
        } else {
            fail();
        }
    });

    it("should have valid payment link", async (): Promise<void> => {
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
            expiresAt,
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
        expect(paymentLinkSuccess).toEqual(paymentSuccessLinkResponse);
    });

    it("should have payment details", async (): Promise<void> => {
        scope.post("/payments/details")
            .reply(200, paymentDetailsSuccess);

        const paymentsResponse = await checkout.paymentsDetails(createPaymentsDetailsRequest());
        expect(paymentsResponse.resultCode).toEqual("Authorised");
    });

    it("should have payment session success", async (): Promise<void> => {
        const client: Client = createMockClientFromResponse();
        scope.post("/paymentSession")
            .reply(200, paymentSessionSuccess);
        const checkout: Checkout = new Checkout(client);
        const paymentSessionRequest: ICheckout.PaymentSetupRequest = createPaymentSessionRequest();
        const paymentSessionResponse = await checkout.paymentSession(paymentSessionRequest);
        expect(paymentSessionResponse.paymentSession).not.toBeUndefined();
    });

    it("should have payments result", async (): Promise<void> => {
        const client = createMockClientFromResponse();
        scope.post("/payments/result")
            .reply(200, paymentsResultSuccess);
        const checkout = new Checkout(client);
        const paymentResultRequest: ICheckout.PaymentVerificationRequest = {
            payload: "This is a test payload",
        };
        const paymentResultResponse = await checkout.paymentResult(paymentResultRequest);
        expect(paymentResultResponse.resultCode).toEqual("Authorised");
    });

    it("should have missing identifier on live", async (): Promise<void> => {
        const client = createMockClientFromResponse();
        client.setEnvironment("LIVE");
        try {
            new Checkout(client);
        } catch (e) {
            expect(e.message).toEqual("Please provide your unique live url prefix on the setEnvironment() call on the Client or provide checkoutEndpoint in your config object.");
        }
    });


    it("should succeed on multibanco payment", async (): Promise<void> => {
        const client: Client = createMockClientFromResponse();
        scope.post("/payments")
            .reply(200, paymentsResultMultibancoSuccess);

        const checkout: Checkout = new Checkout(client);
        const paymentsRequest: ICheckout.PaymentRequest = createPaymentsCheckoutRequest();
        const paymentsResponse: ICheckout.PaymentResponse = await checkout.payments(paymentsRequest);
        expect(paymentsResponse.pspReference).toEqual("8111111111111111");

        if (paymentsResponse.additionalData) {
            expect(paymentsResponse.additionalData["comprafacil.amount"]).toEqual("101.01");
            expect(paymentsResponse.additionalData["comprafacil.deadline"]).toEqual("3");
            expect(paymentsResponse.additionalData["comprafacil.entity"]).toEqual("12345");
        }
    });
});

