import Service from "../service";
import Client from "../client";

import MeApi from "./management/meApi";

class Management extends Service {
    public constructor(client: Client) {
        super(client);
    }

    public get Me() {
        const meApi = new MeApi(this.client);
        return meApi.Me;
    } 
}

export default Management;
