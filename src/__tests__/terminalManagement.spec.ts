import nock from "nock";
import Client from "../client";
import { createClient } from "../__mocks__/base";
import TerminalManagementAPI from "../services/terminalManagementApi";
import { terminalManagement } from "../typings";

let client: Client;
let terminalManagementService: TerminalManagementAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock(`${client.config.terminalManagementEndpoint}/${Client.TERMINAL_MANAGEMENT_API_VERSION}`);
    terminalManagementService = new TerminalManagementAPI(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("POS Terminal Management API", (): void => {
    test("Should support /assignTerminals", async (): Promise<void> => {
        scope.post("/assignTerminals")
            .reply(200, {
                "results": {
                    "P400Plus-275479597": "RemoveConfigScheduled"
                }
            });
        const request: terminalManagement.AssignTerminalsRequest = {
            "companyAccount": "YOUR_COMPANY_ACCOUNT",
            "terminals": [
                "P400Plus-275479597"
            ]
        };

        const response: terminalManagement.AssignTerminalsResponse = await terminalManagementService.assignTerminals(request);

        expect(response.results["P400Plus-275479597"]).toEqual("RemoveConfigScheduled");
    });

    test("Should support /findTerminal", async (): Promise<void> => {
        scope.post("/findTerminal")
            .reply(200, {
                "companyAccount": "YOUR_COMPANY_ACCOUNT",
                "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
                "merchantInventory": false,
                "terminal": "P400Plus-275479597"
            });
        const request: terminalManagement.FindTerminalRequest = {
            "terminal": "P400Plus-275479597"
        };

        const response: terminalManagement.FindTerminalResponse = await terminalManagementService.findTerminal(request);

        expect(response.terminal).toEqual("P400Plus-275479597");
    });

    test("Should support /getStoresUnderAccount", async (): Promise<void> => {
        scope.post("/getStoresUnderAccount")
            .reply(200, {
                "stores": [
                    {
                        "store": "YOUR_STORE",
                        "description": "YOUR_STORE",
                        "address": {
                            "city": "The City",
                            "countryCode": "NL",
                            "postalCode": "1234",
                            "streetAddress": "The Street"
                        },
                        "status": "Active",
                        "merchantAccountCode": "YOUR_MERCHANT_ACCOUNT"
                    }
                ]
            });
        const request: terminalManagement.GetStoresUnderAccountRequest = {
            "companyAccount": "YOUR_COMPANY_ACCOUNT"
        };

        const response: terminalManagement.GetStoresUnderAccountResponse = await terminalManagementService.getStoresUnderAccount(request);

        expect(response.stores).toHaveLength(1);
        expect(response.stores![0].status).toEqual("Active");
        expect(response.stores![0].address?.countryCode).toEqual("NL");
    });

    test("Should support /getTerminalDetails", async (): Promise<void> => {
        scope.post("/getTerminalDetails")
            .reply(200, {
                "companyAccount": "YOUR_COMPANY_ACCOUNT",
                "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
                "merchantInventory": false,
                "terminal": "P400Plus-275479597",
                "deviceModel": "P400Plus",
                "serialNumber": "275-479-597",
                "permanentTerminalId": "75479597",
                "terminalStatus": "ReAssignToInventoryPending",
                "firmwareVersion": "Verifone_VOS 1.57.6",
                "country": "NETHERLANDS",
                "dhcpEnabled": false
            });
        const request: terminalManagement.GetTerminalDetailsRequest = {
            "terminal": "P400Plus-275479597"
        };

        const response: terminalManagement.GetTerminalDetailsResponse = await terminalManagementService.getTerminalDetails(request);

        expect(response.deviceModel).toBe("P400Plus");
    });


    test("Should support /getTerminalsUnderAccount", async (): Promise<void> => {
        scope.post("/getTerminalsUnderAccount")
            .reply(200, {
                "companyAccount": "YOUR_COMPANY_ACCOUNT",
                "merchantAccounts": [
                    {
                        "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
                        "inStoreTerminals": [
                            "P400Plus-275479597"
                        ],
                        "stores": [
                            {
                                "store": "YOUR_STORE",
                                "inStoreTerminals": [
                                    "M400-401972715"
                                ]
                            }
                        ]
                    }
                ]
            });
        const request: terminalManagement.GetTerminalsUnderAccountRequest = {
            "companyAccount": "YOUR_COMPANY_ACCOUNT"
        };

        const response: terminalManagement.GetTerminalsUnderAccountResponse = await terminalManagementService.getTerminalsUnderAccount(request);

        expect(response.merchantAccounts).toHaveLength(1);
        expect(response.merchantAccounts![0].stores).toHaveLength(1);
        expect(response.merchantAccounts![0].stores![0].inStoreTerminals).toEqual(["M400-401972715"]);
    });
});