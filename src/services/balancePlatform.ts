import Service from "../service";
import Client from "../client";
import AccountHolders from "./balancePlaftform/accountHolders";
import BalanceAccounts from "./balancePlaftform/balanceAccounts";
import General from "./balancePlaftform/general";

class BalancePlatform extends Service {
    public constructor(client: Client) {
        super(client);
    }

    public get General() {
        return new General(this.client);
    } 

    public get AccountHolders() {
        return new AccountHolders(this.client);
    } 

    public get BalanceAccounts() {
        return new BalanceAccounts(this.client);
    } 
}

export default BalancePlatform;
