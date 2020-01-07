/**
 * Adyen Payment API
 * A set of API endpoints that allow you to initiate, settle, and modify payments on the Adyen payments platform. You can use the API to accept card payments (including One-Click and 3D Secure), bank transfers, ewallets, and many other payment methods.  To learn more about the API, visit [Classic integration](https://docs.adyen.com/classic-integration).  ## Authentication To connect to the Payments API, you must use your basic authentication credentials. For this, create your web service user, as described in [How to get the WS user password](https://docs.adyen.com/user-management/how-to-get-the-web-service-ws-user-password). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@Company.YourCompany\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Payments API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://pal-test.adyen.com/pal/servlet/Payment/v51/authorise ```
 *
 * The version of the OpenAPI document: 51
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ThreeDS2Result {
    /**
    * The `authenticationValue` value as defined in the 3D Secure 2 specification.
    */
    'authenticationValue'?: string;
    /**
    * The algorithm used by the ACS to calculate the authentication value, only for CartesBancaires integrations.
    */
    'cavvAlgorithm'?: string;
    /**
    * The `dsTransID` value as defined in the 3D Secure 2 specification.
    */
    'dsTransID'?: string;
    /**
    * The `eci` value as defined in the 3D Secure 2 specification.
    */
    'eci'?: string;
    /**
    * The `messageVersion` value as defined in the 3D Secure 2 specification.
    */
    'messageVersion'?: string;
    /**
    * The `threeDSServerTransID` value as defined in the 3D Secure 2 specification.
    */
    'threeDSServerTransID'?: string;
    /**
    * The `timestamp` value of the 3D Secure 2 authentication.
    */
    'timestamp'?: string;
    /**
    * The `transStatus` value as defined in the 3D Secure 2 specification.
    */
    'transStatus'?: string;
    /**
    * The `transStatusReason` value as defined in the 3D Secure 2 specification.
    */
    'transStatusReason'?: string;
    /**
    * The `whiteListStatus` value as defined in the 3D Secure 2 specification.
    */
    'whiteListStatus'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authenticationValue",
            "baseName": "authenticationValue",
            "type": "string"
        },
        {
            "name": "cavvAlgorithm",
            "baseName": "cavvAlgorithm",
            "type": "string"
        },
        {
            "name": "dsTransID",
            "baseName": "dsTransID",
            "type": "string"
        },
        {
            "name": "eci",
            "baseName": "eci",
            "type": "string"
        },
        {
            "name": "messageVersion",
            "baseName": "messageVersion",
            "type": "string"
        },
        {
            "name": "threeDSServerTransID",
            "baseName": "threeDSServerTransID",
            "type": "string"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string"
        },
        {
            "name": "transStatus",
            "baseName": "transStatus",
            "type": "string"
        },
        {
            "name": "transStatusReason",
            "baseName": "transStatusReason",
            "type": "string"
        },
        {
            "name": "whiteListStatus",
            "baseName": "whiteListStatus",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDS2Result.attributeTypeMap;
    }
}

