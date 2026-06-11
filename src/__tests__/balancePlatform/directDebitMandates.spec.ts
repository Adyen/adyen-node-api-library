import nock from "nock";
import Client from "../../client";
import { Types } from "../..";
import { BalancePlatformAPI } from "../..";
import { createClient } from "../../__mocks__/base";

let client: Client;
let balancePlatformService: BalancePlatformAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock("https://balanceplatform-api-test.adyen.com/bcl/v2");
    balancePlatformService = new BalancePlatformAPI(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("DirectDebitMandates", (): void => {
    const mandateId = "MNDT7QXPLKT9R333640TX334709E";
    const balanceAccountId = "BA43EKD334339T6N8X655DW77";
    const paymentInstrumentId = "PI43EKK334339T6N8X65688CS";

    const mandateMock = {
        "id": mandateId,
        "type": "bacs",
        "balanceAccountId": balanceAccountId,
        "paymentInstrumentId": paymentInstrumentId,
        "status": "approved",
        "counterparty": {
            "accountHolder": {
                "fullName": "Example Merchant Ltd"
            },
            "accountIdentification": {
                "type": "ukLocal",
                "accountNumber": "12345678",
                "sortCode": "123456"
            }
        },
        "createdAt": "2026-02-23T13:04:15.683Z",
        "updatedAt": "2026-02-23T13:04:15.683Z"
    };

    it("should support GET /mandates/{mandateId}", async (): Promise<void> => {
        scope.get(`/mandates/${mandateId}`)
            .reply(200, mandateMock);

        const response: Types.balancePlatform.Mandate = await balancePlatformService.DirectDebitMandatesApi.getMandateById(mandateId);

        expect(response.id).toBe(mandateId);
        expect(response.type).toBe("bacs");
        expect(response.balanceAccountId).toBe(balanceAccountId);
        expect(response.paymentInstrumentId).toBe(paymentInstrumentId);
        expect(response.status).toBe("approved");
    });

    it("should support GET /mandates", async (): Promise<void> => {
        scope.get(`/mandates?balanceAccountId=${balanceAccountId}`)
            .reply(200, {
                "link": {
                    "self": {
                        "href": "https://balanceplatform-api-test.adyen.com/bcl/v2/mandates"
                    }
                },
                "mandates": [mandateMock]
            });

        const response: Types.balancePlatform.ListMandatesResponse = await balancePlatformService.DirectDebitMandatesApi.getListOfMandates(balanceAccountId);

        expect(response.mandates).toBeDefined();
        expect(response.mandates!.length).toBe(1);
        expect(response.mandates![0].id).toBe(mandateId);
        expect(response.mandates![0].balanceAccountId).toBe(balanceAccountId);
    });

    it("should support GET /mandates with paymentInstrumentId filter", async (): Promise<void> => {
        scope.get(`/mandates?paymentInstrumentId=${paymentInstrumentId}`)
            .reply(200, {
                "link": {
                    "self": {
                        "href": "https://balanceplatform-api-test.adyen.com/bcl/v2/mandates"
                    }
                },
                "mandates": [mandateMock]
            });

        const response: Types.balancePlatform.ListMandatesResponse = await balancePlatformService.DirectDebitMandatesApi.getListOfMandates(undefined, paymentInstrumentId);

        expect(response.mandates).toBeDefined();
        expect(response.mandates![0].paymentInstrumentId).toBe(paymentInstrumentId);
    });

    it("should support POST /mandates/{mandateId}/cancel", async (): Promise<void> => {
        scope.post(`/mandates/${mandateId}/cancel`)
            .reply(204);

        await balancePlatformService.DirectDebitMandatesApi.cancelMandate(mandateId);
    });

    it("should support PATCH /mandates/{mandateId}", async (): Promise<void> => {
        scope.patch(`/mandates/${mandateId}`)
            .reply(204);

        const request: Types.balancePlatform.MandateUpdate = {
            "paymentInstrumentId": paymentInstrumentId
        };

        await balancePlatformService.DirectDebitMandatesApi.updateMandate(mandateId, request);
    });
});
