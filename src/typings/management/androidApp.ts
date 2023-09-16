/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AndroidApp {
    /**
    * The description that was provided when uploading the app. The description is not shown on the terminal.
    */
    'description'?: string;
    /**
    * The error code of the app. It exists if the status is error or invalid.
    */
    'errorCode'?: string;
    /**
    * The unique identifier of the app.
    */
    'id': string;
    /**
    * The app name that is shown on the terminal.
    */
    'label'?: string;
    /**
    * The package name that uniquely identifies the Android app.
    */
    'packageName'?: string;
    /**
    * The status of the app. Possible values:  * `processing`: the app is being signed and converted to a format that the terminal can handle. * `error`: something went wrong. Check that the app matches the [requirements](https://docs.adyen.com/point-of-sale/android-terminals/app-requirements). * `invalid`: there is something wrong with the APK file of the app. * `ready`: the app has been signed and converted. * `archived`: the app is no longer available.
    */
    'status': string;
    /**
    * The version number of the app.
    */
    'versionCode'?: number;
    /**
    * The app version number that is shown on the terminal.
    */
    'versionName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "packageName",
            "baseName": "packageName",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "versionCode",
            "baseName": "versionCode",
            "type": "number"
        },
        {
            "name": "versionName",
            "baseName": "versionName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AndroidApp.attributeTypeMap;
    }
}

