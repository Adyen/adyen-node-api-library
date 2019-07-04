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

import { createMockClientFromResponse } from "../__mocks__/base";
import {paymentMethodsError} from "../__mocks__/checkout/paymentmethodsErrorForbidden403";
import {paymentMethodsSuccess} from "../__mocks__/checkout/paymentMethodsSuccess";
import {paymentsError} from "../__mocks__/checkout/paymentsErrorInvalidData422";
import {paymentsSuccess} from "../__mocks__/checkout/paymentsSuccess";
import {paymentDetailsError} from "../__mocks__/checkout/paymentsDetailsErrorInvalidData422";
import {paymentDetailsSuccess} from "../__mocks__/checkout/paymentsDetailsSuccess";
import {paymentSessionError} from "../__mocks__/checkout/paymentSessionErrorInvalidData422";
import {paymentSessionSuccess} from "../__mocks__/checkout/paymentSessionSucess";
import {paymentsResultError} from "../__mocks__/checkout/paymentsResultErrorInvalidDataPayload422";
import {paymentsResultMultibancoSuccess} from "../__mocks__/checkout/paymentsResultMultibancoSuccess";
import {paymentsResultSuccess} from "../__mocks__/checkout/paymentsResultSucess";
import Client from "../client";
import { TYPE_SCHEME } from "../typings/constants/apiConstants";
import Checkout from "../service/checkout";
import {
    Amount,
    DetailsRequest,
    PaymentMethodsRequest,
    PaymentRequest,
    PaymentResponse,
    PaymentSetupRequest, PaymentVerificationRequest
} from "../typings/checkout";

function createAmountObject(currency: string, value: number): Amount {
    return {
        currency,
        value,
    };
}

function createPaymentsDetailsRequest(): DetailsRequest {
    return {
        details: {
            MD: "mdValue",
            PaRes: "paResValue",
        },
        paymentData: "Ab02b4c0!BQABAgCJN1wRZuGJmq8dMncmypvknj9s7l5Tj...",
    };
}

function createPaymentsCheckoutRequest(): PaymentRequest {
    const paymentMethodDetails = {
        cvc: "737",
        expiryMonth: "10",
        expiryYear: "2018",
        holderName: "John Smith",
        number: "4111111111111111",
        type: TYPE_SCHEME,
    };

    return {
        amount: createAmountObject("USD", 1000),
        merchantAccount: "MagentoMerchantTest",
        paymentMethod: paymentMethodDetails,
        reference: "Your order number",
        returnUrl: "https://your-company.com/...",
    };
}

function createPaymentSessionRequest(): PaymentSetupRequest {
    return {
        amount: createAmountObject("USD", 1000),
        countryCode: "NL",
        merchantAccount: "MagentoMerchantTest",
        reference: "Your order number",
        returnUrl: "https://your-company.com/...",
    };
}

describe("Checkout", (): void => {
    it("should make a payment", async (): Promise<void> => {
        const client: Client = createMockClientFromResponse(paymentsSuccess);
        const checkout: Checkout = new Checkout(client);
        const paymentsRequest: PaymentRequest = createPaymentsCheckoutRequest();
        const paymentsResponse: PaymentResponse = await checkout.payments(paymentsRequest);
        expect(paymentsResponse.pspReference).toEqual("8535296650153317");
    });

    it("should not make a payment", async (): Promise<void> => {
        const client: Client = createMockClientFromResponse(paymentsError);
        const checkout: Checkout = new Checkout(client);
        const paymentsRequest: PaymentRequest = createPaymentsCheckoutRequest();
        const paymentsResponse: PaymentResponse = await checkout.payments(paymentsRequest);
        expect(paymentsResponse.pspReference).toBeUndefined();
    });

    it("should have valid payment methods", async (): Promise<void> => {
        const client = createMockClientFromResponse(paymentMethodsSuccess);
        const checkout: Checkout = new Checkout(client);
        const paymentMethodsRequest: PaymentMethodsRequest = {
            merchantAccount: "MagentoMerchantTest",
        };
        const paymentMethodsResponse = await checkout.paymentMethods(paymentMethodsRequest);
        expect(paymentMethodsResponse.paymentMethods.length).toEqual(65);
        expect(paymentMethodsResponse.paymentMethods[0].name).toEqual("AliPay");
    });

    it("should not have valid payment methods", async (): Promise<void> => {
        const client = createMockClientFromResponse(paymentMethodsError);
        const checkout: Checkout = new Checkout(client);
        const paymentMethodsRequest: PaymentMethodsRequest = {
            merchantAccount: "MagentoMerchantTest",
        };
        const paymentMethodsResponse = await checkout.paymentMethods(paymentMethodsRequest);
        expect(paymentMethodsResponse.paymentMethods).toBeUndefined();
    });

    it("should have payment details", async (): Promise<void> => {
        const client: Client = createMockClientFromResponse(paymentDetailsSuccess);
        const checkout: Checkout = new Checkout(client);
        const paymentsResponse = await checkout.paymentsDetails(createPaymentsDetailsRequest());
        expect(paymentsResponse.resultCode).toEqual("Authorised");
    });

    it("should not have payment details", async (): Promise<void> => {
        const client: Client = createMockClientFromResponse(paymentDetailsError);
        const checkout: Checkout = new Checkout(client);
        const paymentsResponse = await checkout.paymentsDetails(createPaymentsDetailsRequest());
        expect(paymentsResponse.resultCode).toBeUndefined();
    });

    it("should have payment session success", async (): Promise<void> => {
        const client: Client = createMockClientFromResponse(paymentSessionSuccess);
        const checkout: Checkout = new Checkout(client);
        const paymentSessionRequest: PaymentSetupRequest = createPaymentSessionRequest();
        const paymentSessionResponse = await checkout.paymentSession(paymentSessionRequest);
        expect(paymentSessionResponse.paymentSession).not.toBeUndefined();
    });

    it("should not have payment session success", async (): Promise<void> => {
        const client: Client = createMockClientFromResponse(paymentSessionError);
        const checkout: Checkout = new Checkout(client);
        const paymentSessionRequest: PaymentSetupRequest = createPaymentSessionRequest();
        const paymentSessionResponse = await checkout.paymentSession(paymentSessionRequest);
        expect(paymentSessionResponse.paymentSession).toBeUndefined();
    });

    it("should have payments result", async (): Promise<void> => {
        const client = createMockClientFromResponse(paymentsResultSuccess);
        const checkout = new Checkout(client);
        const paymentResultRequest: PaymentVerificationRequest = {
            payload: "This is a test payload",
        };
        const paymentResultResponse = await checkout.paymentResult(paymentResultRequest);
        expect(paymentResultResponse.resultCode).toEqual("Authorised");
    });

    it("should not have payments result", async (): Promise<void> => {
        const client = createMockClientFromResponse(paymentsResultError);
        const checkout = new Checkout(client);
        const paymentResultRequest: PaymentVerificationRequest = {
            payload: "This is a test payload",
        };
        const paymentResultResponse = await checkout.paymentResult(paymentResultRequest);
        expect(paymentResultResponse.resultCode).toBeUndefined();
    });

    it("should have missing identifier on live", async (): Promise<void> => {
        const client = createMockClientFromResponse(paymentsResultError);
        client.setEnvironment("TEST");
        try {
            new Checkout(client);
        } catch (e) {
            expect(e.message).toEqual("Please provide your unique live url prefix on the setEnvironment() call on the Client or provide checkoutEndpoint in your config object.");
        }
    });

    it("should have custom payment details", async (): Promise<void> => {
        const paymentsRequest = createPaymentsCheckoutRequest();
        expect(JSON.parse("{\n"
            + "  \"amount\": {\n"
            + "    \"value\": 1000,\n"
            + "    \"currency\": \"USD\"\n"
            + "  },\n"
            + "  \"merchantAccount\": \"MagentoMerchantTest\",\n"
            + "  \"paymentMethod\": {\n"
            + "    \"type\": \"scheme\",\n"
            + "    \"number\": \"4111111111111111\",\n"
            + "    \"expiryMonth\": \"10\",\n"
            + "    \"expiryYear\": \"2018\",\n"
            + "    \"holderName\": \"John Smith\",\n"
            + "    \"cvc\": \"737\"\n"
            + "  },\n"
            + "  \"reference\": \"Your order number\",\n"
            + "  \"returnUrl\": \"https://your-company.com/...\"\n"
            + "}")).toEqual(paymentsRequest);

        paymentsRequest.paymentMethod = {
            testKey: "testValue",
            type: "testType",
        };

        expect(JSON.parse("{\n"
            + "  \"amount\": {\n"
            + "    \"value\": 1000,\n"
            + "    \"currency\": \"USD\"\n"
            + "  },\n"
            + "  \"merchantAccount\": \"MagentoMerchantTest\",\n"
            + "  \"paymentMethod\": {\n"
            + "    \"testKey\": \"testValue\",\n"
            + "    \"type\": \"testType\"\n"
            + "  },\n"
            + "  \"reference\": \"Your order number\",\n"
            + "  \"returnUrl\": \"https://your-company.com/...\"\n"
            + "}")).toEqual(JSON.parse(JSON.stringify(paymentsRequest)));
    });

    it("should succeed on multibanco payment", async (): Promise<void> => {
        const client: Client = createMockClientFromResponse(paymentsResultMultibancoSuccess);
        const checkout: Checkout = new Checkout(client);
        const paymentsRequest: PaymentRequest = createPaymentsCheckoutRequest();
        const paymentsResponse: PaymentResponse = await checkout.payments(paymentsRequest);
        expect(paymentsResponse.pspReference).toEqual("8111111111111111");
        expect(paymentsResponse.additionalData["comprafacil.amount"]).toEqual("101.01");
        expect(paymentsResponse.additionalData["comprafacil.deadline"]).toEqual("3");
        expect(paymentsResponse.additionalData["comprafacil.entity"]).toEqual("12345");
    });

    it("should return sepa payment method details", async (): Promise<void> => {
        const defaultPaymentMethods = {
            sepaIbanNumber: "DE87123456781234567890",
            sepaOwnerName: "A. Schneider",
            type: "sepadirectdebit",
        };

        const paymentsRequest = createPaymentsCheckoutRequest();
        paymentsRequest.paymentMethod = defaultPaymentMethods;

        expect(JSON.parse("{\n"
            + "  \"amount\": {\n"
            + "    \"value\": 1000,\n"
            + "    \"currency\": \"USD\"\n"
            + "  },\n"
            + "  \"merchantAccount\": \"MagentoMerchantTest\",\n"
            + "  \"paymentMethod\": {\n"
            + "    \"type\": \"sepadirectdebit\",\n"
            + "    \"sepaOwnerName\": \"A. Schneider\",\n"
            + "    \"sepaIbanNumber\": \"DE87123456781234567890\"\n"
            + "  },\n"
            + "  \"reference\": \"Your order number\",\n"
            + "  \"returnUrl\": \"https://your-company.com/...\"\n"
            + "}")).toEqual(JSON.parse(JSON.stringify(paymentsRequest)));
    });
});

