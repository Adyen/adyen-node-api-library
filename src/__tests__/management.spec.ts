import nock from "nock";
import Client from "../client";
import {createClient} from "../__mocks__/base";
import { Management } from "../services";
import { AllowedOrigin, AllowedOriginsResponse, MeApiCredential } from "../typings/management/models";

let client: Client;
let management: Management;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock(`${client.config.managementEndpoint}/${Client.MANAGEMENT_API_VERSION}`);
    management = new Management(client);
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
            const meResponse: MeApiCredential = await management.Me.retrieve();
            expect(meResponse.id).toEqual("S2-6262224667");
        });

        test("Should add an allowed origin to the list of allowed origins",async (): Promise<void> => {
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
        const allowedOriginRequest: AllowedOrigin = {
            "domain": "https://www.us.mystore.com"
        };

        const allowedOriginsResponse: AllowedOrigin = await management.Me.createAllowedOrigin(allowedOriginRequest);
        expect(allowedOriginsResponse.domain).toEqual("https://www.us.mystore.com");
        });

        test("Should get the list of allowed origins of a API credential based on the API key used in the request", async(): Promise<void> => {
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

            const allowedOriginsResponse : AllowedOriginsResponse = await management.Me.retrieveAllowedOrigins();
            expect(allowedOriginsResponse.data?.length).toEqual(1);
        });
    });

    test("Should retrieve the details of the allowed origin specified in the path",async () => {
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

        const allowedOriginResponse: AllowedOrigin = await management.Me.retrieveAllowedOrigin("S2-123123123123123");
        expect(allowedOriginResponse.id).toEqual("S2-123123123123123");
    });

    test("Should remove the allowed origin specified in the path", async () => {
        scope.delete("/me/allowedOrigins/S2-123123123123123").reply(204, {});
        const allowedOriginResponse: Record<string, unknown> = await management.Me.deleteAllowerdOrigin("S2-123123123123123");
        expect(scope.isDone()).toBe(true);
        expect(Object.entries(allowedOriginResponse).length).toBe(0);
    });
});
