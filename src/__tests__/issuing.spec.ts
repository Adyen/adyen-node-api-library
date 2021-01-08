/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
import nock from "nock";
import { createClient } from "../__mocks__/base";
import Client from "../client";
import Issuing from "../services/issuing";
import { BalancePlatform } from "../typings/issuing/balancePlatform";
import { PaginatedAccountHoldersResponse } from "../typings/issuing/paginatedAccountHoldersResponse";
import { Phone } from "../typings/issuing/phone";
import { SweepSchedule } from "../typings/issuing/sweepSchedule";


let client: Client;
let issuing: Issuing;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    issuing = new Issuing(client);
    scope = nock(`${client.config.issuingApiEndpoint}/${Client.ISSUING_API_VERSION}`);
});

afterEach((): void => {
    nock.cleanAll();
});

describe("Issuing", function(): void {
    describe("General", function(): void {
        test.each([false, true])("should get balance platform with id. isMock: %p", async function(isMock): Promise<void> {
            !isMock && nock.restore();

            const balancePlatformsResponse: BalancePlatform = {
                id: "ID",
                description: "mocked_description",
                status: "status"
            };

            scope.get("/balancePlatforms/ID")
                .reply(200, balancePlatformsResponse);

            const response = await issuing.balancePlatforms.get({ id: "ID" });

            expect(response).toEqual<BalancePlatform>(balancePlatformsResponse);
        });

        test.each([false, true])("should get account holders from balance platform with id. isMock: %p", async function(isMock): Promise<void> {
            !isMock && nock.restore();

            const balancePlatformsResponse: PaginatedAccountHoldersResponse = {
                accountHolders: [
                    {
                        balancePlatform: "balance_platform_id",
                        contactDetails: {
                            address: {
                                city: "mocked_city",
                                country: "mocked_country",
                                houseNumberOrName: "mocked_number",
                                postalCode: "mocked_postal_code",
                                street: "mocked_street"
                            },
                            email: "mocked_email",
                            phone:{
                                number: "mocked_phone_num",
                                type: Phone.TypeEnum.Mobile
                            }
                        },
                        id: "mocked_id",
                        sweepConfigurations: {
                            id: {
                                schedule: {
                                    type:  SweepSchedule.TypeEnum.Daily
                                }
                            }
                        }
                    }
                ],
                hasNext: false,
                hasPrevious: false
            };

            scope.get("/balancePlatforms/ID/accountHolders?offset=5&limit=20")
                .reply(200, balancePlatformsResponse);

            const response = await issuing.balancePlatforms.accountHolders.get({ id: "ID", offset: "5", limit: "20" });

            expect(response).toEqual<PaginatedAccountHoldersResponse>(balancePlatformsResponse);
        });
    });
});
