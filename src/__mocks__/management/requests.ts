export const createMerchantRequest = {
    "companyId": "YOUR_COMPANY_ACCOUNT",
    "legalEntityId": "YOUR_LEGAL_ENTITY_ID",
    "businessLineId": "YOUR_BUSINESS_LINE_ID",
    "description": "YOUR_DESCRIPTION",
    "reference": "YOUR_OWN_REFERENCE"
};

export const allowedOrigin = {
    "_links": { "self": { "href": "string" } },
    "domain": "string",
    "id": "string"
};

export const createMerchantApiCredentialRequest = {
    "roles": [
        "Checkout webservice role"
    ],
    "allowedOrigins": [
        "https://www.mystore.com"
    ]
};

export const updateMerchantApiCredentialRequest = {
    "active": false,
    "allowedOrigins": ["string"],
    "description": "string",
    "roles": ["string"]
};

export const paymentMethodSetupInfo = {
    "type": "visa",
    "currencies": [
        "USD"
    ],
    "countries": [
        "US"
    ]
};

export const updatePaymentMethodInfo = {
    "countries": ["string"],
    "currencies": ["string"],
    "enabled": false
};

export const payoutSettingsRequest = {
    "enabled": false,
    "enabledFromDate": "string",
    "transferInstrumentId": "string"
};

export const updatePayoutSettingsRequest = { "enabled": false };

export const shippingLocation = {
    "name": "YOUR_MERCHANT_ACCOUNT Barcelona depot",
    "address": {
        "companyName": "YOUR_COMPANY",
        "streetAddress": "El quinto pino 42",
        "postalCode": "08012",
        "city": "Barcelona",
        "stateOrProvince": "",
        "country": "ES"
    },
    "contact": {
        "firstName": "Rita",
        "lastName": "Perengano",
        "phoneNumber": "+34 93 1234567",
        "email": "Rita.Perengano@company.com"
    }
};

export const terminalOrderRequest = {
    "shippingLocation": "S2-73536B20665526704F30792642212044452F714622375D477270",
    "items": [
        {
            "id": "TBOX-V400m-684-EU",
            "name": "V400m Package",
            "quantity": 1
        },
        {
            "id": "PART-287001-EU",
            "name": "Bluetooth Charging Base - V400m",
            "quantity": 2
        },
        {
            "id": "PART-620222-EU",
            "name": "Receipt Roll",
            "quantity": 20
        }
    ]
};

export const logo = {
    "data": ""
};

export const terminalSettings = {
    "wifiProfiles": {
        "profiles": [
            {
                "authType": "wpa-eap",
                "autoWifi": false,
                "bssType": "infra",
                "channel": 0,
                "defaultProfile": true,
                "eap": "peap",
                "eapCaCert": {
                    "data": "MD1rKS05M2JqRVFNQ...RTtLH1tLWo=",
                    "name": "eap-peap-ca.pem"
                },
                "eapIdentity": "admin",
                "eapIntermediateCert": {
                    "data": "PD3tUS1CRDdJTiGDR...EFoLS0tLQg=",
                    "name": "eap-peap-client.pem"
                },
                "eapPwd": "EAP_PEAP_PASSWORD",
                "hiddenSsid": false,
                "name": "Profile-eap-peap-1",
                "ssid": "your-network",
                "wsec": "ccmp"
            },
            {
                "authType": "wpa-psk",
                "autoWifi": false,
                "bssType": "infra",
                "channel": 0,
                "defaultProfile": false,
                "hiddenSsid": false,
                "name": "Profile-guest-wifi",
                "psk": "WIFI_PASSWORD",
                "ssid": "your-network",
                "wsec": "ccmp"
            }
        ],
        "settings": {
            "band": "2.4GHz",
            "roaming": true,
            "timeout": 5
        }
    }
};

export const createMerchantUserRequest = {
    "name": {
        "firstName": "John",
        "lastName": "Smith"
    },
    "username": "johnsmith",
    "email": "john.smith@example.com",
    "timeZoneCode": "Europe/Amsterdam",
    "roles": [
        "Merchant standard role"
    ],
    "associatedMerchantAccounts": [
        "YOUR_MERCHANT_ACCOUNT"
    ]
};

export const updateMerchantUserRequest = {
    "accountGroups": ["string"],
    "active": false,
    "email": "string",
    "name": {
        "firstName": "string",
        "lastName": "string"
    },
    "roles": ["string"],
    "timeZoneCode": "string"
};

export const createMerchantWebhookRequest = {
    "acceptsExpiredCertificate": false,
    "acceptsSelfSignedCertificate": false,
    "acceptsUntrustedRootCertificate": false,
    "active": false,
    "additionalSettings": {
        "includeEventCodes": ["string"],
        "properties": { "sample": false }
    },
    "communicationFormat": "HTTP",
    "description": "string",
    "networkType": "LOCAL",
    "password": "string",
    "populateSoapActionHeader": false,
    "sslVersion": "HTTP",
    "type": "string",
    "url": "string",
    "username": "string"
};

export const updateMerchantWebhookRequest = {
    "acceptsExpiredCertificate": false,
    "acceptsSelfSignedCertificate": false,
    "acceptsUntrustedRootCertificate": false,
    "active": false,
    "additionalSettings": {
        "includeEventCodes": ["string"],
        "properties": { "sample": false }
    },
    "communicationFormat": "HTTP",
    "description": "string",
    "networkType": "LOCAL",
    "password": "string",
    "populateSoapActionHeader": false,
    "sslVersion": "HTTP",
    "url": "string",
    "username": "string"
};

export const testWebhookRequest = {
    "notification": {
        "amount": {
            "currency": "string",
            "value": 0
        },
        "eventCode": "string",
        "eventDate": "string",
        "merchantReference": "string",
        "paymentMethod": "string",
        "reason": "string",
        "success": false
    },
    "types": ["string"]
};
