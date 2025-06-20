/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CheckoutAwaitAction } from "./checkoutAwaitAction";
import { CheckoutBankTransferAction } from "./checkoutBankTransferAction";
import { CheckoutDelegatedAuthenticationAction } from "./checkoutDelegatedAuthenticationAction";
import { CheckoutNativeRedirectAction } from "./checkoutNativeRedirectAction";
import { CheckoutQrCodeAction } from "./checkoutQrCodeAction";
import { CheckoutRedirectAction } from "./checkoutRedirectAction";
import { CheckoutSDKAction } from "./checkoutSDKAction";
import { CheckoutThreeDS2Action } from "./checkoutThreeDS2Action";
import { CheckoutVoucherAction } from "./checkoutVoucherAction";

/**
* Action to be taken for completing the payment.
*/


/**
 * @type PaymentResponseAction
 * Type
 * @export
 */
export type PaymentResponseAction = CheckoutAwaitAction | CheckoutBankTransferAction | CheckoutDelegatedAuthenticationAction | CheckoutNativeRedirectAction | CheckoutQrCodeAction | CheckoutRedirectAction | CheckoutSDKAction | CheckoutThreeDS2Action | CheckoutVoucherAction;

/**
* @type PaymentResponseActionClass
    * Action to be taken for completing the payment.
* @export
*/
export class PaymentResponseActionClass {
    
    static readonly discriminator: string = "type";

    static readonly mapping: {[index: string]: string} | undefined = undefined;
}
