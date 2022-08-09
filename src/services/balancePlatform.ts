import Service from "../service";
import Client from "../client";
import AccountHolders from "./balancePlaftform/accountHolders";
import BalanceAccounts from "./balancePlaftform/balanceAccounts";
import General from "./balancePlaftform/general";
import PaymentInstruments from "./balancePlaftform/paymentInstruments";
import PaymentInstrumentGroups from "./balancePlaftform/paymentInstrumentGroups";
import TransactionRules from "./balancePlaftform/transactionRules";

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

    public get PaymentInstruments() {
        return new PaymentInstruments(this.client);
    } 

    public get PaymentInstrumentGroups() {
        return new PaymentInstrumentGroups(this.client);
    } 

    public get TransactionRules() {
        return new TransactionRules(this.client);
    } 
}

export default BalancePlatform;
