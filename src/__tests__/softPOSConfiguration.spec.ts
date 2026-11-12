import nock from "nock";
import { Client, EnvironmentEnum, SoftPOSConfigurationAPI, Types } from "../index";
import { createClient } from "../__mocks__/base";
import HttpClientException from "../httpClient/httpClientException";

describe("SoftPOS Configuration public exports", (): void => {
    test("exports the service through the package entry point", (): void => {
        const api = new SoftPOSConfigurationAPI(createClient());

        expect(api).toBeInstanceOf(SoftPOSConfigurationAPI);
        expect(api.SessionAuthenticationApi.issueCertificates).toBeInstanceOf(Function);
    });

    test("exports the models and serializer through Types", (): void => {
        expect(new Types.softPOSConfiguration.CertificateLoadingRequest())
            .toBeInstanceOf(Types.softPOSConfiguration.CertificateLoadingRequest);
        expect(new Types.softPOSConfiguration.CertificateLoadingResponse())
            .toBeInstanceOf(Types.softPOSConfiguration.CertificateLoadingResponse);
        expect(new Types.softPOSConfiguration.SubMerchantData())
            .toBeInstanceOf(Types.softPOSConfiguration.SubMerchantData);
        expect(new Types.softPOSConfiguration.DefaultErrorResponseEntity())
            .toBeInstanceOf(Types.softPOSConfiguration.DefaultErrorResponseEntity);
        expect(new Types.softPOSConfiguration.InvalidField())
            .toBeInstanceOf(Types.softPOSConfiguration.InvalidField);
        expect(Types.softPOSConfiguration.ObjectSerializer.serialize).toBeInstanceOf(Function);
        expect(Types.softPOSConfiguration.ObjectSerializer.deserialize).toBeInstanceOf(Function);
    });
});

describe("SoftPOS Configuration SessionAuthenticationApi", (): void => {
    let api: SoftPOSConfigurationAPI;
    let scope: nock.Scope;

    beforeEach((): void => {
        if (!nock.isActive()) {
            nock.activate();
        }
        const client: Client = new Client({
            apiKey: "test-api-key",
            environment: EnvironmentEnum.TEST,
        });
        api = new SoftPOSConfigurationAPI(client);
        scope = nock("https://softposconfig-test.adyen.com/softposconfig/v3", {
            reqheaders: { "x-api-key": "test-api-key" },
        });
    });

    afterEach((): void => {
        nock.cleanAll();
    });

    test("serializes a certificate request and deserializes the response", async (): Promise<void> => {
        const request: Types.softPOSConfiguration.CertificateLoadingRequest = {
            merchantAccount: "YOUR_MERCHANT_ACCOUNT",
            setupToken: "SETUP_TOKEN",
            store: "YOUR_STORE_REFERENCE",
        };
        const mockResponse = {
            id: "APP_SESSION_ID",
            installationId: "INSTALLATION_ID",
            merchantAccount: "YOUR_MERCHANT_ACCOUNT",
            sdkData: "SDK_DATA_BLOB",
            store: "YOUR_STORE_REFERENCE",
        };

        scope.post("/auth/certificate", {
            merchantAccount: "YOUR_MERCHANT_ACCOUNT",
            setupToken: "SETUP_TOKEN",
            store: "YOUR_STORE_REFERENCE",
        }).reply(201, mockResponse);

        const result = await api.SessionAuthenticationApi.issueCertificates(request);

        expect(scope.isDone()).toBe(true);
        expect(result).toBeInstanceOf(Types.softPOSConfiguration.CertificateLoadingResponse);
        expect(result).toEqual(mockResponse);
    });

    test("serializes nested sub-merchant data and omits unknown fields", async (): Promise<void> => {
        const subMerchantData = {
            city: "Amsterdam",
            country: "NLD",
            displayName: "Test store",
            id: "SUB_MERCHANT_ID",
            mcc: "5411",
            name: "Test sub-merchant",
        };
        const request = {
            merchantAccount: "YOUR_MERCHANT_ACCOUNT",
            setupToken: "SETUP_TOKEN",
            subMerchantData: { ...subMerchantData, unknownField: "not-in-schema" },
            unknownField: "not-in-schema",
        };

        scope.post("/auth/certificate", {
            merchantAccount: "YOUR_MERCHANT_ACCOUNT",
            setupToken: "SETUP_TOKEN",
            subMerchantData,
        }).reply(201, { sdkData: "SDK_DATA_BLOB" });

        const result = await api.SessionAuthenticationApi.issueCertificates(request);

        expect(scope.isDone()).toBe(true);
        expect(result.sdkData).toBe("SDK_DATA_BLOB");
    });

    test.each([undefined, null])(
        "preserves subMerchantData as %s in the request",
        async (subMerchantData): Promise<void> => {
            const request: Types.softPOSConfiguration.CertificateLoadingRequest = {
                merchantAccount: "YOUR_MERCHANT_ACCOUNT",
                setupToken: "SETUP_TOKEN",
                subMerchantData,
            };
            const expectedBody = subMerchantData === null
                ? { merchantAccount: request.merchantAccount, setupToken: request.setupToken, subMerchantData: null }
                : { merchantAccount: request.merchantAccount, setupToken: request.setupToken };

            scope.post("/auth/certificate", expectedBody).reply(201, { sdkData: "SDK_DATA_BLOB" });

            await api.SessionAuthenticationApi.issueCertificates(request);

            expect(scope.isDone()).toBe(true);
        },
    );

    test.each([
        [400, "00_400", "Bad request", "https://docs.adyen.com/errors/bad-request"],
        [401, "00_401", "Unauthorized", "https://docs.adyen.com/errors/unauthorized"],
        [422, "00_422", "Unprocessable entity", "https://docs.adyen.com/errors/unprocessable-entity"],
        [500, "00_500", "Internal error", "https://docs.adyen.com/errors/internal"],
    ])("returns a %i RFC 7807 error as an HttpClientException", async (status, errorCode, title, type): Promise<void> => {
        const errorResponse = {
            type,
            title,
            status,
            errorCode,
            detail: "The setup token is invalid",
            instance: "/softposconfig/v3/auth/certificate",
            requestId: "REQUEST_ID",
            invalidFields: [{ message: "Invalid setup token", name: "setupToken", value: "invalid" }],
        };
        const request: Types.softPOSConfiguration.CertificateLoadingRequest = {
            merchantAccount: "YOUR_MERCHANT_ACCOUNT",
            setupToken: "invalid",
        };

        scope.post("/auth/certificate").reply(status, errorResponse);

        const error = await api.SessionAuthenticationApi.issueCertificates(request).catch((e: unknown) => e);

        expect(scope.isDone()).toBe(true);
        expect(error).toBeInstanceOf(HttpClientException);
        const exception = error as HttpClientException;
        expect(exception.statusCode).toBe(status);
        expect(exception.errorCode).toBe(errorCode);
        expect(JSON.parse(exception.responseBody as string)).toEqual(errorResponse);
        expect(exception.apiError).toEqual(errorResponse);
    });
});

describe("SoftPOS Configuration ObjectSerializer", (): void => {
    test("deserializes nested sub-merchant data into a model instance", (): void => {
        const raw = {
            merchantAccount: "YOUR_MERCHANT_ACCOUNT",
            setupToken: "SETUP_TOKEN",
            subMerchantData: {
                displayName: "Test store",
                id: "SUB_MERCHANT_ID",
                mcc: "5411",
                name: "Test sub-merchant",
            },
        };

        const result = Types.softPOSConfiguration.ObjectSerializer.deserialize(raw, "CertificateLoadingRequest");

        expect(result).toBeInstanceOf(Types.softPOSConfiguration.CertificateLoadingRequest);
        expect(result.subMerchantData).toBeInstanceOf(Types.softPOSConfiguration.SubMerchantData);
        expect(result).toEqual(raw);
    });

    test("deserializes a partial response without adding absent fields", (): void => {
        const result = Types.softPOSConfiguration.ObjectSerializer.deserialize(
            { sdkData: "SDK_DATA_BLOB", unknownField: "not-in-schema" },
            "CertificateLoadingResponse",
        );

        expect(result).toBeInstanceOf(Types.softPOSConfiguration.CertificateLoadingResponse);
        expect(result).toEqual({ sdkData: "SDK_DATA_BLOB" });
        expect(result).not.toHaveProperty("id");
        expect(result).not.toHaveProperty("unknownField");
    });

    test("deserializes validation errors with typed invalid fields", (): void => {
        const raw = {
            detail: "Merchant account is invalid",
            errorCode: "00_400",
            instance: "/auth/certificate",
            invalidFields: [{ message: "Invalid merchant account", name: "merchantAccount", value: "invalid" }],
            requestId: "REQUEST_ID",
            status: 400,
            title: "Bad request",
            type: "https://docs.adyen.com/errors/bad-request",
        };

        const result = Types.softPOSConfiguration.ObjectSerializer.deserialize(raw, "DefaultErrorResponseEntity");

        expect(result).toBeInstanceOf(Types.softPOSConfiguration.DefaultErrorResponseEntity);
        expect(result.invalidFields[0]).toBeInstanceOf(Types.softPOSConfiguration.InvalidField);
        expect(result).toEqual(raw);
        expect(Types.softPOSConfiguration.ObjectSerializer.serialize(result, "DefaultErrorResponseEntity"))
            .toEqual(raw);
    });
});
