import nock from "nock";
import Client from "../client";
import {createClient} from "../__mocks__/base";
import {StoredValueAPI} from "../services";
import { storedValue } from "../typings";


let client: Client;
let storedValueService: StoredValueAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock("https://pal-test.adyen.com/pal/servlet/StoredValue/v46");
    storedValueService = new StoredValueAPI(client);
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
        const issueRequest: storedValue.StoredValueIssueRequest = {
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

        const issueResponse: storedValue.StoredValueIssueResponse = await storedValueService.StoredValueApi.issue(issueRequest);
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
        const issueRequest: storedValue.StoredValueIssueRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "store": "YOUR_STORE_ID",
            "paymentMethod": {
                "type": "valuelink"
            },
            // "giftCardPromoCode": "1324",
            "reference": "YOUR_REFERENCE"
        };

        const issueResponse: storedValue.StoredValueIssueResponse = await storedValueService.StoredValueApi.issue(issueRequest);
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

        const statusRequest: storedValue.StoredValueStatusChangeRequest = {
            "status": storedValue.StoredValueStatusChangeRequest.StatusEnum.Active,
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

        const changeStatusResponse: storedValue.StoredValueStatusChangeResponse = await storedValueService.StoredValueApi.changeStatus(statusRequest);
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

        const statusRequest: storedValue.StoredValueStatusChangeRequest = {
            "status": storedValue.StoredValueStatusChangeRequest.StatusEnum.Inactive,
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "store":"YOUR_STORE_ID",
            "paymentMethod": {
                "type": "givex",
            },
            "recurringDetailReference": "7219627091701347",
            "shopperReference": "YOUR_UNIQUE_SHOPPER_ID_P3fW3k9D2tvXFu6l",
            "shopperInteraction": storedValue.StoredValueStatusChangeRequest.ShopperInteractionEnum.Ecommerce,
            "reference": "YOUR_REFERENCE"
        };

        const changeStatusResponse: storedValue.StoredValueStatusChangeResponse = await storedValueService.StoredValueApi.changeStatus(statusRequest);
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

        const loadRequest: storedValue.StoredValueLoadRequest = {
            "amount": {
                "currency": "USD",
                "value": 2000
            },
            "loadType": storedValue.StoredValueLoadRequest.LoadTypeEnum.MerchandiseReturn,
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "store":"YOUR_STORE_ID",
            "paymentMethod": {
                "type": "svs",
                "number": "6006491286999921374",
                "securityCode": "1111"
            },
            "reference": "YOUR_REFERENCE"
        };

        const loadResponse: storedValue.StoredValueLoadResponse = await storedValueService.StoredValueApi.load(loadRequest);
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

        const checkBalanceRequest: storedValue.StoredValueBalanceCheckRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "store":"YOUR_STORE_ID",
            "paymentMethod": {
                "type": "svs",
                "number": "603628672882001915092",
                "securityCode": "5754"
            },
            "reference": "YOUR_REFERENCE"
        };

        const checkBalanceResponse: storedValue.StoredValueBalanceCheckResponse = await storedValueService.StoredValueApi.checkBalance(checkBalanceRequest);
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

        const mergeBalanceRequest: storedValue.StoredValueBalanceMergeRequest = {
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

        const mergeBalanceResponse: storedValue.StoredValueBalanceMergeResponse = await storedValueService.StoredValueApi.mergeBalance(mergeBalanceRequest);
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

        const voidTransactionRequest: storedValue.StoredValueVoidRequest = {
            "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
            "originalReference": "851564654294247B",
            "reference": "YOUR_REFERENCE"
        };

        const voidTransactionResponse: storedValue.StoredValueVoidResponse = await storedValueService.StoredValueApi.voidTransaction(voidTransactionRequest);
        expect(voidTransactionResponse.pspReference).toEqual("851564673300692A");
    });
});