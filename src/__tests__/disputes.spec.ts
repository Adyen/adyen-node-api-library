import nock from "nock";
import  { createClient } from "../__mocks__/base";
import {DisputesAPI} from "../services";
import Client from "../client";
import { AcceptDisputeRequest } from "../typings/disputes/acceptDisputeRequest";
import { AcceptDisputeResponse } from "../typings/disputes/acceptDisputeResponse";
import { DefendDisputeRequest } from "../typings/disputes/defendDisputeRequest";
import { DefendDisputeResponse } from "../typings/disputes/defendDisputeResponse";
import { DeleteDefenseDocumentRequest } from "../typings/disputes/deleteDefenseDocumentRequest";
import { DeleteDefenseDocumentResponse } from "../typings/disputes/deleteDefenseDocumentResponse";
import { DefenseReasonsRequest } from "../typings/disputes/defenseReasonsRequest";
import { DefenseReasonsResponse } from "../typings/disputes/defenseReasonsResponse";
import { SupplyDefenseDocumentRequest } from "../typings/disputes/supplyDefenseDocumentRequest";
import { SupplyDefenseDocumentResponse } from "../typings/disputes/supplyDefenseDocumentResponse";

let client: Client,
    disputesService: DisputesAPI,
    scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    disputesService = new DisputesAPI(client);
    scope = nock("https://ca-test.adyen.com/ca/services/DisputeService/v30");
});

afterEach(() => {
    nock.cleanAll();
});

describe("Disputes", (): void => {
    test("Should Accept Dispute", async (): Promise<void> => {
        const expected = {
            "disputeServiceResult": {
                "success": true
            }
        };
        const request: AcceptDisputeRequest = new AcceptDisputeRequest;

        scope.post("/acceptDispute")
            .reply(200, expected);

        const response: AcceptDisputeResponse = await disputesService.DisputesApi.acceptDispute(request);
        expect(response.disputeServiceResult.success).toEqual(true);
    });

    test("Should Defend Dispute", async (): Promise<void> => {
        const expected = {
            "disputeServiceResult": {
                "success": true
            }
        };
        const request: DefendDisputeRequest = new DefendDisputeRequest;

        scope.post("/defendDispute")
            .reply(200, expected);

        const response: DefendDisputeResponse = await disputesService.DisputesApi.defendDispute(request);
        expect(response.disputeServiceResult.success).toEqual(true);
    });

    test("Should delete Dispute defense document", async (): Promise<void> => {
        const expected = {
            "disputeServiceResult": {
                "success": true
            }
        };
        const request: DeleteDefenseDocumentRequest = new DeleteDefenseDocumentRequest;

        scope.post("/deleteDisputeDefenseDocument")
            .reply(200, expected);

        const response: DeleteDefenseDocumentResponse = await disputesService.DisputesApi.deleteDisputeDefenseDocument(request);
        expect(response.disputeServiceResult.success).toEqual(true);
    });

    test("Should download Dispute defense document", async (): Promise<void> => {
        const expected = {
            "disputeServiceResult": {
                "success": true
            }
        };
        const request: DeleteDefenseDocumentRequest = new DeleteDefenseDocumentRequest;

        scope.post("/deleteDisputeDefenseDocument")
            .reply(200, expected);

        const response: DeleteDefenseDocumentResponse = await disputesService.DisputesApi.deleteDisputeDefenseDocument(request);
        expect(response.disputeServiceResult.success).toEqual(true);
    });

    test("Should retrieve defense reasons", async (): Promise<void> => {
        const expected = {
            "defenseReasons": [
              {
                "defenseDocumentTypes": [
                  {
                    "available": false,
                    "defenseDocumentTypeCode": "TIDorInvoice",
                    "requirementLevel": "Optional"
                  },
                  {
                    "available": false,
                    "defenseDocumentTypeCode": "GoodsNotReturned",
                    "requirementLevel": "Required"
                  }
                ],
                "defenseReasonCode": "GoodsNotReturned",
                "satisfied": false
              },
              {
                "defenseDocumentTypes": [
                  {
                    "available": false,
                    "defenseDocumentTypeCode": "TIDorInvoice",
                    "requirementLevel": "Optional"
                  },
                  {
                    "available": false,
                    "defenseDocumentTypeCode": "GoodsRepairedOrReplaced",
                    "requirementLevel": "Required"
                  }
                ],
                "defenseReasonCode": "GoodsRepairedOrReplaced",
                "satisfied": false
              },
              {
                "defenseDocumentTypes": [
                  {
                    "available": false,
                    "defenseDocumentTypeCode": "GoodsWereAsDescribed",
                    "requirementLevel": "Required"
                  },
                  {
                    "available": false,
                    "defenseDocumentTypeCode": "TIDorInvoice",
                    "requirementLevel": "Required"
                  }
                ],
                "defenseReasonCode": "GoodsWereAsDescribed",
                "satisfied": false
              },
              {
                "defenseDocumentTypes": [
                  {
                    "available": false,
                    "defenseDocumentTypeCode": "TIDorInvoice",
                    "requirementLevel": "Optional"
                  },
                  {
                    "available": false,
                    "defenseDocumentTypeCode": "DefenseMaterial",
                    "requirementLevel": "Required"
                  }
                ],
                "defenseReasonCode": "SupplyDefenseMaterial",
                "satisfied": false
              }
            ],
            "disputeServiceResult": {
              "success": true
            }
          };
        const request: DefenseReasonsRequest = new DefenseReasonsRequest;

        scope.post("/retrieveApplicableDefenseReasons")
            .reply(200, expected);

        const response: DefenseReasonsResponse = await disputesService.DisputesApi.retrieveApplicableDefenseReasons(request);
        expect(response.disputeServiceResult.success).toEqual(true);
        expect(response.defenseReasons?.length).toEqual(4);
    });

    test("Should supply Dispute defense document", async (): Promise<void> => {
        const expected = {
            "disputeServiceResult": {
                "success": true
            }
        };
        const request: SupplyDefenseDocumentRequest = new SupplyDefenseDocumentRequest;

        scope.post("/supplyDefenseDocument")
            .reply(200, expected);

        const response: SupplyDefenseDocumentResponse = await disputesService.DisputesApi.supplyDefenseDocument(request);
        expect(response.disputeServiceResult.success).toEqual(true);
    });
});
