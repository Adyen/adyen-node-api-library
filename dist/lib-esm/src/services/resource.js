/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
var Resource = /** @class */ (function () {
    function Resource(service, endpoint) {
        this.service = service;
        this.endpoint = endpoint;
    }
    Resource.prototype.request = function (json, requestOptions) {
        var clientInterface = this.service.client.httpClient;
        var config = this.service.client.config;
        return clientInterface.request(this.endpoint, json, config, this.service.apiKeyRequired, requestOptions);
    };
    return Resource;
}());
export default Resource;
//# sourceMappingURL=resource.js.map