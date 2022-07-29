import Service from "../service";
import Client from "../client";
import AccountHolders from "./balancePlaftform/accountHolders";

class BalancePlatform extends Service {
    public constructor(client: Client) {
        super(client);
    }

    public get AccountHolders() {
        return new AccountHolders(this.client);
    } 
}

export default BalancePlatform;
