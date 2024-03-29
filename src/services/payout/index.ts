/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { InitializationApi } from "./initializationApi";
import { InstantPayoutsApi } from "./instantPayoutsApi";
import { ReviewingApi } from "./reviewingApi";

import Service from "../../service";
import Client from "../../client";

export default class PayoutAPI extends Service {
    
    public constructor(client: Client) {
        super(client);
    }

    public get InitializationApi() {
        return new InitializationApi(this.client);
    }

    public get InstantPayoutsApi() {
        return new InstantPayoutsApi(this.client);
    }

    public get ReviewingApi() {
        return new ReviewingApi(this.client);
    }
}
