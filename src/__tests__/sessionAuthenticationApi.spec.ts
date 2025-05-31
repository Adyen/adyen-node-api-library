import nock from "nock";
import { createClient } from "../__mocks__/base";
import SessionAuthenticationApi from "../services/sessionAuthentication";
import Client from "../client";
import { AuthenticationSessionRequest, AuthenticationSessionResponse, ProductType, ResourceType } from "../typings/sessionAuthentication/models";

let client: Client;
let sessionAuthenticationApi: SessionAuthenticationApi;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    sessionAuthenticationApi = new SessionAuthenticationApi(client);
    scope = nock("https://test.adyen.com/authe/api/v1");
});

afterEach(() => {
    nock.cleanAll();
});

describe("SessionAuthenticationApi", (): void => {
    test("should create an authentication session", async (): Promise<void> => {
        const mockResponse: AuthenticationSessionResponse = {
            id: "12345678",
            token: "ABCDEFGHIJKLMNOP",
        };

        scope.post("/sessions").reply(200, mockResponse);

        const accountHolderResource = {
            type: ResourceType.AccountHolder,
            accountHolderId: "accountHolder1"
        };

        const request: AuthenticationSessionRequest = {
            allowOrigin: "https://your-merchant-website.com",
            policy: {
                resources: new Set([
                    accountHolderResource
                ]),
                roles: new Set(["role1", "role2"])
            },
            product: ProductType.Platform
        };

        const result = await sessionAuthenticationApi.SessionAuthenticationApi.createAuthenticationSession(request);

        expect(result).toBeTruthy();
        expect(result.token).toBe("ABCDEFGHIJKLMNOP");
    });
});