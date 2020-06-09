"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SponsoredMerchant = void 0;
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
exports.SponsoredMerchant = SponsoredMerchant;
//# sourceMappingURL=sponsoredMerchant.js.map