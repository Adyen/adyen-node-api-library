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
 * Copyright (c) 2023 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

export const invalidUserCreated422 = {
    "type": "https://docs.adyen.com/errors/validation",
    "title": "Invalid user information provided.",
    "status": 422,
    "requestId": "HC9MZL5D4AAASD82",
    "invalidFields": [
        {
            "InvalidField": {
                "name": "email",
                "message": "The 'email' 'invalidEmail' is invalid."
            }
        }
    ],
    "errorCode": "31_007"
}