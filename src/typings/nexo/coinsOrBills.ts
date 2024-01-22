/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


/**
* Indicates the remaining number of coins or bills of a given value in a cash handling device. When the cash handling machine does not have any more coins or bills of a certain value, the number must be equal to 0. Number of coins or bills of a given value.
*/
export class CoinsOrBills {
    /**
    * Value of a coin or bill.
    */
    'UnitValue': number;
    /**
    * Number of elements.
    */
    'Number': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "UnitValue",
            "baseName": "UnitValue",
            "type": "number"
        },
        {
            "name": "Number",
            "baseName": "Number",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CoinsOrBills.attributeTypeMap;
    }
}
