import nock from "nock";
import  { createClient } from "../__mocks__/base";
import { DataProtection } from "../services";
import Client from "../client";
import HttpClientException from "../httpClient/httpClientException";
import { dataProtection } from "../typings";

let client: Client,
    dataProtectionService: DataProtection,
    scope: nock.Scope;

beforeEach((): void => {
    if(!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    dataProtectionService = new DataProtection(client);
    scope = nock(`${client.config.dataProtectionEndpoint}/${Client.DATA_PROTECTION_API_VERSION}`);
});

afterEach(() => {
    nock.cleanAll();
});

describe("DataProtection", (): void => {
    test("should make succesful subjectErasure call", async (): Promise<void> => {
        const requestSubjectErasureSuccess: dataProtection.SubjectErasureResponse = {
            "result": dataProtection.SubjectErasureResponse.ResultEnum.Success,
        };
        
        const requestSubjectErasureRequest: dataProtection.SubjectErasureByPspReferenceRequest = {
            "merchantAccount": "MY_MERCHANT_ACCOUNT",
            "forceErasure": true,
            "pspReference": "0123456789"
        };

        scope.post("/requestSubjectErasure")
        .reply(200, requestSubjectErasureSuccess);

        const response: dataProtection.SubjectErasureResponse = await dataProtectionService.requestSubjectErasure(requestSubjectErasureRequest);
        expect(response.result).toEqual(dataProtection.SubjectErasureResponse.ResultEnum.Success);
    });

    test("should return correct Exception", async (): Promise<void> => {
        try {
            scope.post("/requestSubjectErasure")
                .reply(401);

                const requestSubjectErasureRequest: dataProtection.SubjectErasureByPspReferenceRequest = {
                    "merchantAccount": "MY_MERCHANT_ACCOUNT",
                    "forceErasure": true,
                    "pspReference": "0123456789"
                };
            await dataProtectionService.requestSubjectErasure(requestSubjectErasureRequest);
        } catch (e) {
            expect(e instanceof HttpClientException).toBeTruthy();
        }
    });
});