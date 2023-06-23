/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AdditionalDataLevel23 {
    /**
    * The customer code, if supplied by a customer.  Encoding: ASCII  Max length: 25 characters  Must not start with a space or be all spaces  Must not be all zeros
    */
    'enhancedSchemeData_customerReference'?: string;
    /**
    * The three-letter [ISO 3166-1 alpha-3 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) for the destination address.  Encoding: ASCII  Fixed length: 3 characters
    */
    'enhancedSchemeData_destinationCountryCode'?: string;
    /**
    * The postal code of the destination address.  Encoding: ASCII  Max length: 10 characters  Must not start with a space
    */
    'enhancedSchemeData_destinationPostalCode'?: string;
    /**
    * Destination state or province code.  Encoding: ASCII  Max length: 3 characters  Must not start with a space
    */
    'enhancedSchemeData_destinationStateProvinceCode'?: string;
    /**
    * The duty amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).  For example, 2000 means USD 20.00.  Encoding: Numeric  Max length: 12 characters
    */
    'enhancedSchemeData_dutyAmount'?: string;
    /**
    * The shipping amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).  For example, 2000 means USD 20.00.  Encoding: Numeric  Max length: 12 characters
    */
    'enhancedSchemeData_freightAmount'?: string;
    /**
    * The [UNSPC commodity code](https://www.unspsc.org/) of the item.  Encoding: ASCII  Max length: 12 characters  Must not start with a space or be all spaces  Must not be all zeros
    */
    'enhancedSchemeData_itemDetailLine_itemNr_commodityCode'?: string;
    /**
    * A description of the item.  Encoding: ASCII  Max length: 26 characters  Must not start with a space or be all spaces  Must not be all zeros
    */
    'enhancedSchemeData_itemDetailLine_itemNr_description'?: string;
    /**
    * The discount amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).  For example, 2000 means USD 20.00.  Encoding: Numeric  Max length: 12 characters
    */
    'enhancedSchemeData_itemDetailLine_itemNr_discountAmount'?: string;
    /**
    * The product code.  Encoding: ASCII.  Max length: 12 characters  Must not start with a space or be all spaces  Must not be all zeros
    */
    'enhancedSchemeData_itemDetailLine_itemNr_productCode'?: string;
    /**
    * The number of items. Must be an integer greater than zero.  Encoding: Numeric  Max length: 12 characters  Must not start with a space or be all spaces  
    */
    'enhancedSchemeData_itemDetailLine_itemNr_quantity'?: string;
    /**
    * The total amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).  For example, 2000 means USD 20.00.  Max length: 12 characters  Must not start with a space or be all spaces  Must not be all zeros
    */
    'enhancedSchemeData_itemDetailLine_itemNr_totalAmount'?: string;
    /**
    * The unit of measurement for an item.  Encoding: ASCII  Max length: 3 characters  Must not start with a space or be all spaces  Must not be all zeros
    */
    'enhancedSchemeData_itemDetailLine_itemNr_unitOfMeasure'?: string;
    /**
    * The unit price in [minor units](https://docs.adyen.com/development-resources/currency-codes).  For example, 2000 means USD 20.00.  Encoding: Numeric  Max length: 12 characters
    */
    'enhancedSchemeData_itemDetailLine_itemNr_unitPrice'?: string;
    /**
    * The order date. * Format: `ddMMyy`  Encoding: ASCII  Max length: 6 characters
    */
    'enhancedSchemeData_orderDate'?: string;
    /**
    * The postal code of the address the item is shipped from.  Encoding: ASCII  Max length: 10 characters  Must not start with a space or be all spaces  Must not be all zeros
    */
    'enhancedSchemeData_shipFromPostalCode'?: string;
    /**
    * The total tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).  For example, 2000 means USD 20.00.  Encoding: Numeric  Max length: 12 characters  
    */
    'enhancedSchemeData_totalTaxAmount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enhancedSchemeData_customerReference",
            "baseName": "enhancedSchemeData.customerReference",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_destinationCountryCode",
            "baseName": "enhancedSchemeData.destinationCountryCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_destinationPostalCode",
            "baseName": "enhancedSchemeData.destinationPostalCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_destinationStateProvinceCode",
            "baseName": "enhancedSchemeData.destinationStateProvinceCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_dutyAmount",
            "baseName": "enhancedSchemeData.dutyAmount",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_freightAmount",
            "baseName": "enhancedSchemeData.freightAmount",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_commodityCode",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].commodityCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_description",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].description",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_discountAmount",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].discountAmount",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_productCode",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].productCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_quantity",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].quantity",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_totalAmount",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].totalAmount",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_unitOfMeasure",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].unitOfMeasure",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_itemDetailLine_itemNr_unitPrice",
            "baseName": "enhancedSchemeData.itemDetailLine[itemNr].unitPrice",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_orderDate",
            "baseName": "enhancedSchemeData.orderDate",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_shipFromPostalCode",
            "baseName": "enhancedSchemeData.shipFromPostalCode",
            "type": "string"
        },
        {
            "name": "enhancedSchemeData_totalTaxAmount",
            "baseName": "enhancedSchemeData.totalTaxAmount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataLevel23.attributeTypeMap;
    }
}

