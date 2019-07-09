/**
 * Adyen Payment Service
 * A set of API endpoints that allow you to initiate, settle, and modify payments on the Adyen payments platform. You can use the API to accept card payments (including One-Click and 3D Secure), bank transfers, ewallets, and many other payment methods.  To learn more about the API, visit [Classic integration](https://docs.adyen.com/classic-integration).  ## Authentication To connect to the Payments API, you must use your basic authentication credentials. For this, create your web service user, as described in [How to get the WS user password](https://docs.adyen.com/user-management/how-to-get-the-web-service-ws-user-password). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@Company.YourCompany\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Payments API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://pal-test.adyen.com/pal/servlet/Payment/v46/authorise ```
 *
 * OpenAPI spec version: 46
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { Amount } from './amount';
import { Split } from './split';
import { ThreeDSecureData } from './threeDSecureData';
import {ApplicationInfo} from "../applicationInfo";


export interface ModificationRequest { 
    /**
     * This field contains additional data, which may be required for a particular modification request.  The additionalData object consists of entries, each of which includes the key and value. For more information on possible key-value pairs, refer to the [ModificationRequest.additionalData](https://docs.adyen.com/api-reference/payments-api/modificationrequest/modificationrequest-additionaldata) section.
     */
    additionalData?: any;
    /**
     * The merchant account that is used to process the payment.
     */
    applicationInfo?: ApplicationInfo;
    merchantAccount: string;
    modificationAmount?: Amount;
    mpiData?: ThreeDSecureData;
    /**
     * The original merchant reference to cancel.
     */
    originalMerchantReference?: string;
    /**
     * The original pspReference of the payment to modify. This reference is returned in: * authorisation response * authorisation notification
     */
    originalReference: string;
    /**
     * Optionally, you can specify your reference for the payment modification. This reference is visible in Customer Area and in reports. Maximum length: 80 characters.
     */
    reference?: string;
    /**
     * The details of how the payment should be split when distributing a payment to a Marketpay Marketplace and its Accounts.
     */
    splits?: Split[];
    /**
     * The transaction reference provided by the PED. For point-of-sale integrations only.
     */
    tenderReference?: string;
    /**
     * Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.
     */
    uniqueTerminalId?: string;
}