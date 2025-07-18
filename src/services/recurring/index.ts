/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { RecurringApi } from "./recurringApi";

import Service from "../../service";
import Client from "../../client";

export default class RecurringAPI extends Service {
    
    public constructor(client: Client) {
        super(client);
    }

    public get RecurringApi() {
        return new RecurringApi(this.client);
    }
}
