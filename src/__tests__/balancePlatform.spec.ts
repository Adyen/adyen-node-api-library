import nock from "nock";
import Client from "../client";
import {createClient} from "../__mocks__/base";
import BalancePlatform from "../services/balancePlatform";
import { AccountHolder } from "../typings/balancePlatform/models";

let client: Client;
let balancePlatform: BalancePlatform;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock(`${client.config.balancePlatformEndpoint}/${Client.BALANCE_PLATFORM_API_VERSION}`);
    balancePlatform = new BalancePlatform(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Balance Platform", (): void => {
    describe("AccountHolders", (): void => {
        it('should support /accountHolders/{id}', async () => {
            scope.get("/accountHolders/123")
                .reply(200, {
                    'foo': 'bar'
                });

            const response: AccountHolder = await balancePlatform.AccountHolders.retrieve("123");
            
            expect(response).toBeTruthy();
        });
    });
});