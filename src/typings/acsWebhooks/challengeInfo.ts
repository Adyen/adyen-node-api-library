/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ChallengeInfo {
    /**
    * Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the authentication has been cancelled. Possible values: * **00**: Data element is absent or value has been sent back with the key `challengeCancel`. * **01**: Cardholder selected **Cancel**. * **02**: 3DS Requestor cancelled Authentication. * **03**: Transaction abandoned. * **04**: Transaction timed out at ACS — other timeouts. * **05**: Transaction timed out at ACS — first CReq not received by ACS. * **06**: Transaction error. * **07**: Unknown. * **08**: Transaction time out at SDK.
    */
    "challengeCancel"?: ChallengeInfo.ChallengeCancelEnum;
    /**
    * The flow used in the challenge. Possible values:  * **PWD_OTP_PHONE_FL**: one-time password (OTP) flow via SMS * **PWD_OTP_EMAIL_FL**: one-time password (OTP) flow via email * **OOB_TRIGGER_FL**: out-of-band (OOB) flow
    */
    "flow": ChallengeInfo.FlowEnum;
    /**
    * The last time of interaction with the challenge.
    */
    "lastInteraction": Date;
    /**
    * The last four digits of the phone number used in the challenge.
    */
    "phoneNumber"?: string;
    /**
    * The number of times the one-time password (OTP) was resent during the challenge.
    */
    "resends"?: number;
    /**
    * The number of retries used in the challenge.
    */
    "retries"?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "challengeCancel",
            "baseName": "challengeCancel",
            "type": "ChallengeInfo.ChallengeCancelEnum",
            "format": ""
        },
        {
            "name": "flow",
            "baseName": "flow",
            "type": "ChallengeInfo.FlowEnum",
            "format": ""
        },
        {
            "name": "lastInteraction",
            "baseName": "lastInteraction",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "resends",
            "baseName": "resends",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "retries",
            "baseName": "retries",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return ChallengeInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace ChallengeInfo {
    export enum ChallengeCancelEnum {
        _00 = '00',
        _01 = '01',
        _02 = '02',
        _03 = '03',
        _04 = '04',
        _05 = '05',
        _06 = '06',
        _07 = '07',
        _08 = '08'
    }
    export enum FlowEnum {
        PwdOtpPhoneFl = 'PWD_OTP_PHONE_FL',
        PwdOtpEmailFl = 'PWD_OTP_EMAIL_FL',
        OobTriggerFl = 'OOB_TRIGGER_FL'
    }
}
