import nock from "nock";
import  { createClient } from "../__mocks__/base";
import { DataProtection } from "../services";
import Client from "../client";
import HttpClientException from "../httpClient/httpClientException";
import {SubjectErasureByPspReferenceRequest, SubjectErasureResponse } from "../typings/dataProtection/models";

let client: Client,
    dataProtection: DataProtection,
    scope: nock.Scope;

beforeEach((): void => {
    if(!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    dataProtection = new DataProtection(client);
    scope = nock(`${client.config.dataProtectionEndpoint}/${Client.DATA_PROTECTION_API_VERSION}`);
});

afterEach(() => {
    nock.cleanAll();
});

describe("DataProtection", (): void => {
    test("should make succesful subjectErasure call", async (): Promise<void> => {
        const requestSubjectErasureSuccess: SubjectErasureResponse = {
            "result": SubjectErasureResponse.ResultEnum.Success,
        };
        
        const requestSubjectErasureRequest: SubjectErasureByPspReferenceRequest = {
            "merchantAccount": "MY_MERCHANT_ACCOUNT",
            "forceErasure": true,
            "pspReference": "0123456789"
        };

        scope.post("/requestSubjectErasure")
        .reply(200, requestSubjectErasureSuccess);

        const response: SubjectErasureResponse = await dataProtection.requestSubjectErasure(requestSubjectErasureRequest);
        expect(response.result).toEqual(SubjectErasureResponse.ResultEnum.Success);
    });

    test.each([false, true])("should return correct Exception, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        try {
            scope.post("/requestSubjectErasure")
                .reply(401);

                const requestSubjectErasureRequest: SubjectErasureByPspReferenceRequest = {
                    "merchantAccount": "MY_MERCHANT_ACCOUNT",
                    "forceErasure": true,
                    "pspReference": "0123456789"
                };
            await dataProtection.requestSubjectErasure(requestSubjectErasureRequest);
        } catch (e) {
            expect(e instanceof HttpClientException).toBeTruthy();
        }
    });
});