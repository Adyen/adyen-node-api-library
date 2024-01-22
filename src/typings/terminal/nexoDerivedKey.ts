export class NexoDerivedKey {
    'cipherKey'?: any | null;
    'hmacKey'?: any | null;
    'iv'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cipherKey",
            "baseName": "cipherKey",
            "type": "any"
        },
        {
            "name": "hmacKey",
            "baseName": "hmacKey",
            "type": "any"
        },
        {
            "name": "iv",
            "baseName": "iv",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return NexoDerivedKey.attributeTypeMap;
    }
}
