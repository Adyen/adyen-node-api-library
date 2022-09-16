import nock from "nock";
import Client from "../client";
import {createClient} from "../__mocks__/base";
import * as models from "../typings/legalEntityManagement/models";
import {Document, LegalEntityInfo, OnboardingLinkInfo, TransferInstrumentInfo} from "../typings/legalEntityManagement/models";
import {DocumentUpdate} from "../services/legalEntityManagement/documents";
import LegalEntityManagement from "../services/legalEntityManagement";
import {businessLine, businessLines, document, legalEntity, onboardingLink, onboardingTheme, onboardingThemes, transferInstrument} from "../__mocks__/legalEntityManagement/responses";
import TransferEnum = TransferInstrumentInfo.TypeEnum;
import TypeEnum = LegalEntityInfo.TypeEnum
import DocEnum = Document.TypeEnum
import {onboardingLinkInfo} from "../__mocks__/legalEntityManagement/requests";

let client: Client;
let legalEntityManagement: LegalEntityManagement;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock(`${client.config.legalEntityManagementEndpoint}/${Client.LEGAL_ENTITY_MANAGEMENT_API_VERSION}`);
    legalEntityManagement = new LegalEntityManagement(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Legal Entity Management", (): void => {

    const id = "123456789"

    describe("LegalEntities", (): void => {
        it("should support POST /legalEntities", async (): Promise<void> => {
            scope.post("/legalEntities")
                .reply(200, legalEntity);

            const request: models.LegalEntityInfo = {
                type : TypeEnum.Individual,
                individual : undefined
            };

            const response: models.LegalEntity = await legalEntityManagement.LegalEntities.create(request);

            expect(response.id).toBe(id);
            expect(response.type).toBe("individual");
        });

        it("should support GET /legalEntities/{id}", async (): Promise<void> => {
            scope.get(`/legalEntities/${id}`)
                .reply(200, legalEntity);

            const response: models.LegalEntity = await legalEntityManagement.LegalEntities.retrieve("123456789");

            expect(response.id).toBe(id);
            expect(response.type).toBe("individual");
        });

        it("should support PATCH /legalEntities/{id}", async (): Promise<void> => {
            scope.patch(`/legalEntities/${id}`)
                .reply(200, legalEntity);

            const request: models.LegalEntityInfo = {
                type : TypeEnum.Individual,
                individual : undefined
            };

            const response: models.LegalEntity = await legalEntityManagement.LegalEntities.update(id, request);

            expect(response.id).toBe(id);
            expect(response.type).toBe("individual");
        });

        it("should support GET /legalEntities/{id}/BusinessLines", async (): Promise<void> => {
            scope.get(`/legalEntities/${id}/businessLines`)
                .reply(200, businessLines);

            const response: models.BusinessLines = await legalEntityManagement.LegalEntities.listBusinessLines(id);

            expect(response.businessLines).toEqual( [{
                "capability": "receivePayments",
                "id": "123456789",
                "industryCode": "123456789",
                "legalEntityId": "123456789",
                "salesChannels": ["string"],
                "sourceOfFunds": {
                    "acquiringBusinessLineId": "string",
                    "adyenProcessedFunds": false,
                    "description": "string",
                    "type": "business"
                },
                "webData": [{ "webAddress": "string" }],
                "webDataExemption": { "reason": "noOnlinePresence" }
            }]);
        });

    });

    describe("Transfer Instruments", (): void => {
        it("should support POST /transferInstruments", async (): Promise<void> => {
            scope.post("/transferInstruments")
                .reply(200, transferInstrument);

            const request: models.TransferInstrumentInfo = {
                type : TransferEnum.BankAccount,
                legalEntityId : id,
                bankAccount : {accountNumber: "string",
                    accountType: "string",
                    bankBicSwift: "string",
                    bankCity: "string",
                    bankCode: "string",
                    bankName: "string",
                    branchCode: "string",
                    checkCode: "string",
                    countryCode: "string",
                    currencyCode: "string",
                    iban: "string"
                }
            };

            const response: models.TransferInstrument = await legalEntityManagement.TransferInstruments.create(request);

            expect(response.id).toBe(id);
            expect(response.type).toBe(TransferEnum.BankAccount);
        });

        it("should support GET /transferInstruments/{id}", async (): Promise<void> => {
            scope.get(`/transferInstruments/${id}`)
                .reply(200, transferInstrument);

            const response: models.TransferInstrument = await legalEntityManagement.TransferInstruments.retrieve(id);

            expect(response.id).toBe(id);
            expect(response.type).toBe(TransferEnum.BankAccount);
        });

        it("should support PATCH /transferInstruments/{id}", async (): Promise<void> => {
            scope.patch(`/transferInstruments/${id}`)
                .reply(200, transferInstrument);

            const request: models.TransferInstrumentInfo = {
                type : TransferEnum.BankAccount,
                legalEntityId : id,
                bankAccount : {accountNumber: "string",
                    accountType: "string",
                    bankBicSwift: "string",
                    bankCity: "string",
                    bankCode: "string",
                    bankName: "string",
                    branchCode: "string",
                    checkCode: "string",
                    countryCode: "string",
                    currencyCode: "string",
                    iban: "string"
                }
            };

            const response: models.TransferInstrument = await legalEntityManagement.TransferInstruments.update(id, request);

            expect(response.id).toBe(id);
            expect(response.type).toBe(TransferEnum.BankAccount);
        });

        it("should support DELETE /transferInstruments/{id}", async (): Promise<void> => {
            scope.delete(`/transferInstruments/${id}`)
                .reply(200);

            await legalEntityManagement.TransferInstruments.delete(id);

            expect(200);
        });
    });

    describe("Business Lines", (): void => {
        it("should support POST /businessLines", async (): Promise<void> => {
            scope.post("/businessLines")
                .reply(200, businessLine);

            const request: models.BusinessLineInfo = {
                capability: "receivePayments",
                industryCode: id,
                legalEntityId: id };

            const response: models.BusinessLine = await legalEntityManagement.BusinessLineService.create(request);

            expect(response.id).toBe(id);
            expect(response.capability).toBe("receivePayments");
            expect(response.industryCode).toBe(id);
            expect(response.legalEntityId).toBe(id);
        });

        it("should support GET /businessLines/{id}", async (): Promise<void> => {
            scope.get(`/businessLines/${id}`)
                .reply(200, businessLine);

            const response: models.BusinessLine = await legalEntityManagement.BusinessLineService.retrieve(id);

            expect(response.id).toBe(id);
            expect(response.capability).toBe("receivePayments");
        });

        it("should support PATCH /businessLines/{id}", async (): Promise<void> => {
            scope.patch(`/businessLines/${id}`)
                .reply(200, businessLine);

            const request: models.BusinessLineInfo = {
                capability: "receivePayments",
                industryCode: id,
                legalEntityId: id };

            const response: models.BusinessLine = await legalEntityManagement.BusinessLineService.update(id, request);

            expect(response.id).toBe(id);
            expect(response.capability).toBe("receivePayments");
            expect(response.industryCode).toBe(id);
            expect(response.legalEntityId).toBe(id);
        });
    });

    describe("Documents", (): void => {
        it("should support POST /documents", async (): Promise<void> => {
            scope.post("/documents")
                .reply(200, document);

            const request: DocumentUpdate = {
                attachments: [{
                    content: "string",
                    contentType: "string",
                    filename: "string",
                    pageName: "string",
                    pageType: "string"
                }],
                description: "document",
                owner: {
                    "id": "123456789",
                    "type": "passport"
                },
                type : DocEnum.DriversLicense
            };

            const response: models.Document = await legalEntityManagement.Documents.create(request);

            expect(response.id).toBe(id);
            expect(response.type).toBe(DocEnum.DriversLicense);
            expect(response.owner).toEqual({id : "123456789", type : "passport" })
        });

        it("should support GET /documents/{id}", async (): Promise<void> => {
            scope.get(`/documents/${id}`)
                .reply(200, document);

            const response: models.Document = await legalEntityManagement.Documents.retrieve(id);

            expect(response.id).toBe(id);
            expect(response.type).toBe(DocEnum.DriversLicense);
            expect(response.owner).toEqual({id : "123456789", type : "passport" })
        });

        it("should support PATCH /documents/{id}", async (): Promise<void> => {
            scope.patch(`/documents/${id}`)
                .reply(200, document);

            const request: DocumentUpdate = {
                attachments: [{
                    content: "string",
                    contentType: "string",
                    filename: "string",
                    pageName: "string",
                    pageType: "string"
                }],
                description: "document",
                owner: {
                    "id": "123456789",
                    "type": "passport"
                },
                type : DocEnum.DriversLicense
            };

            const response: models.Document = await legalEntityManagement.Documents.update(id, request);

            expect(response.id).toBe(id);
            expect(response.type).toBe(DocEnum.DriversLicense);
            expect(response.owner).toEqual({id : "123456789", type : "passport" })
        });

        it("should support DELETE /documents/{id}", async (): Promise<void> => {
            scope.delete(`/documents/${id}`)
                .reply(200);

            await legalEntityManagement.Documents.delete(id);

        });
    });

    describe("OnboardingLinks and Themes", (): void => {
        it("should support POST /onboardingLinks", async (): Promise<void> => {
            scope.post(`/legalEntities/${id}/onboardingLinks`)
                .reply(200, onboardingLink);

            const request: OnboardingLinkInfo = onboardingLinkInfo;

            const response: models.OnboardingLink = await legalEntityManagement.OnboardingPage.create(id, request);

            expect(response.url).toBe("https://your.redirect-url.com");
        });

        it("should support GET /themes", async (): Promise<void> => {
            scope.get(`/themes`)
                .reply(200, onboardingThemes);

            const response: models.OnboardingThemes = await legalEntityManagement.OnboardingPage.retrieve();

            expect(response.themes[0].id).toEqual(id);
        });

        it("should support GET /themes/{id}", async (): Promise<void> => {
            scope.get(`/themes/${id}`)
                .reply(200, onboardingTheme);

            const response: models.OnboardingTheme = await legalEntityManagement.OnboardingPage.update(id);
            expect(response.id).toBe(id);
        });
    });
});