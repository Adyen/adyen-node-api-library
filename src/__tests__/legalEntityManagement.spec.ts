import nock from "nock";
import Client from "../client";
import {createClient} from "../__mocks__/base";
import * as models from "../typings/legalEntityManagement/models";
import {
    Document,
    LegalEntityInfo,
    LegalEntityInfoRequiredType,
    OnboardingLinkInfo, TransferInstrumentInfo
} from "../typings/legalEntityManagement/models";
import {
    businessLine,
    businessLines,
    document,
    legalEntity,
    legalEntityAdditionalAttributes,
    legalEntityUnknownEnum,
    onboardingLink,
    onboardingTheme,
    onboardingThemes,
    transferInstrument
} from "../__mocks__/legalEntityManagement/responses";
import {onboardingLinkInfo} from "../__mocks__/legalEntityManagement/requests";
import LegalEntityManagementAPI from "../services/legalEntityManagement";
import TypeEnum = LegalEntityInfoRequiredType.TypeEnum;

let client: Client;
let legalEntityManagement: LegalEntityManagementAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock("https://kyc-test.adyen.com/lem/v4");
    legalEntityManagement = new LegalEntityManagementAPI(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Legal Entity Management", (): void => {

    const id = "123456789";

    describe("LegalEntities", (): void => {
        it("should support POST /legalEntities", async (): Promise<void> => {
            scope.post("/legalEntities")
                .reply(200, legalEntity);

            const request: models.LegalEntityInfoRequiredType = {
                type : TypeEnum.Individual,
                individual : undefined
            };

            const response: models.LegalEntity = await legalEntityManagement.LegalEntitiesApi.createLegalEntity(request);

            expect(response.id).toBe(id);
            expect(response.type).toBe("individual");
        });

        it("should support GET /legalEntities/{id}", async (): Promise<void> => {
            scope.get(`/legalEntities/${id}`)
                .reply(200, legalEntity);

            const response: models.LegalEntity = await legalEntityManagement.LegalEntitiesApi.getLegalEntity("123456789");

            expect(response.id).toBe(id);
            expect(response.type).toBe("individual");
        });

        it("should support GET /legalEntities/{id} with additional attributes", async (): Promise<void> => {
            scope.get(`/legalEntities/${id}`)
                .reply(200, legalEntityAdditionalAttributes);

                await expect(async () => {
                        const response = await legalEntityManagement.LegalEntitiesApi.getLegalEntity("123456789");
                        expect(response.id).toBe(id);
                        expect(response.type).toBe("individual");
                    }).not.toThrow();
        });

        it("should support GET /legalEntities/{id} with unknown enum", async (): Promise<void> => {
            scope.get(`/legalEntities/${id}`)
                .reply(200, legalEntityUnknownEnum);

                await expect(async () => {
                        const response = await legalEntityManagement.LegalEntitiesApi.getLegalEntity("123456789");
                        expect(response.id).toBe(id);
                        // type is unknown, so it holds whatever value is found in the payload
                        expect(response.type).toBe("this is unknown");
                    }).not.toThrow();            
        });

        it("should support PATCH /legalEntities/{id}", async (): Promise<void> => {
            scope.patch(`/legalEntities/${id}`)
                .reply(200, legalEntity);

            const request: models.LegalEntityInfo = {
                type : LegalEntityInfo.TypeEnum.Individual,
                individual : undefined
            };

            const response: models.LegalEntity = await legalEntityManagement.LegalEntitiesApi.updateLegalEntity(id, request);

            expect(response.id).toBe(id);
            expect(response.type).toBe("individual");
        });

        it("should support GET /legalEntities/{id}/BusinessLines", async (): Promise<void> => {
            scope.get(`/legalEntities/${id}/businessLines`)
                .reply(200, businessLines);

            const response: models.BusinessLines = await legalEntityManagement.LegalEntitiesApi.getAllBusinessLinesUnderLegalEntity(id);

            expect(response.businessLines.length).toBe(2);
            expect(response.businessLines[0]).toBeTruthy;
            expect(response.businessLines[0].id).toBe("SE322KH223222F5GV2SQ924F6");
            expect(response.businessLines[0].industryCode).toBe("4531");
            expect(response.businessLines[0].sourceOfFunds?.adyenProcessedFunds).toBe(false);
        });

        it("should support POST /legalEntities/{id}/requestPeriodicReview", async (): Promise<void> => {
            scope.post(`/legalEntities/${id}/requestPeriodicReview`)
                .reply(200);

            await expect(legalEntityManagement.LegalEntitiesApi.requestPeriodicReview(id)).resolves.not.toThrow();
        });

        it("should support POST /legalEntities/{id}/confirmDataReview", async (): Promise<void> => {
            const dataReviewResponse: models.DataReviewConfirmationResponse = {
                dataReviewedAt: "2023-11-13T15:19:02Z"
            };

            scope.post(`/legalEntities/${id}/confirmDataReview`)
                .reply(200, dataReviewResponse);

            const response: models.DataReviewConfirmationResponse = await legalEntityManagement.LegalEntitiesApi.confirmDataReview(id);

            expect(response.dataReviewedAt).toBe("2023-11-13T15:19:02Z");
        });



    });

    describe("Transfer Instruments", (): void => {
        it("should support POST /transferInstruments", async (): Promise<void> => {
            scope.post("/transferInstruments")
                .reply(200, transferInstrument);

            const request: models.TransferInstrumentInfo = {
                type : TransferInstrumentInfo.TypeEnum.BankAccount,
                legalEntityId : id,
                bankAccount : {
                    accountIdentification: {
                        type: models.IbanAccountIdentification.TypeEnum.Iban,
                        iban: "string"
                    },
                    accountType: "string",
                    countryCode: "string",
                }
            };

            const response: models.TransferInstrument = await legalEntityManagement.TransferInstrumentsApi.createTransferInstrument(request);

            expect(response.id).toBe(id);
            expect(response.type).toBe(TransferInstrumentInfo.TypeEnum.BankAccount);
        });

        it("should support GET /transferInstruments/{id}", async (): Promise<void> => {
            scope.get(`/transferInstruments/${id}`)
                .reply(200, transferInstrument);

            const response: models.TransferInstrument = await legalEntityManagement.TransferInstrumentsApi.getTransferInstrument(id);

            expect(response.id).toBe(id);
            expect(response.type).toBe(TransferInstrumentInfo.TypeEnum.BankAccount);
        });

        it("should support PATCH /transferInstruments/{id}", async (): Promise<void> => {
            scope.patch(`/transferInstruments/${id}`)
                .reply(200, transferInstrument);

            const request: models.TransferInstrumentInfo = {
                type : TransferInstrumentInfo.TypeEnum.BankAccount,
                legalEntityId : id,
                bankAccount : {
                    accountIdentification: {
                        type: models.IbanAccountIdentification.TypeEnum.Iban,
                        iban: "string"
                    },
                    accountType: "string",
                    countryCode: "string",
                }
            };

            const response: models.TransferInstrument = await legalEntityManagement.TransferInstrumentsApi.updateTransferInstrument(id, request);

            expect(response.id).toBe(id);
            expect(response.type).toBe(TransferInstrumentInfo.TypeEnum.BankAccount);
        });

        it("should support DELETE /transferInstruments/{id}", async (): Promise<void> => {
            scope.delete(`/transferInstruments/${id}`)
                .reply(200);

            await legalEntityManagement.TransferInstrumentsApi.deleteTransferInstrument(id);

            expect(200);
        });
    });

    describe("Business Lines", (): void => {
        it("should support POST /businessLines", async (): Promise<void> => {
            scope.post("/businessLines")
                .reply(200, businessLine);

            const request: models.BusinessLineInfo = {
                industryCode: id,
                legalEntityId: id,
                service: models.BusinessLine.ServiceEnum.Banking 
            };

            const response: models.BusinessLine = await legalEntityManagement.BusinessLinesApi.createBusinessLine(request);

            expect(response.id).toBe("SE322KH223222F5GV2SQ924F6");
            expect(response.industryCode).toBe("4531");
            expect(response.legalEntityId).toBe("LE00000000000000000000001");
        });

        it("should support GET /businessLines/{id}", async (): Promise<void> => {
            scope.get(`/businessLines/${id}`)
                .reply(200, businessLine);

            const response: models.BusinessLine = await legalEntityManagement.BusinessLinesApi.getBusinessLine(id);

            expect(response.id).toBe("SE322KH223222F5GV2SQ924F6");
            expect(response.service).toBe("banking");
        });

        it("should support PATCH /businessLines/{id}", async (): Promise<void> => {
            scope.patch(`/businessLines/${id}`)
                .reply(200, businessLine);

            const request: models.BusinessLineInfo = {
                industryCode: id,
                service: models.BusinessLine.ServiceEnum.Banking, 
                legalEntityId: id
            };

            const response: models.BusinessLine = await legalEntityManagement.BusinessLinesApi.updateBusinessLine(id, request);

            expect(response.id).toBe("SE322KH223222F5GV2SQ924F6");
            expect(response.industryCode).toBe("4531");
            expect(response.legalEntityId).toBe("LE00000000000000000000001");
        });
    });

    describe("Documents", (): void => {
        it("should support POST /documents", async (): Promise<void> => {
            scope.post("/documents")
                .reply(200, document);

            const request: Document = {
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
                type : Document.TypeEnum.DriversLicense
            };

            const response: models.Document = await legalEntityManagement.DocumentsApi.uploadDocumentForVerificationChecks(request);

            expect(response.id).toBe(id);
            expect(response.type).toBe(Document.TypeEnum.DriversLicense);
            expect(response.owner).toEqual({id : "123456789", type : "passport" });
        });

        it("should support GET /documents/{id}", async (): Promise<void> => {
            scope.get(`/documents/${id}`)
                .reply(200, document);

            const response: models.Document = await legalEntityManagement.DocumentsApi.getDocument(id);

            expect(response.id).toBe(id);
            expect(response.type).toBe(Document.TypeEnum.DriversLicense);
            expect(response.owner).toEqual({id : "123456789", type : "passport" });
        });

        it("should support PATCH /documents/{id}", async (): Promise<void> => {
            scope.patch(`/documents/${id}`)
                .reply(200, document);

            const request: Document = {
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
                type : Document.TypeEnum.DriversLicense
            };

            const response: models.Document = await legalEntityManagement.DocumentsApi.updateDocument(id, request);

            expect(response.id).toBe(id);
            expect(response.type).toBe(Document.TypeEnum.DriversLicense);
            expect(response.owner).toEqual({id : "123456789", type : "passport" });
        });

        it("should support DELETE /documents/{id}", async (): Promise<void> => {
            scope.delete(`/documents/${id}`)
                .reply(200);

            await legalEntityManagement.DocumentsApi.deleteDocument(id);

        });
    });

    describe("OnboardingLinks and Themes", (): void => {
        it("should support POST /onboardingLinks", async (): Promise<void> => {
            scope.post(`/legalEntities/${id}/onboardingLinks`)
                .reply(200, onboardingLink);

            const request: OnboardingLinkInfo = onboardingLinkInfo;

            const response: models.OnboardingLink = await legalEntityManagement.HostedOnboardingApi.getLinkToAdyenhostedOnboardingPage(id, request);

            expect(response.url).toBe("https://example.com/");
        });

        it("should support GET /themes", async (): Promise<void> => {
            scope.get("/themes")
                .reply(200, onboardingThemes);

            const response: models.OnboardingThemes = await legalEntityManagement.HostedOnboardingApi.listHostedOnboardingPageThemes();

            expect(response.themes[0].id).toEqual(id);
        });

        it("should support GET /themes/{id}", async (): Promise<void> => {
            scope.get(`/themes/${id}`)
                .reply(200, onboardingTheme);

            const response: models.OnboardingTheme = await legalEntityManagement.HostedOnboardingApi.getOnboardingLinkTheme(id);
            expect(response.id).toBe(id);
        });
    });
});
