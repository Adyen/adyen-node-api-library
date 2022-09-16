export const businessLine = {
    "capability": "receivePayments",
    "id": "123456789",
    "industryCode": "123456789",
    "legalEntityId": "123456789",
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
    "id": "123456789",
    "issuerCountry": "string",
    "issuerState": "string",
    "number": "string",
    "owner": {
        "id": "123456789",
        "type": "passport"
    },
    "type": "driversLicense"
};

export const onboardingLink = { "url": "https://your.redirect-url.com" };

export const onboardingThemes = {
    "next": "string",
    "previous": "string",
    "themes": [{
        "createdAt": "2022-10-31T01:30:00.000Z",
        "description": "string",
        "id": "123456789",
        "properties": { "sample": "string" },
        "updatedAt": "2022-10-31T01:30:00.000Z"
    }]
};

export const onboardingTheme = {
    "createdAt": "string",
    "description": "string",
    "id": "123456789",
    "properties": { "sample": "string" },
    "updatedAt": "string"
};

export const legalEntity = {
    "documentDetails": [{
        "active": false,
        "fileName": "string",
        "id": "string"
    }],
    "documents": [{ "id": "string" }],
    "entityAssociations": [{
        "associatorId": "string",
        "entityType": "string",
        "jobTitle": "string",
        "legalEntityId": "string",
        "name": "string",
        "type": "signatory"
    }],
    "id": "123456789",
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
    "reference": "string",
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
    },
    "transferInstruments": [{ "id": "string" }],
    "type": "individual"
};

export const businessLines = {
    "businessLines": [{
        "capability": "receivePayments",
        "id": "123456789",
        "industryCode": "123456789",
        "legalEntityId": "123456789",
        "salesChannels": ["string"],
        "sourceOfFunds": {
            "acquiringBusinessLineId": "string",
            "adyenProcessedFunds": false,
            "description": "string",
            "type": "business"
        },
        "webData": [{ "webAddress": "string" }],
        "webDataExemption": { "reason": "noOnlinePresence" }
    }]
};

export const transferInstrument = {
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
    "documentDetails": [{
        "active": false,
        "fileName": "string",
        "id": "string"
    }],
    "id": "123456789",
    "legalEntityId": "123456789",
    "recurringDetail": {
        "merchantAccount": "string",
        "reference": "string",
        "shopperReference": "string"
    },
    "type": "bankAccount"
};
