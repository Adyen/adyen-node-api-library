import nock from "nock";
import  { createClient } from "../__mocks__/base";
import {DisputesAPI} from "../services";
import Client from "../client";
import { AcceptDisputeRequest } from "../typings/disputes/acceptDisputeRequest";
import { AcceptDisputeResponse } from "../typings/disputes/acceptDisputeResponse";

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

        const response: AcceptDisputeResponse = await disputesService.acceptDispute(request);
        expect(response.disputeServiceResult.success).toEqual(true);
    });
})
