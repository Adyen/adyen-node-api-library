/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CapabilityProblem } from './capabilityProblem';
import { DocumentReference } from './documentReference';
import { EntityReference } from './entityReference';
import { Individual } from './individual';
import { LegalEntityAssociation } from './legalEntityAssociation';
import { LegalEntityCapability } from './legalEntityCapability';
import { Organization } from './organization';
import { SoleProprietorship } from './soleProprietorship';
import { TransferInstrumentReference } from './transferInstrumentReference';
import { Trust } from './trust';
import { UnincorporatedPartnership } from './unincorporatedPartnership';
import { VerificationDeadline } from './verificationDeadline';

export class LegalEntity {
    /**
    * Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability.
    */
    'capabilities'?: { [key: string]: LegalEntityCapability; };
    /**
    * List of documents uploaded for the legal entity.
    */
    'documentDetails'?: Array<DocumentReference>;
    /**
    * List of documents uploaded for the legal entity.
    */
    'documents'?: Array<EntityReference>;
    /**
    * List of legal entities associated with the current legal entity. For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.
    */
    'entityAssociations'?: Array<LegalEntityAssociation>;
    /**
    * The unique identifier of the legal entity.
    */
    'id': string;
    'individual'?: Individual;
    'organization'?: Organization;
    /**
    * List of verification errors related to capabilities for the legal entity.
    */
    'problems'?: Array<CapabilityProblem>;
    /**
    * Your reference for the legal entity, maximum 150 characters.
    */
    'reference'?: string;
    'soleProprietorship'?: SoleProprietorship;
    /**
    * List of transfer instruments that the legal entity owns.
    */
    'transferInstruments'?: Array<TransferInstrumentReference>;
    'trust'?: Trust;
    /**
    * The type of legal entity.  Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.
    */
    'type'?: LegalEntity.TypeEnum;
    'unincorporatedPartnership'?: UnincorporatedPartnership;
    /**
    * List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved.
    */
    'verificationDeadlines'?: Array<VerificationDeadline>;
    /**
    * A key-value pair that specifies the [verification process](https://docs.adyen.com/marketplaces-and-platforms/collect-verification-details/) for a legal entity. Set to **upfront** for [upfront verification](https://docs.adyen.com/marketplaces-and-platforms/collect-verification-details#upfront).
    */
    'verificationPlan'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "{ [key: string]: LegalEntityCapability; }"
        },
        {
            "name": "documentDetails",
            "baseName": "documentDetails",
            "type": "Array<DocumentReference>"
        },
        {
            "name": "documents",
            "baseName": "documents",
            "type": "Array<EntityReference>"
        },
        {
            "name": "entityAssociations",
            "baseName": "entityAssociations",
            "type": "Array<LegalEntityAssociation>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "individual",
            "baseName": "individual",
            "type": "Individual"
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "Organization"
        },
        {
            "name": "problems",
            "baseName": "problems",
            "type": "Array<CapabilityProblem>"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "soleProprietorship",
            "baseName": "soleProprietorship",
            "type": "SoleProprietorship"
        },
        {
            "name": "transferInstruments",
            "baseName": "transferInstruments",
            "type": "Array<TransferInstrumentReference>"
        },
        {
            "name": "trust",
            "baseName": "trust",
            "type": "Trust"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LegalEntity.TypeEnum"
        },
        {
            "name": "unincorporatedPartnership",
            "baseName": "unincorporatedPartnership",
            "type": "UnincorporatedPartnership"
        },
        {
            "name": "verificationDeadlines",
            "baseName": "verificationDeadlines",
            "type": "Array<VerificationDeadline>"
        },
        {
            "name": "verificationPlan",
            "baseName": "verificationPlan",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LegalEntity.attributeTypeMap;
    }
}

export namespace LegalEntity {
    export enum TypeEnum {
        Individual = 'individual',
        Organization = 'organization',
        SoleProprietorship = 'soleProprietorship',
        Trust = 'trust',
        UnincorporatedPartnership = 'unincorporatedPartnership'
    }
}
