import nock from "nock";
import Client from "../client";
import { createClient } from "../__mocks__/base";
import { AccountVerificationApi } from "../services/openBanking/accountVerificationApi";
import {
    AccountType,
    AccountVerificationCountry,
    AccountVerificationReportResponse,
    AccountVerificationRoutesRequest,
    AccountVerificationRoutesResponse,
    PartyRole,
} from "../typings/openBanking/models";

let client: Client;
let accountVerificationApi: AccountVerificationApi;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock("https://obgateway-test.adyen.com/obgateway/v1");
    accountVerificationApi = new AccountVerificationApi(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Open Banking", (): void => {
    it("should create account verification routes", async (): Promise<void> => {
        const request: AccountVerificationRoutesRequest = {
            country: AccountVerificationCountry.Nl,
            locale: "en-US",
            state: "11a1e60a-18b0-4dda-9258-e0ae29e1e2a3",
            redirectUrl: "https://merchanturl.example.org/redirect/url",
        };

        const mockResponse: AccountVerificationRoutesResponse = {
            routes: [
                {
                    provider: {
                        name: "Tink",
                        logoURL: "https://obgateway.adyen.com/obgateway/static/provider/images/tink-logo.svg",
                    },
                    link: "https://obgateway.adyen.com/obgateway/provider/outgoing/tink/redirect/13ec4802-c987-4f8c-8909-9a75ff567256",
                },
            ],
        };

        scope.post("/accountVerification/routes")
            .reply(200, mockResponse);

        const response = await accountVerificationApi.createAccountVerificationRoutes(request);

        expect(response.routes.length).toBe(1);
        expect(response.routes[0].link).toEqual("https://obgateway.adyen.com/obgateway/provider/outgoing/tink/redirect/13ec4802-c987-4f8c-8909-9a75ff567256");
    });

    it("should get account verification report", async (): Promise<void> => {
        const code = "some_code";
        
        const mockResponse: AccountVerificationReportResponse = {
            id: "69ee9452ef824fe092f1417f37535755",
            country: AccountVerificationCountry.Es,
            accounts: [
                {
                    accountId: "ed5080e4f485430290475d246534c8fd",
                    accountType: AccountType.Current,
                    accountName: "Checking Account 1",
                    accountNumber: "ES1376230223254275408743",
                    currency: "EUR",
                    identifiers: {
                        iban: {
                            iban: "ES1376230223254275408743",
                            bban: "76230223254275408743",
                            bic: "BIC001"
                        },
                    },
                    parties: [
                        {
                            identity: {
                                fullLegalName: "Alberta Bobbeth Charleson",
                                name: "Alberta Bobbeth Charleson",
                            },
                            role: PartyRole.Holder,
                        },
                    ],
                    bankName: "Tink Demo Bank",
                },
            ],
        };

        scope.get(`/accountVerification/reports/${code}`)
            .reply(200, mockResponse);

        const response = await accountVerificationApi.getAccountVerificationReport(code);

        expect(response.id).toEqual("69ee9452ef824fe092f1417f37535755");
        expect(response.country).toEqual(AccountVerificationCountry.Es);
        expect(response.accounts.length).toBe(1);

    });
});
