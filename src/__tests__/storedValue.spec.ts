import nock from "nock";
import Client from "../client";
import {createClient} from "../__mocks__/base";
import {StoredValue} from "../services";
import { StoredValueIssueRequest,
    StoredValueIssueResponse,
    StoredValueStatusChangeRequest,
    StoredValueStatusChangeResponse,
    StoredValueLoadRequest,
    StoredValueLoadResponse,
    StoredValueBalanceCheckRequest,
    StoredValueBalanceCheckResponse,
    StoredValueBalanceMergeRequest,
    StoredValueBalanceMergeResponse,
    StoredValueVoidRequest,
    StoredValueVoidResponse 
} from "../typings/storedValue/models";


let client: Client;
let storedValue: StoredValue;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock(`${client.config.storedValueEndpoint}/${Client.STOREDVALUE_API_VERSION}`);
    storedValue = new StoredValue(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("StoredValue", (): void => {
    test("Should issue Givex card", async (): Promise<void> => {
        scope.post("/issue")
            .reply(200, {
                "currentBalance": {
                    "currency": "EUR",
                    "value": 1000
                },
                "pspReference": "851564651069192J",
                "resultCode": "Success",
                "paymentMethod": {
                    "number": "7219627091701347",
                    "securityCode": "0140",
                    "type": "givex"
                }
            });
        const issueRequest: StoredValueIssueRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "store": "YOUR_STORE_ID",
            "paymentMethod": {
                "type": "givex"
            },
            "amount": {
                "currency": "EUR",
                "value": 1000
            },
            "reference": "YOUR_REFERENCE"
        };

        const issueResponse: StoredValueIssueResponse = await storedValue.issue(issueRequest);
        expect(issueResponse.pspReference).toEqual("851564651069192J");

    });

    test("Should issue virtual Fiserv card", async (): Promise<void> => {
        scope.post("/issue")
            .reply(200, {
                "currentBalance": {
                    "currency": "EUR",
                    "value": 1000
                },
                "pspReference": "851564651069192J",
                "resultCode": "Success",
                "paymentMethod": {
                    "number": "7219627091701347",
                    "securityCode": "0140",
                    "type": "givex"
                }
            });
        const issueRequest: StoredValueIssueRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "store": "YOUR_STORE_ID",
            "paymentMethod": {
                "type": "valuelink"
            },
            // "giftCardPromoCode": "1324",
            "reference": "YOUR_REFERENCE"
        };

        const issueResponse: StoredValueIssueResponse = await storedValue.issue(issueRequest);
        expect(issueResponse.pspReference).toEqual("851564651069192J");

    });

    test("Should activate card", async (): Promise<void> => {
        scope.post("/changeStatus")
            .reply(200, {
                "currentBalance": {
                    "currency": "USD",
                    "value": 1000
                },
                "pspReference": "851564652149588K",
                "resultCode": "Success"
            });

        const statusRequest: StoredValueStatusChangeRequest = {
            "status": StoredValueStatusChangeRequest.StatusEnum.Active,
            "amount": {
                "currency": "USD",
                "value": 1000
            },
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "store":"YOUR_STORE_ID",
            "paymentMethod": {
                "type": "svs",
                "number": "6006491286999921374",
                "securityCode": "1111"
            },
            "reference": "YOUR_REFERENCE"
        };

        const changeStatusResponse: StoredValueStatusChangeResponse = await storedValue.changeStatus(statusRequest);
        expect(changeStatusResponse.pspReference).toEqual("851564652149588K");
    });

    test("Should deactivate card", async (): Promise<void> => {
        scope.post("/changeStatus")
            .reply(200, {
                "currentBalance": {
                    "currency": "USD",
                    "value": 1000
                },
                "pspReference": "851564652149588K",
                "resultCode": "Success"
            });

        const statusRequest: StoredValueStatusChangeRequest = {
            "status": StoredValueStatusChangeRequest.StatusEnum.Inactive,
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "store":"YOUR_STORE_ID",
            "paymentMethod": {
                "type": "givex",
            },
            "recurringDetailReference": "7219627091701347",
            "shopperReference": "YOUR_UNIQUE_SHOPPER_ID_P3fW3k9D2tvXFu6l",
            "shopperInteraction": StoredValueStatusChangeRequest.ShopperInteractionEnum.Ecommerce,
            "reference": "YOUR_REFERENCE"
        };

        const changeStatusResponse: StoredValueStatusChangeResponse = await storedValue.changeStatus(statusRequest);
        expect(changeStatusResponse.pspReference).toEqual("851564652149588K");
    });

    test("Should load funds to card", async (): Promise<void> => {
        scope.post("/load")
            .reply(200, {
                "currentBalance": {
                    "currency": "USD",
                    "value": 30000
                },
                "pspReference": "851564654294247B",
                "resultCode": "Success"
            });

        const loadRequest: StoredValueLoadRequest = {
            "amount": {
                "currency": "USD",
                "value": 2000
            },
            "loadType": StoredValueLoadRequest.LoadTypeEnum.MerchandiseReturn,
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "store":"YOUR_STORE_ID",
            "paymentMethod": {
                "type": "svs",
                "number": "6006491286999921374",
                "securityCode": "1111"
            },
            "reference": "YOUR_REFERENCE"
        };

        const loadResponse: StoredValueLoadResponse = await storedValue.load(loadRequest);
        expect(loadResponse.pspReference).toEqual("851564654294247B");
    });

    test("Should check remaining balance of card", async (): Promise<void> => {
        scope.post("/checkBalance")
            .reply(200, {
                "currentBalance": {
                    "currency": "EUR",
                    "value": 5600
                },
                "pspReference": "881564657480267D",
                "resultCode": "Success"
            });

        const checkBalanceRequest: StoredValueBalanceCheckRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "store":"YOUR_STORE_ID",
            "paymentMethod": {
                "type": "svs",
                "number": "603628672882001915092",
                "securityCode": "5754"
            },
            "reference": "YOUR_REFERENCE"
        };

        const checkBalanceResponse: StoredValueBalanceCheckResponse = await storedValue.checkBalance(checkBalanceRequest);
        expect(checkBalanceResponse.pspReference).toEqual("881564657480267D");
    });

    test("Should transfer full value from one card to another", async (): Promise<void> => {
        scope.post("/mergeBalance")
            .reply(200, {
                "currentBalance": {
                    "currency": "EUR",
                    "value": 5600
                },
                "pspReference": "881564657480267D",
                "resultCode": "Success"
            });

        const mergeBalanceRequest: StoredValueBalanceMergeRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "store":"YOUR_STORE_ID",
            "sourcePaymentMethod": {
                "number": "7777182708544835",
                "securityCode": "2329"
            },
            "paymentMethod": {
                "type": "valuelink",
                "number": "8888182708544836",
                "securityCode": "2330"
            },
            "reference": "YOUR_REFERENCE"
        };

        const mergeBalanceResponse: StoredValueBalanceMergeResponse = await storedValue.mergebalance(mergeBalanceRequest);
        expect(mergeBalanceResponse.pspReference).toEqual("881564657480267D");
    });

    test("Should undo transaction on card", async (): Promise<void> => {
        scope.post("/voidTransaction")
            .reply(200, {
                "currentBalance": {
                    "currency": "EUR",
                    "value": 120000
                },
                "pspReference": "851564673300692A",
                "resultCode": "Success"
            });

        const voidTransactionRequest: StoredValueVoidRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "originalReference": "851564654294247B",
            "reference": "YOUR_REFERENCE"
        };

        const voidTransactionResponse: StoredValueVoidResponse = await storedValue.voidTransaction(voidTransactionRequest);
        expect(voidTransactionResponse.pspReference).toEqual("851564673300692A");
    });
});