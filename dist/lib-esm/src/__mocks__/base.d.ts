import Client from "../client";
import { TerminalApiRequest, TransactionIdentification } from "../typings/terminal/models";
export declare const createClient: (apiKey?: string | undefined) => Client;
export declare const createBasicAuthClient: () => Client;
export declare const createTerminalAPIPaymentRequest: () => TerminalApiRequest;
export declare const createTerminalAPIRefundRequest: (transactionIdentification: TransactionIdentification) => TerminalApiRequest;
