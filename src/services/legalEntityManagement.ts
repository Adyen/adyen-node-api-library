import Service from "../service";
import Client from "../client";
import LegalEntities from "./legalEntityManagement/legalEntities";
import OnboardingPage from "./legalEntityManagement/hostedOnboardingPage";
import TransferInstruments from "./legalEntityManagement/transferInstruments";
import BusinessLineService from "./legalEntityManagement/businessLineService";
import Documents from "./legalEntityManagement/documents";

class LegalEntityManagement extends Service {
    public constructor(client: Client) {
        super(client);
    }

    public get LegalEntities() {
        return new LegalEntities(this.client);
    }

    public get TransferInstruments() {
        return new TransferInstruments(this.client);
    }

    public get BusinessLineService() {
        return new BusinessLineService(this.client);
    }

    public get Documents() {
        return new Documents(this.client);
    }

    public get HostedOnboardingPage() {
        return new OnboardingPage(this.client);
    }

}

export default LegalEntityManagement;