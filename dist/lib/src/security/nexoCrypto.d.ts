import { MessageHeader, SaleToPOISecuredMessage, SecurityKey } from "../typings/terminal/models";
declare class NexoCrypto {
    static encrypt(messageHeader: MessageHeader, saleToPoiMessageJson: string, securityKey: SecurityKey): SaleToPOISecuredMessage;
    decrypt(saleToPoiSecureMessage: SaleToPOISecuredMessage, securityKey: SecurityKey): string;
    private static validateSecurityKey;
    private static crypt;
    private static hmac;
    private static generateRandomIvNonce;
    private validateHmac;
}
export default NexoCrypto;
