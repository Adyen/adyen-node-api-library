/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import { CreatePermitRequest } from "../typings/recurring/models";
import { CreatePermitResult } from "../typings/recurring/models";
import { DisablePermitRequest } from "../typings/recurring/models";
import { DisablePermitResult } from "../typings/recurring/models";
import { DisableRequest } from "../typings/recurring/models";
import { DisableResult } from "../typings/recurring/models";
import { NotifyShopperRequest } from "../typings/recurring/models";
import { NotifyShopperResult } from "../typings/recurring/models";
import { RecurringDetailsRequest } from "../typings/recurring/models";
import { RecurringDetailsResult } from "../typings/recurring/models";
import { ScheduleAccountUpdaterRequest } from "../typings/recurring/models";
import { ScheduleAccountUpdaterResult } from "../typings/recurring/models";
import { IRequest } from "../typings/requestOptions";
import Resource from "./resource";
import { ObjectSerializer } from "../typings/recurring/models";

export class RecurringAPI extends Service {
    
    private readonly API_BASEPATH: string = "https://pal-test.adyen.com/pal/servlet/Recurring/v68";
    private baseUrl: string;

    public constructor(client: Client) {
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Create new permits linked to a recurring contract.
    * @param createPermitRequest {@link CreatePermitRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CreatePermitResult }
    */
    public async createPermit(createPermitRequest: CreatePermitRequest, requestOptions?: IRequest.Options): Promise<CreatePermitResult> {
        const endpoint = `${this.baseUrl}/createPermit`;
        const resource = new Resource(this, endpoint);
        const request: CreatePermitRequest = ObjectSerializer.serialize(createPermitRequest, "CreatePermitRequest");
        const response = await getJsonResponse<CreatePermitRequest, CreatePermitResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CreatePermitResult");
    }

    /**
    * @summary Disable stored payment details
    * @param disableRequest {@link DisableRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link DisableResult }
    */
    public async disable(disableRequest: DisableRequest, requestOptions?: IRequest.Options): Promise<DisableResult> {
        const endpoint = `${this.baseUrl}/disable`;
        const resource = new Resource(this, endpoint);
        const request: DisableRequest = ObjectSerializer.serialize(disableRequest, "DisableRequest");
        const response = await getJsonResponse<DisableRequest, DisableResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "DisableResult");
    }

    /**
    * @summary Disable an existing permit.
    * @param disablePermitRequest {@link DisablePermitRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link DisablePermitResult }
    */
    public async disablePermit(disablePermitRequest: DisablePermitRequest, requestOptions?: IRequest.Options): Promise<DisablePermitResult> {
        const endpoint = `${this.baseUrl}/disablePermit`;
        const resource = new Resource(this, endpoint);
        const request: DisablePermitRequest = ObjectSerializer.serialize(disablePermitRequest, "DisablePermitRequest");
        const response = await getJsonResponse<DisablePermitRequest, DisablePermitResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "DisablePermitResult");
    }

    /**
    * @summary Get stored payment details
    * @param recurringDetailsRequest {@link RecurringDetailsRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link RecurringDetailsResult }
    */
    public async listRecurringDetails(recurringDetailsRequest: RecurringDetailsRequest, requestOptions?: IRequest.Options): Promise<RecurringDetailsResult> {
        const endpoint = `${this.baseUrl}/listRecurringDetails`;
        const resource = new Resource(this, endpoint);
        const request: RecurringDetailsRequest = ObjectSerializer.serialize(recurringDetailsRequest, "RecurringDetailsRequest");
        const response = await getJsonResponse<RecurringDetailsRequest, RecurringDetailsResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "RecurringDetailsResult");
    }

    /**
    * @summary Ask issuer to notify the shopper
    * @param notifyShopperRequest {@link NotifyShopperRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link NotifyShopperResult }
    */
    public async notifyShopper(notifyShopperRequest: NotifyShopperRequest, requestOptions?: IRequest.Options): Promise<NotifyShopperResult> {
        const endpoint = `${this.baseUrl}/notifyShopper`;
        const resource = new Resource(this, endpoint);
        const request: NotifyShopperRequest = ObjectSerializer.serialize(notifyShopperRequest, "NotifyShopperRequest");
        const response = await getJsonResponse<NotifyShopperRequest, NotifyShopperResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "NotifyShopperResult");
    }

    /**
    * @summary Schedule running the Account Updater
    * @param scheduleAccountUpdaterRequest {@link ScheduleAccountUpdaterRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ScheduleAccountUpdaterResult }
    */
    public async scheduleAccountUpdater(scheduleAccountUpdaterRequest: ScheduleAccountUpdaterRequest, requestOptions?: IRequest.Options): Promise<ScheduleAccountUpdaterResult> {
        const endpoint = `${this.baseUrl}/scheduleAccountUpdater`;
        const resource = new Resource(this, endpoint);
        const request: ScheduleAccountUpdaterRequest = ObjectSerializer.serialize(scheduleAccountUpdaterRequest, "ScheduleAccountUpdaterRequest");
        const response = await getJsonResponse<ScheduleAccountUpdaterRequest, ScheduleAccountUpdaterResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ScheduleAccountUpdaterResult");
    }
}

export default RecurringAPI;
