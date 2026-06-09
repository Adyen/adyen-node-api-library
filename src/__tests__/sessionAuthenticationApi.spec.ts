import nock from "nock";
import { createClient } from "../__mocks__/base";
import SessionAuthenticationApi from "../services/sessionAuthentication";
import Client from "../client";
import { AccountHolderResource, AuthenticationSessionRequest, AuthenticationSessionResponse, ObjectSerializer, Policy, ProductType, ResourceType } from "../typings/sessionAuthentication/models";

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

    test("should serialise Set<string> and Set<Resource> as arrays in the request body", async (): Promise<void> => {
        const mockResponse: AuthenticationSessionResponse = {
            id: "12345678",
            token: "ABCDEFGHIJKLMNOP",
        };

        let capturedBody: Record<string, unknown> = {};
        scope.post("/sessions").reply(200, function (_uri, body) {
            capturedBody = body as Record<string, unknown>;
            return mockResponse;
        });

        const accountHolderResource = {
            type: ResourceType.AccountHolder,
            accountHolderId: "AH123456789",
        };

        const request: AuthenticationSessionRequest = {
            allowOrigin: "https://your-merchant-website.com",
            policy: {
                resources: new Set([accountHolderResource]),
                roles: new Set(["onboarding", "verification"]),
            },
            product: ProductType.Platform,
        };

        await sessionAuthenticationApi.SessionAuthenticationApi.createAuthenticationSession(request);

        const policy = capturedBody["policy"] as Record<string, unknown>;

        // Sets must be serialised as arrays, not as empty objects ({})
        expect(Array.isArray(policy["roles"])).toBe(true);
        expect(policy["roles"]).toEqual(["onboarding", "verification"]);
        expect(Array.isArray(policy["resources"])).toBe(true);
        expect(policy["resources"]).toEqual([{ type: ResourceType.AccountHolder, accountHolderId: "AH123456789" }]);
    });

    test("should deserialise arrays in Policy JSON into Set instances", (): void => {
        const raw = {
            roles: ["onboarding", "verification"],
            resources: [
                { type: ResourceType.AccountHolder, accountHolderId: "AH123456789" },
            ],
        };

        const policy: Policy = ObjectSerializer.deserialize(raw, "Policy");

        expect(policy.roles).toBeInstanceOf(Set);
        expect(policy.roles).toEqual(new Set(["onboarding", "verification"]));
        expect(policy.resources).toBeInstanceOf(Set);
        const expectedResource = new AccountHolderResource();
        expectedResource.type = ResourceType.AccountHolder;
        expectedResource.accountHolderId = "AH123456789";
        expect(policy.resources).toEqual(new Set([expectedResource]));
    });
});