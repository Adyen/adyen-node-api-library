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
 * Adyen NodeJS API Library
 * Copyright (c) 2026 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import { CloudDeviceApi } from "./cloudDeviceApi";
import { EncryptedCloudDeviceApi } from "./encryptedCloudDeviceApi";
import { EncryptionCredentialDetails } from "../../security/clouddevice/encryptionCredentialDetails";

import Service from "../../service";
import Client from "../../client";

export { EncryptedCloudDeviceApi } from "./encryptedCloudDeviceApi";

export default class CloudDeviceAPI extends Service {

    public constructor(client: Client) {
        super(client);
    }

    public get CloudDeviceApi() {
        return new CloudDeviceApi(this.client);
    }

    public getEncryptedCloudDeviceApi(encryptionCredentialDetails: EncryptionCredentialDetails) {
        return new EncryptedCloudDeviceApi(this.client, encryptionCredentialDetails);
    }
}
