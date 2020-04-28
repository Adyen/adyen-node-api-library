import Service from "../../../service";
import Resource from "../../resource";
declare type Endpoints = "/getOnboardingUrl";
declare class PlatformsHostedOnboardingPage extends Resource {
    constructor(service: Service, endpoint: Endpoints);
}
export default PlatformsHostedOnboardingPage;
