export class SecurityKey {
    'AdyenCryptoVersion': number;
    'KeyIdentifier': string;
    'KeyVersion': number;
    'Passphrase': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AdyenCryptoVersion",
            "baseName": "AdyenCryptoVersion",
            "type": "number"
        },
        {
            "name": "KeyIdentifier",
            "baseName": "KeyIdentifier",
            "type": "string"
        },
        {
            "name": "KeyVersion",
            "baseName": "KeyVersion",
            "type": "number"
        },
        {
            "name": "Passphrase",
            "baseName": "Passphrase",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SecurityKey.attributeTypeMap;
    }
}

