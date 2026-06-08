
import nock from "nock";
import Client from "../client";
import { createClient } from "../__mocks__/base";
import { CapitalAPI } from "../services";
import { Types } from "..";

import getGrantSuccess from "../__mocks__/capital/get-grant-success.json";
import grantsSuccess from "../__mocks__/capital/grants-success.json";
import requestGrantSuccess from "../__mocks__/capital/request-grant.json";
import getGrantDisbursementSuccess from "../__mocks__/capital/get-grant-disbursement-success.json";
import getGrantDisbursementsSuccess from "../__mocks__/capital/get-grant-disbursements-success.json";

import getGrantAccountSuccess from "../__mocks__/capital/get-grant-account-success.json";
import grantOffersSuccess from "../__mocks__/capital/grant-offers-success.json";
import getGrantOfferSuccess from "../__mocks__/capital/get-grant-offer-success.json";
import getDynamicOffersSuccess from "../__mocks__/capital/get-dynamic-offers-success.json";
import calculatePreliminaryOfferSuccess from "../__mocks__/capital/calculate-preliminary-offer-success.json";
import createStaticOfferSuccess from "../__mocks__/capital/create-static-offer-success.json";

let client: Client;
let capitalApi: CapitalAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock("https://balanceplatform-api-test.adyen.com/capital/v1");
    capitalApi = new CapitalAPI(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Capital", () => {
    describe("GrantsApi", () => {
        it("should get a grant", async () => {
            const grantId = "GR00000000000000000000001";
            scope.get(`/grants/${grantId}`)
                .reply(200, getGrantSuccess);

            const response = await capitalApi.GrantsApi.getGrant(grantId);

            expect(response).toBeDefined();
            expect(response.id).toBe(grantId);
            expect(response.grantAccountId).toBe("CG00000000000000000000001");
            expect(response.grantOfferId).toBe("GO00000000000000000000001");
            expect(response.status?.code).toBe(Types.capital.Status.CodeEnum.Active);
            expect(response.balances).toEqual({
                currency: "EUR",
                principal: 10000,
                fee: 1000,
                total: 11000,
            });
            expect(response.counterparty).toEqual({
                accountHolderId: "AH00000000000000000000001",
                balanceAccountId: "BA00000000000000000000001",
            });
        });

        it("should get all grants", async () => {
            const counterpartyAccountHolderId = "GR00000000000000000000001";
            scope.get("/grants").query({ counterpartyAccountHolderId })
                .reply(200, grantsSuccess);

            const response = await capitalApi.GrantsApi.getAllGrants(counterpartyAccountHolderId);

            expect(response).toBeDefined();
            expect(response.grants?.length).toBe(1);
        });

        it("should throw an error if counterpartyAccountHolderId is not provided to getAllGrants", async () => {
            await expect(capitalApi.GrantsApi.getAllGrants(undefined as any)).rejects.toThrow();
        });

        it("should request a grant", async () => {
            scope.post("/grants")
                .reply(200, requestGrantSuccess);
            
            const grantInfo: Types.capital.GrantInfo = { grantAccountId: "GR00000000000000000000001", grantOfferId: "0000000000000001" };
            const response = await capitalApi.GrantsApi.requestGrant(grantInfo);

            expect(response).toBeDefined();
            expect(response.id).toBe("GR00000000000000000000001");
            expect(response.grantAccountId).toBe("CG00000000000000000000001");
            expect(response.grantOfferId).toBe("0000000000000001");
            expect(response.status?.code).toBe(Types.capital.Status.CodeEnum.Pending);
            expect(response.balances).toEqual({
                currency: "EUR",
                principal: 1000000,
                fee: 120000,
                total: 1120000,
            });
            expect(response.counterparty).toEqual({
                accountHolderId: "AH00000000000000000000001",
                balanceAccountId: "BA00000000000000000000001",
            });
        });

        it("should get a grant disbursement", async () => {
            const grantId = "GR00000000000000000000001";
            const disbursementId = "DI00000000000000000000001";
            scope.get(`/grants/${grantId}/disbursements/${disbursementId}`)
                .reply(200, getGrantDisbursementSuccess);

            const response = await capitalApi.GrantsApi.getGrantDisbursement(grantId, disbursementId);

            expect(response).toBeDefined();
            expect(response.id).toBe("DI00000000000000000000001");
            expect(response.grantId).toBe("GR00000000000000000000001");
            expect(response.accountHolderId).toBe("AH00000000000000000000001");
            expect(response.balanceAccountId).toBe("BA00000000000000000000001");
            expect(response.amount).toEqual({
                currency: "EUR",
                value: 10000,
            });
            expect(response.balances).toEqual({
                currency: "EUR",
                principal: 10000,
                fee: 1000,
                total: 11000,
            });
        });

        it("should get all grant disbursements", async () => {
            const grantId = "GR00000000000000000000001";
            scope.get(`/grants/${grantId}/disbursements`)
                .reply(200, getGrantDisbursementsSuccess);

            const response = await capitalApi.GrantsApi.getAllGrantDisbursements(grantId);

            expect(response).toBeDefined();
            expect(response.disbursements?.length).toBe(1);
            expect(response.disbursements?.[0].id).toBe("DI00000000000000000000001");
        });
    });

    describe("GrantAccountsApi", () => {
        it("should get grant account information", async () => {
            const grantAccountId = "CG00000000000000000000001";

            scope.get(`/grantAccounts/${grantAccountId}`)
                .reply(200, getGrantAccountSuccess);
            
            const response = await capitalApi.GrantAccountsApi.getGrantAccountInformation(grantAccountId);

            expect(response).toBeDefined();
            expect(response.id).toBe("CG00000000000000000000001");
            expect(response.fundingBalanceAccountId).toBe("BA00000000000000000000001");
            expect(response.limits?.length).toBe(1);
            expect(response.balances?.length).toBe(1);
        });

        it("should throw an error if id is not provided to getGrantAccountInformation", async () => {
            await expect(capitalApi.GrantAccountsApi.getGrantAccountInformation(undefined as any)).rejects.toThrow();
        });
    });

    describe("GrantOffersApi", () => {
        it("should get all grant offers with query param", async () => {
            const accountHolderId = "AH00000000000000000000001";
            scope.get("/grantOffers")
                .query({ accountHolderId })
                .reply(200, grantOffersSuccess);
            
            const response = await capitalApi.GrantOffersApi.getAllGrantOffers(accountHolderId);

            expect(response.grantOffers?.length).toBe(1);
            expect(response.grantOffers?.[0].id).toBe("GO00000000000000000000001");
        });

        it("should get a grant offer", async () => {
            const grantOfferId = "GO00000000000000000000001";
            scope.get(`/grantOffers/${grantOfferId}`)
                .reply(200, getGrantOfferSuccess);

            const response = await capitalApi.GrantOffersApi.getGrantOffer(grantOfferId);

            expect(response).toBeDefined();
            expect(response.id).toBe("GO00000000000000000000001");
            expect(response.accountHolderId).toBe("AH00000000000000000000001");
            expect(response.amount?.value).toBe(10000);
        });

        it("should throw an error if grantOfferId is not provided to getGrantOffer", async () => {
            await expect(capitalApi.GrantOffersApi.getGrantOffer(undefined as any)).rejects.toThrow();
        });
    });

    describe("DynamicOffersApi", () => {
        it("should get all dynamic offers", async () => {
            const accountHolderId = "AH00000000000000000000001";
            scope.get("/dynamicOffers")
                .query({ accountHolderId })
                .reply(200, getDynamicOffersSuccess);

            const response = await capitalApi.DynamicOffersApi.getAllDynamicOffers(accountHolderId);

            expect(response).toBeDefined();
            expect(response.dynamicOffers?.length).toBe(1);
            expect(response.dynamicOffers?.[0].id).toBe("DO00000000000000000000001");
            expect(response.dynamicOffers?.[0].accountHolderId).toBe("AH00000000000000000000001");
            expect(response.dynamicOffers?.[0].financingType).toBe("businessFinancing");
            expect(response.dynamicOffers?.[0].minimumAmount).toEqual({ currency: "EUR", value: 5000 });
            expect(response.dynamicOffers?.[0].maximumAmount).toEqual({ currency: "EUR", value: 50000 });
        });

        it("should get all dynamic offers filtered by financingType", async () => {
            const accountHolderId = "AH00000000000000000000001";
            const financingType = Types.capital.FinancingType.BusinessFinancing;
            scope.get("/dynamicOffers")
                .query({ accountHolderId, financingType })
                .reply(200, getDynamicOffersSuccess);

            const response = await capitalApi.DynamicOffersApi.getAllDynamicOffers(accountHolderId, financingType);

            expect(response).toBeDefined();
            expect(response.dynamicOffers?.length).toBe(1);
        });

        it("should calculate a preliminary offer from a dynamic offer", async () => {
            const id = "DO00000000000000000000001";
            scope.post(`/dynamicOffers/${id}/calculate`)
                .reply(200, calculatePreliminaryOfferSuccess);

            const request: Types.capital.CalculateGrantOfferRequest = {
                amount: { currency: "EUR", value: 10000 }
            };
            const response = await capitalApi.DynamicOffersApi.calculatePreliminaryOfferFromDynamicOffer(id, request);

            expect(response).toBeDefined();
            expect(response.accountHolderId).toBe("AH00000000000000000000001");
            expect(response.contractType).toBe("cashAdvance");
            expect(response.amount).toEqual({ currency: "EUR", value: 10000 });
            expect(response.fee?.amount).toEqual({ currency: "EUR", value: 1000 });
            expect(response.fee?.aprBasisPoints).toBe(1200);
            expect(response.repayment?.basisPoints).toBe(1000);
        });

        it("should throw an error if id is not provided to calculatePreliminaryOfferFromDynamicOffer", async () => {
            const request: Types.capital.CalculateGrantOfferRequest = {
                amount: { currency: "EUR", value: 10000 }
            };
            await expect(
                capitalApi.DynamicOffersApi.calculatePreliminaryOfferFromDynamicOffer(undefined as any, request)
            ).rejects.toThrow();
        });

        it("should create a static offer from a dynamic offer", async () => {
            const id = "DO00000000000000000000001";
            scope.post(`/dynamicOffers/${id}/grantOffer`)
                .reply(200, createStaticOfferSuccess);

            const request: Types.capital.CreateGrantOfferRequest = {
                amount: { currency: "EUR", value: 10000 }
            };
            const response = await capitalApi.DynamicOffersApi.createStaticOfferFromDynamicOffer(id, request);

            expect(response).toBeDefined();
            expect(response.id).toBe("GO00000000000000000000002");
            expect(response.accountHolderId).toBe("AH00000000000000000000001");
            expect(response.contractType).toBe("cashAdvance");
            expect(response.amount).toEqual({ currency: "EUR", value: 10000 });
            expect(response.fee?.amount).toEqual({ currency: "EUR", value: 1000 });
            expect(response.repayment?.term?.estimatedDays).toBe(180);
        });

        it("should throw an error if id is not provided to createStaticOfferFromDynamicOffer", async () => {
            const request: Types.capital.CreateGrantOfferRequest = {
                amount: { currency: "EUR", value: 10000 }
            };
            await expect(
                capitalApi.DynamicOffersApi.createStaticOfferFromDynamicOffer(undefined as any, request)
            ).rejects.toThrow();
        });
    });
});
