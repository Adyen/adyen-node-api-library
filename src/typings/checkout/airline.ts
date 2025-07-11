/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Agency } from "./agency";
import { Leg } from "./leg";
import { Passenger } from "./passenger";
import { Ticket } from "./ticket";
import { TravelAgency } from "./travelAgency";


export class Airline {
    "agency"?: Agency | null;
    /**
    * The amount charged for boarding the plane, in [minor units](https://docs.adyen.com/development-resources/currency-codes). * Encoding: Numeric * minLength: 1 character * maxLength: 11 characters
    */
    "boardingFee"?: number;
    /**
    * The [IATA](https://www.iata.org/services/pages/codes.aspx) 3-digit accounting code (PAX) that identifies the carrier. * Format: IATA 3-digit accounting code (PAX) * Example: KLM = 074 * minLength: 3 characters * maxLength: 3 characters * Must not start with a space or be all spaces. * Must not be all zeros.
    */
    "code"?: string;
    /**
    * The [CRS](https://en.wikipedia.org/wiki/Computer_reservation_system) used to make the reservation and purchase the ticket. * Encoding: ASCII * minLength: 4 characters * maxLength: 4 characters
    */
    "computerizedReservationSystem"?: string;
    /**
    * The alphanumeric customer reference number. * Encoding: ASCII * maxLength: 20 characters * If you send more than 20 characters, the customer reference number is truncated * Must not start with a space or be all spaces.
    */
    "customerReferenceNumber"?: string;
    /**
    * The [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX) that identifies the carrier. * Encoding: ASCII * Example: KLM = KL * minLength: 2 characters * maxLength: 2 characters * Must not start with a space or be all spaces.
    */
    "designatorCode"?: string;
    /**
    * A code that identifies the type of item bought. The description of the code can appear on credit card statements. * Encoding: ASCII * Example: Passenger ticket = 01 * minLength: 2 characters * maxLength: 2 characters
    */
    "documentType"?: string;
    /**
    * The flight departure date. Time is optional. * Format for date only: `yyyy-MM-dd` * Format for date and time: `yyyy-MM-ddTHH:mm` * Use local time of departure airport. * minLength: 10 characters * maxLength: 16 characters
    */
    "flightDate"?: Date;
    "legs"?: Array<Leg>;
    /**
    * The passenger\'s name, initials, and title. * Format: last name + first name or initials + title * Example: *FLYER / MARY MS* * minLength: 1 character * maxLength: 20 characters * If you send more than 20 characters, the name is truncated * Must not start with a space or be all spaces. * Must not be all zeros.
    */
    "passengerName": string;
    "passengers"?: Array<Passenger>;
    "ticket"?: Ticket | null;
    "travelAgency"?: TravelAgency | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "agency",
            "baseName": "agency",
            "type": "Agency | null",
            "format": ""
        },
        {
            "name": "boardingFee",
            "baseName": "boardingFee",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "computerizedReservationSystem",
            "baseName": "computerizedReservationSystem",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerReferenceNumber",
            "baseName": "customerReferenceNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "designatorCode",
            "baseName": "designatorCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentType",
            "baseName": "documentType",
            "type": "string",
            "format": ""
        },
        {
            "name": "flightDate",
            "baseName": "flightDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "legs",
            "baseName": "legs",
            "type": "Array<Leg>",
            "format": ""
        },
        {
            "name": "passengerName",
            "baseName": "passengerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "passengers",
            "baseName": "passengers",
            "type": "Array<Passenger>",
            "format": ""
        },
        {
            "name": "ticket",
            "baseName": "ticket",
            "type": "Ticket | null",
            "format": ""
        },
        {
            "name": "travelAgency",
            "baseName": "travelAgency",
            "type": "TravelAgency | null",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Airline.attributeTypeMap;
    }

    public constructor() {
    }
}

