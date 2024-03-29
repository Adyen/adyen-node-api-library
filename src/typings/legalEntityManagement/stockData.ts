/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class StockData {
    /**
    * The four-digit [Market Identifier Code](https://en.wikipedia.org/wiki/Market_Identifier_Code) of the stock market where the organization\'s stocks are traded.
    */
    'marketIdentifier'?: string;
    /**
    * The 12-digit International Securities Identification Number (ISIN) of the company, without dashes (-).
    */
    'stockNumber'?: string;
    /**
    * The stock ticker symbol.
    */
    'tickerSymbol'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "marketIdentifier",
            "baseName": "marketIdentifier",
            "type": "string"
        },
        {
            "name": "stockNumber",
            "baseName": "stockNumber",
            "type": "string"
        },
        {
            "name": "tickerSymbol",
            "baseName": "tickerSymbol",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StockData.attributeTypeMap;
    }
}

