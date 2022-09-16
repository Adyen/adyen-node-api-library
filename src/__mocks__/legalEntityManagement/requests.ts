export const businessLineInfo = {
    "capability": "issueBankAccount",
    "industryCode": "55",
    "webData": [
        {
            "webAddress": "https://www.adyen.com"
        }
    ],
    "legalEntityId": "LE322KT223222D5FJ7THR293F",
    "sourceOfFunds": {
        "type": "business",
        "adyenProcessedFunds": "false",
        "description": "Funds from my flower shop business"
    }
};

export const businessLineInfoUpdate = {
    "capability": "string",
    "industryCode": "string",
    "legalEntityId": "string",
    "salesChannels": ["string"],
    "sourceOfFunds": {
        "acquiringBusinessLineId": "string",
        "adyenProcessedFunds": false,
        "description": "string",
        "type": "business"
    },
    "webData": [{ "webAddress": "string" }],
    "webDataExemption": { "reason": "noOnlinePresence" }
};

export const document = {
    "attachment": {
        "content": "string",
        "contentType": "string",
        "filename": "string",
        "pageName": "string",
        "pageType": "string"
    },
    "attachments": [{
        "content": "string",
        "contentType": "string",
        "filename": "string",
        "pageName": "string",
        "pageType": "string"
    }],
    "description": "string",
    "expiryDate": "string",
    "fileName": "string",
    "id": "string",
    "issuerCountry": "string",
    "issuerState": "string",
    "number": "string",
    "owner": {
        "id": "string",
        "type": "string"
    },
    "type": "bankStatement"
};

export const onboardingLinkInfo = {
    "locale": "string",
    "redirectUrl": "string",
    "themeId": "string"
};

export const legalEntityInfo = {
    "type": "individual",
    "individual": {
        "residentialAddress": {
            "city": "San Francisco",
            "country": "US",
            "postalCode": "94107",
            "street": "Brannan Street 274",
            "stateOrProvince": "CA"
        },
        "phone": {
            "countryCode": "US",
            "number": "5551231234",
            "type": "mobile"
        },
        "name": {
            "firstName": "Simone",
            "lastName": "Hopper"
        },
        "birthData": {
            "dateOfBirth": "1981-12-01"
        },
        "email": "s.hopper@example.com"
    }
};

export const genericEntityInfo = {
    "entityAssociations": [{
        "associatorId": "string",
        "entityType": "string",
        "jobTitle": "string",
        "legalEntityId": "string",
        "name": "string",
        "type": "signatory"
    }],
    "individual": {
        "birthData": { "dateOfBirth": "string" },
        "email": "string",
        "identificationData": {
            "expiryDate": "string",
            "issuerCountry": "string",
            "issuerState": "string",
            "nationalIdExempt": false,
            "number": "string",
            "type": "bankStatement"
        },
        "name": {
            "firstName": "string",
            "infix": "string",
            "lastName": "string"
        },
        "nationality": "string",
        "phone": {
            "number": "string",
            "type": "string"
        },
        "residentialAddress": {
            "city": "string",
            "country": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string",
            "street2": "string"
        },
        "taxInformation": [{
            "country": "string",
            "number": "string",
            "type": "string"
        }],
        "webData": { "webAddress": "string" }
    },
    "organization": {
        "description": "string",
        "doingBusinessAs": "string",
        "email": "string",
        "legalName": "string",
        "phone": {
            "number": "string",
            "type": "string"
        },
        "principalPlaceOfBusiness": {
            "city": "string",
            "country": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string",
            "street2": "string"
        },
        "registeredAddress": {
            "city": "string",
            "country": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string",
            "street2": "string"
        },
        "registrationNumber": "string",
        "stockData": {
            "marketIdentifier": "string",
            "stockNumber": "string",
            "tickerSymbol": "string"
        },
        "taxInformation": [{
            "country": "string",
            "number": "string",
            "type": "string"
        }],
        "taxReportingClassification": {
            "businessType": "other",
            "financialInstitutionNumber": "string",
            "mainSourceOfIncome": "businessOperation",
            "type": "nonFinancialNonReportable"
        },
        "type": "associationIncorporated",
        "vatAbsenceReason": "industryExemption",
        "vatNumber": "string",
        "webData": { "webAddress": "string" }
    },
    "soleProprietorship": {
        "countryOfGoverningLaw": "string",
        "doingBusinessAs": "string",
        "name": "string",
        "principalPlaceOfBusiness": {
            "city": "string",
            "country": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string",
            "street2": "string"
        },
        "registeredAddress": {
            "city": "string",
            "country": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string",
            "street2": "string"
        },
        "registrationNumber": "string",
        "vatAbsenceReason": "industryExemption",
        "vatNumber": "string"
    }
};

export const transferInstrumentInfo = {
    "bankAccount": {
        "accountNumber": "string",
        "accountType": "string",
        "bankBicSwift": "string",
        "bankCity": "string",
        "bankCode": "string",
        "bankName": "string",
        "branchCode": "string",
        "checkCode": "string",
        "countryCode": "string",
        "currencyCode": "string",
        "iban": "string"
    },
    "legalEntityId": "string",
    "recurringDetail": {
        "merchantAccount": "string",
        "reference": "string",
        "shopperReference": "string"
    },
    "type": "bankAccount"
};
