import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import LegalEntityManagementResource from "../resource/legalEntityManagementResource";
import {OnboardingLinkInfo} from "../../typings/legalEntityManagement/onboardingLinkInfo";
import {OnboardingLink} from "../../typings/legalEntityManagement/onboardingLink";
import {ObjectSerializer, OnboardingTheme, OnboardingThemes} from "../../typings/legalEntityManagement/models";

class HostedOnboardingPage extends Service {
    public async create(id: string, request: OnboardingLinkInfo): Promise<OnboardingLink> {
        const resource = new LegalEntityManagementResource(this, `/legalEntities/${id}/onboardingLinks`);
        const response = await getJsonResponse<OnboardingLinkInfo, OnboardingLink>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "OnboardingLink");
    }

    public async listThemes(): Promise<OnboardingThemes> {
        const resource = new LegalEntityManagementResource(this, "/themes");
        const response = await getJsonResponse<string, OnboardingThemes>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "OnboardingThemes");
    }

    public async retrieveTheme(id: string): Promise<OnboardingTheme> {
        const resource = new LegalEntityManagementResource(this, `/themes/${id}`);
        const response = await getJsonResponse<string, OnboardingTheme>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "OnboardingTheme");
    }
}

export default HostedOnboardingPage;