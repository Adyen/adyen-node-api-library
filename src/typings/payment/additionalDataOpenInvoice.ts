/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AdditionalDataOpenInvoice {
    /**
    * Holds different merchant data points like product, purchase, customer, and so on. It takes data in a Base64 encoded string.  The `merchantData` parameter needs to be added to the `openinvoicedata` signature at the end.  Since the field is optional, if it\'s not included it does not impact computing the merchant signature.  Applies only to Klarna.  You can contact Klarna for the format and structure of the string.
    */
    'openinvoicedata_merchantData'?: string;
    /**
    * The number of invoice lines included in `openinvoicedata`.  There needs to be at least one line, so `numberOfLines` needs to be at least 1.
    */
    'openinvoicedata_numberOfLines'?: string;
    /**
    * First name of the recipient. If the delivery address and the billing address are different, specify the `recipientFirstName` and `recipientLastName` to share the delivery address with Klarna. Otherwise, only the billing address is shared with Klarna.
    */
    'openinvoicedata_recipientFirstName'?: string;
    /**
    * Last name of the recipient. If the delivery address and the billing address are different, specify the `recipientFirstName` and `recipientLastName` to share the delivery address with Klarna. Otherwise, only the billing address is shared with Klarna.
    */
    'openinvoicedata_recipientLastName'?: string;
    /**
    * The three-character ISO currency code.
    */
    'openinvoicedataLine_itemNr_currencyCode'?: string;
    /**
    * A text description of the product the invoice line refers to.
    */
    'openinvoicedataLine_itemNr_description'?: string;
    /**
    * The price for one item in the invoice line, represented in minor units.  The due amount for the item, VAT excluded.
    */
    'openinvoicedataLine_itemNr_itemAmount'?: string;
    /**
    * A unique id for this item. Required for RatePay if the description of each item is not unique.
    */
    'openinvoicedataLine_itemNr_itemId'?: string;
    /**
    * The VAT due for one item in the invoice line, represented in minor units.
    */
    'openinvoicedataLine_itemNr_itemVatAmount'?: string;
    /**
    * The VAT percentage for one item in the invoice line, represented in minor units.  For example, 19% VAT is specified as 1900.
    */
    'openinvoicedataLine_itemNr_itemVatPercentage'?: string;
    /**
    * The number of units purchased of a specific product.
    */
    'openinvoicedataLine_itemNr_numberOfItems'?: string;
    /**
    * Name of the shipping company handling the the return shipment.
    */
    'openinvoicedataLine_itemNr_returnShippingCompany'?: string;
    /**
    * The tracking number for the return of the shipment.
    */
    'openinvoicedataLine_itemNr_returnTrackingNumber'?: string;
    /**
    * URI where the customer can track the return of their shipment.
    */
    'openinvoicedataLine_itemNr_returnTrackingUri'?: string;
    /**
    * Name of the shipping company handling the delivery.
    */
    'openinvoicedataLine_itemNr_shippingCompany'?: string;
    /**
    * Shipping method.
    */
    'openinvoicedataLine_itemNr_shippingMethod'?: string;
    /**
    * The tracking number for the shipment.
    */
    'openinvoicedataLine_itemNr_trackingNumber'?: string;
    /**
    * URI where the customer can track their shipment.
    */
    'openinvoicedataLine_itemNr_trackingUri'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "openinvoicedata_merchantData",
            "baseName": "openinvoicedata.merchantData",
            "type": "string"
        },
        {
            "name": "openinvoicedata_numberOfLines",
            "baseName": "openinvoicedata.numberOfLines",
            "type": "string"
        },
        {
            "name": "openinvoicedata_recipientFirstName",
            "baseName": "openinvoicedata.recipientFirstName",
            "type": "string"
        },
        {
            "name": "openinvoicedata_recipientLastName",
            "baseName": "openinvoicedata.recipientLastName",
            "type": "string"
        },
        {
            "name": "openinvoicedataLine_itemNr_currencyCode",
            "baseName": "openinvoicedataLine[itemNr].currencyCode",
            "type": "string"
        },
        {
            "name": "openinvoicedataLine_itemNr_description",
            "baseName": "openinvoicedataLine[itemNr].description",
            "type": "string"
        },
        {
            "name": "openinvoicedataLine_itemNr_itemAmount",
            "baseName": "openinvoicedataLine[itemNr].itemAmount",
            "type": "string"
        },
        {
            "name": "openinvoicedataLine_itemNr_itemId",
            "baseName": "openinvoicedataLine[itemNr].itemId",
            "type": "string"
        },
        {
            "name": "openinvoicedataLine_itemNr_itemVatAmount",
            "baseName": "openinvoicedataLine[itemNr].itemVatAmount",
            "type": "string"
        },
        {
            "name": "openinvoicedataLine_itemNr_itemVatPercentage",
            "baseName": "openinvoicedataLine[itemNr].itemVatPercentage",
            "type": "string"
        },
        {
            "name": "openinvoicedataLine_itemNr_numberOfItems",
            "baseName": "openinvoicedataLine[itemNr].numberOfItems",
            "type": "string"
        },
        {
            "name": "openinvoicedataLine_itemNr_returnShippingCompany",
            "baseName": "openinvoicedataLine[itemNr].returnShippingCompany",
            "type": "string"
        },
        {
            "name": "openinvoicedataLine_itemNr_returnTrackingNumber",
            "baseName": "openinvoicedataLine[itemNr].returnTrackingNumber",
            "type": "string"
        },
        {
            "name": "openinvoicedataLine_itemNr_returnTrackingUri",
            "baseName": "openinvoicedataLine[itemNr].returnTrackingUri",
            "type": "string"
        },
        {
            "name": "openinvoicedataLine_itemNr_shippingCompany",
            "baseName": "openinvoicedataLine[itemNr].shippingCompany",
            "type": "string"
        },
        {
            "name": "openinvoicedataLine_itemNr_shippingMethod",
            "baseName": "openinvoicedataLine[itemNr].shippingMethod",
            "type": "string"
        },
        {
            "name": "openinvoicedataLine_itemNr_trackingNumber",
            "baseName": "openinvoicedataLine[itemNr].trackingNumber",
            "type": "string"
        },
        {
            "name": "openinvoicedataLine_itemNr_trackingUri",
            "baseName": "openinvoicedataLine[itemNr].trackingUri",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataOpenInvoice.attributeTypeMap;
    }
}

