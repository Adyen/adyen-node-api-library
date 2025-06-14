/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Resource } from "./resource";


export class Policy {
    /**
    * An object containing the type and the unique identifier of the user of the component.  For [Onboarding components](https://docs.adyen.com/platforms/onboard-users/components), this is the ID of the legal entity that has a contractual relationship with your platform. For sole proprietorships, use the ID of the legal entity of the individual owner.  For [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards), this is the ID of the account holder that is associated with the balance account shown in the component.
    */
    "resources"?: Set<Resource>;
    /**
    * The name of the role required to use the component.
    */
    "roles"?: Set<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "resources",
            "baseName": "resources",
            "type": "Set<Resource>",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Set<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Policy.attributeTypeMap;
    }

    public constructor() {
    }
}

