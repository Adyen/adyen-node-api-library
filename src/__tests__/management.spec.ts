import nock from "nock";
import Client from "../client";
import { createClient } from "../__mocks__/base";
import { Management } from "../services";
import { management } from "../typings";
import * as requests from "../__mocks__/management/requests";
import * as responses from "../__mocks__/management/responses";

let client: Client;
let managementService: Management;
let scope: nock.Scope;

const merchantId = "merchantId";
const apiCredentialId = "apiCredentialId";
const originId = "originId";
const paymentMethodId = "paymentMethodId";
const payoutSettingsId = "payoutSettingsId";
const orderId = "orderId";
const userId = "userId";
const webhookId = "webhookId";

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock(`${client.config.managementEndpoint}/${Client.MANAGEMENT_API_VERSION}`);
    managementService = new Management(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Management", (): void => {
    describe("Me", (): void => {
        test("Should get  API credential details based on the API Key used in the request", async (): Promise<void> => {
            scope.get("/me")
                .reply(200, {
                    "id": "S2-6262224667",
                    "username": "ws_123456@Company.Test",
                    "clientKey": "test_UCP6BO23234FFEFE33E4GWX63",
                    "allowedIpAddresses": [],
                    "roles": [
                        "Management API - Users read and write",
                        "Management API - Accounts read",
                        "Trigger webhook notifications",
                        "Management API - Payout Account Settings Read And Write",
                        "Manage LegalEntities via API",
                        "Manage associated partner accounts via API",
                        "PSP Pos initial configuration",

                    ],
                    "_links": {
                        "self": {
                            "href": "https://management-test.adyen.com/v1/me"
                        },
                        "allowedOrigins": {
                            "href": "https://management-test.adyen.com/v1/me/allowedOrigins"
                        }
                    },
                    "companyName": "Test",
                    "active": true,
                });
            const meResponse: management.MeApiCredential = await managementService.Me.retrieve();
            expect(meResponse.id).toEqual("S2-6262224667");
        });

        test("Should add an allowed origin to the list of allowed origins", async (): Promise<void> => {
            scope.post("/me/allowedOrigins")
                .reply(200, {
                    "id": "S2-45597C41735B6D75433E2B396553453ertcdt347675B4E3B413B4C4571522A6B2921",
                    "domain": "https://www.us.mystore.com",
                    "_links": {
                        "self": {
                            "href": "https://management-test.adyen.com/v1/me/allowedOrigins/S2-45597C41735B6D75433E2B396553453ertcdt347675B4E3B413B4C4571522A6B2921"
                        }
                    }
                });
            const allowedOriginRequest: management.AllowedOrigin = {
                "domain": "https://www.us.mystore.com"
            };

            const allowedOriginsResponse: management.AllowedOrigin = await managementService.Me.createAllowedOrigin(allowedOriginRequest);
            expect(allowedOriginsResponse.domain).toEqual("https://www.us.mystore.com");
        });

        test("Should get the list of allowed origins of a API credential based on the API key used in the request", async (): Promise<void> => {
            scope.get("/me/allowedOrigins")
                .reply(200, {
                    "data": [
                        {
                            "id": "S2-45597C41735B6D75433E2B396553453ertcdt347675B4E3B413B4C4571522A6B2921",
                            "domain": "https://www.us.mystore.com",
                            "_links": {
                                "self": {
                                    "href": "https://management-test.adyen.com/v1/me/allowedOrigins/S2-45597C41735B6D75433E2B396553453ertcdt347675B4E3B413B4C4571522A6B2921"
                                }
                            }
                        }
                    ]
                });

            const allowedOriginsResponse: management.AllowedOriginsResponse = await managementService.Me.retrieveAllowedOrigins();
            expect(allowedOriginsResponse.data?.length).toEqual(1);
        });
    });

    test("Should retrieve the details of the allowed origin specified in the path", async () => {
        scope.get("/me/allowedOrigins/S2-123123123123123")
            .reply(200, {
                "id": "S2-123123123123123",
                "domain": "https://www.us.mystore.com",
                "_links": {
                    "self": {
                        "href": "https://management-test.adyen.com/v1/me/allowedOrigins/S2-123123123123123"
                    }
                }
            });

        const allowedOriginResponse: management.AllowedOrigin = await managementService.Me.retrieveAllowedOrigin("S2-123123123123123");
        expect(allowedOriginResponse.id).toEqual("S2-123123123123123");
    });

    test("Should remove the allowed origin specified in the path", async () => {
        scope.delete("/me/allowedOrigins/S2-123123123123123").reply(204, {});
        const allowedOriginResponse: Record<string, unknown> = await managementService.Me.deleteAllowerdOrigin("S2-123123123123123");
        expect(scope.isDone()).toBe(true);
        expect(Object.entries(allowedOriginResponse).length).toBe(0);
    });

    describe("MerchantAccount", (): void => {
        it("should support GET /merchants", async (): Promise<void> => {
            scope.get("/merchants?pageNumber=1&pageSize=1")
                .reply(200, responses.listMerchantResponse);

            const response:  management.ListMerchantResponse = await managementService.MerchantAccount.list({
                params: {
                    "pageNumber": "1",
                    "pageSize": "1"
                }
            });

            expect(response).toBeTruthy();
        });

        it("should support POST /merchants", async (): Promise<void> => {
            scope.post("/merchants")
                .reply(200, responses.createMerchantResponse);

            const response:  management.CreateMerchantResponse = await managementService.MerchantAccount.create(requests.createMerchantRequest);

            expect(response).toBeTruthy();
        });

        it("should support GET /merchants/{merchantId}", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}`)
                .reply(200, responses.merchant);

            const response:  management.Merchant = await managementService.MerchantAccount.retrieve(merchantId);

            expect(response).toBeTruthy();
        });

        it("should support POST /merchants/{merchantId}/activate", async (): Promise<void> => {
            scope.post(`/merchants/${merchantId}/activate`)
                .reply(200, responses.requestActivationResponse);

            const response:  management.RequestActivationResponse = await managementService.MerchantAccount.activate(merchantId);

            expect(response).toBeTruthy();
        });
    });

    describe("MerchantAllowedOrigins", (): void => {
        it("should support GET /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/apiCredentials/${apiCredentialId}/allowedOrigins`)
                .reply(200, responses.allowedOriginsResponse);

            const response:  management.AllowedOriginsResponse = await managementService.MerchantAllowedOrigins.list(merchantId, apiCredentialId);

            expect(response).toBeTruthy();
        });

        it("should support POST /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins", async (): Promise<void> => {
            scope.post(`/merchants/${merchantId}/apiCredentials/${apiCredentialId}/allowedOrigins`)
                .reply(200, responses.allowedOriginsResponse);

            const response:  management.AllowedOriginsResponse = await managementService.MerchantAllowedOrigins.create(merchantId, apiCredentialId, requests.allowedOrigin);

            expect(response).toBeTruthy();
        });

        it("should support DELETE /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}", async (): Promise<void> => {
            scope.delete(`/merchants/${merchantId}/apiCredentials/${apiCredentialId}/allowedOrigins/${originId}`)
                .reply(204);

            await managementService.MerchantAllowedOrigins.delete(merchantId, apiCredentialId, originId);
        });

        it("should support GET /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/apiCredentials/${apiCredentialId}/allowedOrigins/${originId}`)
                .reply(200, responses.allowedOrigin);

            const response:  management.AllowedOrigin = await managementService.MerchantAllowedOrigins.retrieve(merchantId, apiCredentialId, originId);

            expect(response).toBeTruthy();
        });
    });

    describe("MerchantApiCredentials", (): void => {
        it("should support GET /merchants/{merchantId}/apiCredentials", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/apiCredentials?pageNumber=1&pageSize=1`)
                .reply(200, responses.listMerchantApiCredentialsResponse);

            const response:  management.ListMerchantApiCredentialsResponse = await managementService.MerchantApiCredentials.list(merchantId, {
                params: {
                    "pageNumber": "1",
                    "pageSize": "1"
                }
            });

            expect(response).toBeTruthy();
        });

        it("should support POST /merchants/{merchantId}/apiCredentials", async (): Promise<void> => {
            scope.post(`/merchants/${merchantId}/apiCredentials`)
                .reply(200, responses.createApiCredentialResponse);

            const response:  management.CreateApiCredentialResponse = await managementService.MerchantApiCredentials.create(merchantId, requests.createMerchantApiCredentialRequest);

            expect(response).toBeTruthy();
        });

        it("should support GET /merchants/{merchantId}/apiCredentials/{apiCredentialId}", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/apiCredentials/${apiCredentialId}`)
                .reply(200, responses.apiCredential);

            const response:  management.ApiCredential = await managementService.MerchantApiCredentials.retrieve(merchantId, apiCredentialId);

            expect(response).toBeTruthy();
        });

        it("should support PATCH /merchants/{merchantId}/apiCredentials/{apiCredentialId}", async (): Promise<void> => {
            scope.patch(`/merchants/${merchantId}/apiCredentials/${apiCredentialId}`)
                .reply(200, responses.apiCredential);

            const response:  management.ApiCredential = await managementService.MerchantApiCredentials.update(merchantId, apiCredentialId, requests.updateMerchantApiCredentialRequest);

            expect(response).toBeTruthy();
        });
    });

    describe("MerchantApiKey", (): void => {
        it("should support POST /merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey", async (): Promise<void> => {
            scope.post(`/merchants/${merchantId}/apiCredentials/${apiCredentialId}/generateApiKey`)
                .reply(200, responses.generateApiKeyResponse);

            const response:  management.GenerateApiKeyResponse = await managementService.MerchantApiKey.create(merchantId, apiCredentialId);

            expect(response).toBeTruthy();
        });
    });

    describe("MerchantClientKey", (): void => {
        it("should support POST /merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateClientKey", async (): Promise<void> => {
            scope.post(`/merchants/${merchantId}/apiCredentials/${apiCredentialId}/generateClientKey`)
                .reply(200, responses.generateClientKeyResponse);

            const response:  management.GenerateClientKeyResponse = await managementService.MerchantClientKey.create(merchantId, apiCredentialId);

            expect(response).toBeTruthy();
        });
    });

    describe("MerchantPaymentMethods", (): void => {
        it("should support GET /merchants/{merchantId}/paymentMethodSettings", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/paymentMethodSettings?storeId=1&businessLineId=1&pageNumber=1&pageSize=1`)
                .reply(200, responses.paymentMethodResponse);

            const response:  management.PaymentMethodResponse = await managementService.MerchantPaymentMethods.listPaymentMethodSettings(merchantId, {
                params: {
                    "storeId": "1",
                    "businessLineId": "1",
                    "pageSize": "1",
                    "pageNumber": "1"
                }
            });

            expect(response).toBeTruthy();
        });

        it("should support POST /merchants/{merchantId}/paymentMethodSettings", async (): Promise<void> => {
            scope.post(`/merchants/${merchantId}/paymentMethodSettings`)
                .reply(200, responses.paymentMethod);

            const response:  management.PaymentMethod = await managementService.MerchantPaymentMethods.create(merchantId, {
                ...requests.paymentMethodSetupInfo,
                type:  management.PaymentMethodSetupInfo.TypeEnum.Ideal
            });

            expect(response).toBeTruthy();
        });

        it("should support GET /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/paymentMethodSettings/${paymentMethodId}`)
                .reply(200, responses.paymentMethod);

            const response:  management.PaymentMethod = await managementService.MerchantPaymentMethods.retrieve(merchantId, paymentMethodId);

            expect(response).toBeTruthy();
        });

        it("should support PATCH /merchants/{merchantId}/paymentMethodSettings/{paymentMethodId}", async (): Promise<void> => {
            scope.patch(`/merchants/${merchantId}/paymentMethodSettings/${paymentMethodId}`)
                .reply(200, responses.paymentMethod);

            const response:  management.PaymentMethod = await managementService.MerchantPaymentMethods.update(merchantId, paymentMethodId, requests.updatePaymentMethodInfo);

            expect(response).toBeTruthy();
        });
    });

    describe("MerchantPayoutSettings", (): void => {
        it("should support GET /merchants/{merchantId}/payoutSettings", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/payoutSettings`)
                .reply(200, responses.payoutSettingsResponse);

            const response:  management.PayoutSettingsResponse = await managementService.MerchantPayoutSettings.listPayoutSettings(merchantId);

            expect(response).toBeTruthy();
        });

        it("should support POST /merchants/{merchantId}/payoutSettings", async (): Promise<void> => {
            scope.post(`/merchants/${merchantId}/payoutSettings`)
                .reply(200, responses.payoutSettings);

            const response:  management.PayoutSettings = await managementService.MerchantPayoutSettings.create(merchantId, requests.payoutSettingsRequest);

            expect(response).toBeTruthy();
        });

        it("should support DELETE /merchants/{merchantId}/payoutSettings/{payoutSettingsId}", async (): Promise<void> => {
            scope.delete(`/merchants/${merchantId}/payoutSettings/${payoutSettingsId}`)
                .reply(200);

            await managementService.MerchantPayoutSettings.delete(merchantId, payoutSettingsId);
        });

        it("should support GET /merchants/{merchantId}/payoutSettings/{payoutSettingsId}", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/payoutSettings/${payoutSettingsId}`)
                .reply(200, responses.payoutSettings);

            const response:  management.PayoutSettings = await managementService.MerchantPayoutSettings.retrieve(merchantId, payoutSettingsId);

            expect(response).toBeTruthy();
        });

        it("should support PATCH /merchants/{merchantId}/payoutSettings/{payoutSettingsId}", async (): Promise<void> => {
            scope.patch(`/merchants/${merchantId}/payoutSettings/${payoutSettingsId}`)
                .reply(200, responses.payoutSettings);

            const response:  management.PayoutSettings = await managementService.MerchantPayoutSettings.update(merchantId, payoutSettingsId, requests.updatePayoutSettingsRequest);

            expect(response).toBeTruthy();
        });
    });

    describe("MerchantTerminalOrders", (): void => {
        it("should support GET /merchants/{merchantId}/billingEntities", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/billingEntities?name=bill`)
                .reply(200, responses.billingEntitiesResponse);

            const response:  management.BillingEntitiesResponse = await managementService.MerchantTerminalOrders.listBillingEntities(merchantId, {
                params: {
                    "name": "bill"
                }
            });

            expect(response).toBeTruthy();
        });

        it("should support GET /merchants/{merchantId}/shippingLocations", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/shippingLocations?name=1&offset=1&limit=1`)
                .reply(200, responses.shippingLocationsResponse);

            const response:  management.ShippingLocationsResponse = await managementService.MerchantTerminalOrders.listShippingLocations(merchantId, {
                params: {
                    "name": "1",
                    "offset": "1",
                    "limit": "1"
                }
            });

            expect(response).toBeTruthy();
        });

        it("should support POST /merchants/{merchantId}/shippingLocations", async (): Promise<void> => {
            scope.post(`/merchants/${merchantId}/shippingLocations`)
                .reply(200, responses.shippingLocation);

            const response:  management.ShippingLocation = await managementService.MerchantTerminalOrders.createShippingLocation(merchantId, requests.shippingLocation);

            expect(response).toBeTruthy();
        });

        it("should support GET /merchants/{merchantId}/terminalModels", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/terminalModels`)
                .reply(200, responses.terminalModelsResponse);

            const response:  management.TerminalModelsResponse = await managementService.MerchantTerminalOrders.listTerminalModels(merchantId);

            expect(response).toBeTruthy();
        });

        it("should support GET /merchants/{merchantId}/terminalOrders", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/terminalOrders?customerOrderReference=1&status=1&offset=1&limit=1`)
                .reply(200, responses.terminalOrdersResponse);

            const response:  management.TerminalOrdersResponse = await managementService.MerchantTerminalOrders.listTerminalOrders(merchantId, {
                params: {
                    "customerOrderReference": "1",
                    "status": "1",
                    "offset": "1",
                    "limit": "1"
                }
            });

            expect(response).toBeTruthy();
        });

        it("should support POST /merchants/{merchantId}/terminalOrders", async (): Promise<void> => {
            scope.post(`/merchants/${merchantId}/terminalOrders`)
                .reply(200, responses.terminalOrder);

            const response:  management.TerminalOrder = await managementService.MerchantTerminalOrders.create(merchantId, requests.terminalOrderRequest);

            expect(response).toBeTruthy();
        });

        it("should support GET /merchants/{merchantId}/terminalOrders/{orderId}", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/terminalOrders/${orderId}`)
                .reply(200, responses.terminalOrder);

            const response:  management.TerminalOrder = await managementService.MerchantTerminalOrders.retrieve(merchantId, orderId);

            expect(response).toBeTruthy();
        });

        it("should support PATCH /merchants/{merchantId}/terminalOrders/{orderId}", async (): Promise<void> => {
            scope.patch(`/merchants/${merchantId}/terminalOrders/${orderId}`)
                .reply(200, responses.terminalOrder);

            const response:  management.TerminalOrder = await managementService.MerchantTerminalOrders.update(merchantId, orderId, requests.terminalOrderRequest);

            expect(response).toBeTruthy();
        });

        it("should support POST /merchants/{merchantId}/terminalOrders/{orderId}/cancel", async (): Promise<void> => {
            scope.post(`/merchants/${merchantId}/terminalOrders/${orderId}/cancel`)
                .reply(200, responses.terminalOrder);

            const response:  management.TerminalOrder = await managementService.MerchantTerminalOrders.cancel(merchantId, orderId);

            expect(response).toBeTruthy();
        });

        it("should support GET /merchants/{merchantId}/terminalProducts", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/terminalProducts?country=1&terminalModelId=1&offset=1&limit=1`)
                .reply(200, responses.terminalProductsResponse);

            const response:  management.TerminalProductsResponse = await managementService.MerchantTerminalOrders.listTerminalProducts(merchantId, {
                params: {
                    "country": "1",
                    "terminalModelId": "1",
                    "offset": "1",
                    "limit": "1"
                }
            });

            expect(response).toBeTruthy();
        });
    });

    describe("MerchantTerminalSettings", (): void => {
        it("should support GET /merchants/{merchantId}/terminalLogos", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/terminalLogos?model=1`)
                .reply(200, responses.logo);

            const response:  management.Logo = await managementService.MerchantTerminalSettings.retrieveLogo(merchantId, {
                params: {
                    "model": "1"
                }
            });

            expect(response).toBeTruthy();
        });

        it("should support PATCH /merchants/{merchantId}/terminalLogos", async (): Promise<void> => {
            scope.patch(`/merchants/${merchantId}/terminalLogos?model=1`)
                .reply(200, responses.logo);

            const response:  management.Logo = await managementService.MerchantTerminalSettings.updateLogo(merchantId, requests.logo, {
                params: {
                    "model": "1"
                }
            });

            expect(response).toBeTruthy();
        });

        it("should support GET /merchants/{merchantId}/terminalSettings", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/terminalSettings`)
                .reply(200, responses.terminalSettings);

            const response:  management.TerminalSettings = await managementService.MerchantTerminalSettings.retrieve(merchantId);

            expect(response).toBeTruthy();
        });

        it("should support PATCH /merchants/{merchantId}/terminalSettings", async (): Promise<void> => {
            scope.patch(`/merchants/${merchantId}/terminalSettings`)
                .reply(200, responses.terminalSettings);

            const response:  management.TerminalSettings = await managementService.MerchantTerminalSettings.update(merchantId, requests.terminalSettings);

            expect(response).toBeTruthy();
        });
    });

    describe("MerchantUsers", (): void => {
        it("should support GET /merchants/{merchantId}/users", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/users?pageNumber=1&pageSize=1`)
                .reply(200, responses.listMerchantUsersResponse);

            const response:  management.ListMerchantUsersResponse = await managementService.MerchantUsers.list(merchantId, {
                params: {
                    "pageNumber": "1",
                    "pageSize": "1"
                }
            });

            expect(response).toBeTruthy();
        });

        it("should support POST /merchants/{merchantId}/users", async (): Promise<void> => {
            scope.post(`/merchants/${merchantId}/users`)
                .reply(200, responses.createUserResponse);

            const response:  management.CreateUserResponse = await managementService.MerchantUsers.create(merchantId, requests.createMerchantUserRequest);

            expect(response).toBeTruthy();
        });

        it("should support GET /merchants/{merchantId}/users/{userId}", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/users/${userId}`)
                .reply(200, responses.user);

            const response:  management.User = await managementService.MerchantUsers.retrieve(merchantId, userId);

            expect(response).toBeTruthy();
        });

        it("should support PATCH /merchants/{merchantId}/users/{userId}", async (): Promise<void> => {
            scope.patch(`/merchants/${merchantId}/users/${userId}`)
                .reply(200, responses.user);

            const response:  management.User = await managementService.MerchantUsers.update(merchantId, userId, requests.updateMerchantUserRequest);

            expect(response).toBeTruthy();
        });
    });

    describe("MerchantWebhooks", (): void => {
        it("should support GET /merchants/{merchantId}/webhooks", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/webhooks?pageNumber=1&pageSize=1`)
                .reply(200, responses.listWebhooksResponse);

            const response:  management.ListWebhooksResponse = await managementService.MerchantWebhooks.list(merchantId, {
                params: {
                    "pageNumber": "1",
                    "pageSize": "1"
                }
            });

            expect(response).toBeTruthy();
        });

        it("should support POST /merchants/{merchantId}/webhooks", async (): Promise<void> => {
            scope.post(`/merchants/${merchantId}/webhooks`)
                .reply(200, responses.webhook);

            const response:  management.Webhook = await managementService.MerchantWebhooks.create(merchantId, {
                ...requests.createMerchantWebhookRequest,
                communicationFormat:  management.CreateMerchantWebhookRequest.CommunicationFormatEnum.Json,
                networkType:  management.CreateMerchantWebhookRequest.NetworkTypeEnum.Public,
                sslVersion:  management.CreateMerchantWebhookRequest.SslVersionEnum.Tls
            });

            expect(response).toBeTruthy();
        });

        it("should support DELETE /merchants/{merchantId}/webhooks/{webhookId}", async (): Promise<void> => {
            scope.delete(`/merchants/${merchantId}/webhooks/${webhookId}`)
                .reply(204);

            await managementService.MerchantWebhooks.delete(merchantId, webhookId);
        });

        it("should support GET /merchants/{merchantId}/webhooks/{webhookId}", async (): Promise<void> => {
            scope.get(`/merchants/${merchantId}/webhooks/${webhookId}`)
                .reply(200, responses.webhook);

            const response:  management.Webhook = await managementService.MerchantWebhooks.retrieve(merchantId, webhookId);

            expect(response).toBeTruthy();
        });

        it("should support PATCH /merchants/{merchantId}/webhooks/{webhookId}", async (): Promise<void> => {
            scope.patch(`/merchants/${merchantId}/webhooks/${webhookId}`)
                .reply(200, responses.webhook);

            const response:  management.Webhook = await managementService.MerchantWebhooks.update(merchantId, webhookId, {
                ...requests.updateMerchantWebhookRequest,
                communicationFormat:  management.CreateMerchantWebhookRequest.CommunicationFormatEnum.Soap,
                networkType:  management.CreateMerchantWebhookRequest.NetworkTypeEnum.Local,
                sslVersion:  management.CreateMerchantWebhookRequest.SslVersionEnum.Sslv3
            });

            expect(response).toBeTruthy();
        });

        it("should support POST /merchants/{merchantId}/webhooks/{webhookId}/generateHmac", async (): Promise<void> => {
            scope.post(`/merchants/${merchantId}/webhooks/${webhookId}/generateHmac`)
                .reply(200, responses.generateHmacKeyResponse);

            const response:  management.GenerateHmacKeyResponse = await managementService.MerchantWebhooks.generateHmac(merchantId, webhookId);

            expect(response).toBeTruthy();
        });

        it("should support POST /merchants/{merchantId}/webhooks/{webhookId}/test", async (): Promise<void> => {
            scope.post(`/merchants/${merchantId}/webhooks/${webhookId}/test`)
                .reply(200, responses.testWebhookResponse);

            const testWebhookRequest:  management.TestWebhookRequest = {
                "notification": {
                    "amount": {
                        "currency": "string",
                        "value": 0
                    },
                    "eventCode": "string",
                    "eventDate": new Date(2022, 6, 15),
                    "merchantReference": "string",
                    "paymentMethod": "string",
                    "reason": "string",
                    "success": false
                },
                "types": ["string"]
            };
            const response:  management.TestWebhookResponse = await managementService.MerchantWebhooks.test(merchantId, webhookId, testWebhookRequest);

            expect(response).toBeTruthy();
        });
    });
});
