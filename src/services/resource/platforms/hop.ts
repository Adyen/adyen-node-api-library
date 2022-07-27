import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

type Endpoints = "/getOnboardingUrl" | "/getPciQuestionnaireUrl";

class PlatformsHostedOnboardingPage extends Resource {
    public constructor(service: Service, endpoint: Endpoints) {
        super(
            service,
            `${service.client.config.marketPayEndpoint}/Hop/${Client.MARKETPAY_HOP_API_VERSION}/${endpoint}`,
        );
    }
}

export default PlatformsHostedOnboardingPage;
