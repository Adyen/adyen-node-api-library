import Service from "../../../service";
import Resource from "../../resource";
declare enum Endpoints {
    getOnboardingUrl = "/getOnboardingUrl"
}
declare class PlatformsHostedOnboardingPage extends Resource {
    constructor(service: Service, endpoint: Endpoints);
}
export default PlatformsHostedOnboardingPage;
