var SponsoredMerchant = (function () {
    function SponsoredMerchant() {
    }
    SponsoredMerchant.getAttributeTypeMap = function () {
        return SponsoredMerchant.attributeTypeMap;
    };
    SponsoredMerchant.discriminator = undefined;
    SponsoredMerchant.attributeTypeMap = [
        {
            "name": "merchantAddress",
            "baseName": "MerchantAddress",
            "type": "string"
        },
        {
            "name": "merchantCategoryCode",
            "baseName": "MerchantCategoryCode",
            "type": "string"
        },
        {
            "name": "merchantCountry",
            "baseName": "MerchantCountry",
            "type": "string"
        },
        {
            "name": "merchantName",
            "baseName": "MerchantName",
            "type": "string"
        },
        {
            "name": "registrationID",
            "baseName": "RegistrationID",
            "type": "string"
        }
    ];
    return SponsoredMerchant;
}());
export { SponsoredMerchant };
//# sourceMappingURL=sponsoredMerchant.js.map