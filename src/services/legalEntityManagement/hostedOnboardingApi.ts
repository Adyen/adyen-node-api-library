/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { 
    OnboardingLink,
    OnboardingLinkInfo,
    OnboardingTheme,
    OnboardingThemes,
    ObjectSerializer
} from "../../typings/legalEntityManagement/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class HostedOnboardingApi extends Service {

    private readonly API_BASEPATH: string = "https://kyc-test.adyen.com/lem/v3";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get a list of hosted onboarding page themes
    * @param requestOptions {@link IRequest.Options }
    * @return {@link OnboardingThemes }
    */
    public async listHostedOnboardingPageThemes(requestOptions?: IRequest.Options): Promise<OnboardingThemes> {
        const endpoint = `${this.baseUrl}/themes`;
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, OnboardingThemes>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "OnboardingThemes");
    }

    /**
    * @summary Get an onboarding link theme
    * @param id {@link string } The unique identifier of the theme
    * @param requestOptions {@link IRequest.Options }
    * @return {@link OnboardingTheme }
    */
    public async getOnboardingLinkTheme(id: string, requestOptions?: IRequest.Options): Promise<OnboardingTheme> {
        const endpoint = `${this.baseUrl}/themes/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, OnboardingTheme>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "OnboardingTheme");
    }

    /**
    * @summary Get a link to an Adyen-hosted onboarding page
    * @param id {@link string } The unique identifier of the legal entity
    * @param onboardingLinkInfo {@link OnboardingLinkInfo } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link OnboardingLink }
    */
    public async getLinkToAdyenhostedOnboardingPage(id: string, onboardingLinkInfo: OnboardingLinkInfo, requestOptions?: IRequest.Options): Promise<OnboardingLink> {
        const endpoint = `${this.baseUrl}/legalEntities/{id}/onboardingLinks`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const request: OnboardingLinkInfo = ObjectSerializer.serialize(onboardingLinkInfo, "OnboardingLinkInfo");
        const response = await getJsonResponse<OnboardingLinkInfo, OnboardingLink>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "OnboardingLink");
    }
}
