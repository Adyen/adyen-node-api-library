import { MessageHeader, SaleToPoiSecuredMessage, SecurityKey } from "../typings/terminal";
declare class NexoCrypto {
    static encrypt(messageHeader: MessageHeader, saleToPoiMessageJson: string, securityKey: SecurityKey): SaleToPoiSecuredMessage;
    decrypt(saleToPoiSecureMessage: SaleToPoiSecuredMessage, securityKey: SecurityKey): string;
    private static validateSecurityKey;
    private static crypt;
    private static hmac;
    private static generateRandomIvNonce;
    private validateHmac;
}
export default NexoCrypto;
