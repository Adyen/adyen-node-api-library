export const listMerchantResponse = {
    "_links": {
        "first": {
            "href": "https://management-test.adyen.com/v1/merchants?pageNumber=1&pageSize=10"
        },
        "last": {
            "href": "https://management-test.adyen.com/v1/merchants?pageNumber=3&pageSize=10"
        },
        "next": {
            "href": "https://management-test.adyen.com/v1/merchants?pageNumber=2&pageSize=10"
        },
        "self": {
            "href": "https://management-test.adyen.com/v1/merchants?pageNumber=1&pageSize=10"
        }
    },
    "itemsTotal": 23,
    "pagesTotal": 3,
    "data": [
        {
            "id": "YOUR_MERCHANT_ACCOUNT_1",
            "name": "YOUR_MERCHANT_NAME_1",
            "captureDelay": "immediate",
            "defaultShopperInteraction": "Ecommerce",
            "status": "Active",
            "shopWebAddress": "YOUR_SHOP_URL_1",
            "merchantCity": "Amsterdam",
            "primarySettlementCurrency": "EUR",
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_1"
                },
                "apiCredentials": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_1/apiCredentials"
                },
                "users": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_1/users"
                },
                "webhooks": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_1/webhooks"
                }
            }
        },
        {
            "id": "YOUR_MERCHANT_ACCOUNT_2",
            "name": "YOUR_MERCHANT_NAME_2",
            "captureDelay": "immediate",
            "defaultShopperInteraction": "POS",
            "status": "Active",
            "shopWebAddress": "YOUR_SHOP_URL_2",
            "merchantCity": "",
            "primarySettlementCurrency": "EUR",
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_2"
                },
                "apiCredentials": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_2/apiCredentials"
                },
                "users": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_2/users"
                },
                "webhooks": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_2/webhooks"
                }
            }
        },
        {
            "id": "YOUR_MERCHANT_ACCOUNT_3",
            "status": "YOUR_MERCHANT_NAME_3",
            "merchantCity": "Amsterdam",
            "primarySettlementCurrency": "EUR",
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_3"
                },
                "apiCredentials": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_3/apiCredentials"
                },
                "users": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_3/users"
                },
                "webhooks": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_3/webhooks"
                }
            }
        },
        {
            "id": "YOUR_MERCHANT_ACCOUNT_4",
            "name": "YOUR_MERCHANT_NAME_4",
            "captureDelay": "immediate",
            "defaultShopperInteraction": "Ecommerce",
            "status": "Active",
            "shopWebAddress": "YOUR_SHOP_URL_4",
            "merchantCity": "Sao Paulo",
            "primarySettlementCurrency": "BRL",
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_4"
                },
                "apiCredentials": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_4/apiCredentials"
                },
                "users": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_4/users"
                },
                "webhooks": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_4/webhooks"
                }
            }
        },
        {
            "id": "YOUR_MERCHANT_ACCOUNT_5",
            "name": "YOUR_MERCHANT_NAME_5",
            "captureDelay": "3",
            "defaultShopperInteraction": "Ecommerce",
            "status": "Active",
            "shopWebAddress": "YOUR_SHOP_URL_5",
            "primarySettlementCurrency": "EUR",
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_5"
                },
                "apiCredentials": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_5/apiCredentials"
                },
                "users": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_5/users"
                },
                "webhooks": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_5/webhooks"
                }
            }
        },
        {
            "id": "YOUR_MERCHANT_ACCOUNT_6",
            "name": "YOUR_MERCHANT_NAME_6",
            "captureDelay": "immediate",
            "defaultShopperInteraction": "Ecommerce",
            "status": "Active",
            "shopWebAddress": "YOUR_SHOP_URL_6",
            "merchantCity": "Zagreb",
            "primarySettlementCurrency": "BRL",
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_NAME_6"
                },
                "apiCredentials": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_NAME_6/apiCredentials"
                },
                "users": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_NAME_6/users"
                },
                "webhooks": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_NAME_6/webhooks"
                }
            }
        },
        {
            "id": "YOUR_MERCHANT_ACCOUNT_7",
            "name": "YOUR_MERCHANT_NAME_7",
            "captureDelay": "manual",
            "defaultShopperInteraction": "Moto",
            "status": "Active",
            "shopWebAddress": "YOUR_SHOP_URL_7",
            "merchantCity": "Amsterdam",
            "primarySettlementCurrency": "EUR",
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_7"
                },
                "apiCredentials": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_7/apiCredentials"
                },
                "users": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_7/users"
                },
                "webhooks": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_7/webhooks"
                }
            }
        },
        {
            "id": "YOUR_MERCHANT_ACCOUNT_8",
            "name": "YOUR_MERCHANT_NAME_8",
            "captureDelay": "immediate",
            "defaultShopperInteraction": "Ecommerce",
            "status": "Active",
            "shopWebAddress": "YOUR_SHOP_URL_8",
            "merchantCity": "Amsterdam",
            "primarySettlementCurrency": "EUR",
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_8"
                },
                "apiCredentials": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_8/apiCredentials"
                },
                "users": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_8/users"
                },
                "webhooks": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_8/webhooks"
                }
            }
        },
        {
            "id": "YOUR_MERCHANT_ACCOUNT_9",
            "name": "YOUR_MERCHANT_NAME_9",
            "captureDelay": "3",
            "defaultShopperInteraction": "Ecommerce",
            "status": "Active",
            "shopWebAddress": "YOUR_SHOP_URL_9",
            "merchantCity": "",
            "primarySettlementCurrency": "EUR",
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_9"
                },
                "apiCredentials": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_9/apiCredentials"
                },
                "users": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_9/users"
                },
                "webhooks": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_9/webhooks"
                }
            }
        },
        {
            "id": "YOUR_MERCHANT_ACCOUNT_10",
            "name": "YOUR_MERCHANT_NAME_10",
            "captureDelay": "manual",
            "defaultShopperInteraction": "Ecommerce",
            "status": "Active",
            "shopWebAddress": "YOUR_SHOP_URL_10",
            "merchantCity": "Paris",
            "primarySettlementCurrency": "EUR",
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_10"
                },
                "apiCredentials": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_10/apiCredentials"
                },
                "users": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_10/users"
                },
                "webhooks": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT_10/webhooks"
                }
            }
        }
    ]
};

export const createMerchantResponse = {
    "companyId": "YOUR_COMPANY_ACCOUNT",
    "legalEntityId": "YOUR_LEGAL_ENTITY_ID",
    "businessLineId": "YOUR_BUSINESS_LINE_ID",
    "description": "YOUR_DESCRIPTION",
    "reference": "YOUR_OWN_REFERENCE",
    "id": "YOUR_OWN_REFERENCE"
};

export const merchant = {
    "id": "YOUR_MERCHANT_ACCOUNT",
    "name": "YOUR_MERCHANT_NAME",
    "captureDelay": "manual",
    "defaultShopperInteraction": "Ecommerce",
    "status": "Active",
    "shopWebAddress": "YOUR_SHOP_URL",
    "merchantCity": "Amsterdam",
    "primarySettlementCurrency": "EUR",
    "_links": {
        "self": {
            "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
        },
        "apiCredentials": {
            "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials"
        },
        "users": {
            "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/users"
        },
        "webhooks": {
            "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/webhooks"
        }
    }
};

export const requestActivationResponse = {
    "companyId": "string",
    "merchantId": "string"
};

export const allowedOriginsResponse = {
    "data": [{
        "_links": { "self": { "href": "string" } },
        "domain": "string",
        "id": "string"
    }]
};

export const allowedOrigin = {
    "_links": { "self": { "href": "string" } },
    "domain": "string",
    "id": "string"
};

export const listMerchantApiCredentialsResponse = {
    "_links": {
        "first": {
            "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials?pageNumber=1&pageSize=10"
        },
        "last": {
            "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials?pageNumber=2&pageSize=10"
        },
        "next": {
            "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials?pageNumber=2&pageSize=10"
        },
        "self": {
            "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials?pageNumber=1&pageSize=10"
        }
    },
    "itemsTotal": 11,
    "pagesTotal": 2,
    "data": [
        {
            "id": "YOUR_API_CREDENTIAL_1",
            "username": "YOUR_USERNAME_1",
            "allowedIpAddresses": [],
            "roles": [
                "Merchant Report Download role"
            ],
            "active": true,
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_CREDENTIAL_1"
                },
                "allowedOrigins": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_CREDENTIAL_1/allowedOrigins"
                },
                "generateApiKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_CREDENTIAL_1/generateApiKey"
                },
                "generateClientKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_CREDENTIAL_1/generateClientKey"
                },
                "merchant": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
                }
            }
        },
        {
            "id": "YOUR_API_CREDENTIAL_2",
            "username": "YOUR_USERNAME_2",
            "allowedIpAddresses": [],
            "roles": [
                "Merchant Rss feed role"
            ],
            "active": true,
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_2"
                },
                "allowedOrigins": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_2/allowedOrigins"
                },
                "generateApiKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_2/generateApiKey"
                },
                "generateClientKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_2/generateClientKey"
                },
                "merchant": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
                }
            }
        },
        {
            "id": "YOUR_API_CREDENTIAL_3",
            "username": "YOUR_USERNAME_3",
            "clientKey": "YOUR_CLIENT_KEY_3",
            "allowedIpAddresses": [],
            "roles": [
                "Merchant iDeal-API Webservice role",
                "Management API - Accounts read",
                "Management API - API credentials read and write",
                "Management API \u2014 Payment methods read",
                "Merchant PAL Donation role",
                "Merchant PAL Charity role",
                "Checkout encrypted cardholder data",
                "Checkout webservice role",
                "Store payout detail and submit payout - withdrawal",
                "Management API - Accounts read and write",
                "Management API - Webhooks read",
                "Merchant Payout role",
                "API tokenise payment details",
                "General API Payments role",
                "API Supply MPI data with Payments",
                "API Authorise Referred Payments",
                "API PCI Payments role",
                "CSC Tokenization Webservice role",
                "Management API - Stores read",
                "API Payment RefundWithData",
                "API Clientside Encryption Payments role",
                "API to retrieve authentication data",
                "Management API - Stores read and write",
                "Management API - Webhooks read and write",
                "Mastercard inControl service",
                "Merchant Recurring role",
                "Management API - Payout Account Settings Read",
                "API surcharge cost estimation and regulatory information",
                "Store payout detail",
                "Merchant PAL Webservice role"
            ],
            "active": true,
            "allowedOrigins": [
                {
                    "id": "YOUR_ALLOWED_ORIGIN_1",
                    "domain": "YOUR_DOMAIN_1",
                    "_links": {
                        "self": {
                            "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_3/allowedOrigins/YOUR_ALLOWED_ORIGIN_1"
                        }
                    }
                },
                {
                    "id": "YOUR_ALLOWED_ORIGIN_2",
                    "domain": "YOUR_DOMAIN_2",
                    "_links": {
                        "self": {
                            "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_3/allowedOrigins/YOUR_ALLOWED_ORIGIN_2"
                        }
                    }
                }
            ],
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_3"
                },
                "allowedOrigins": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_3/allowedOrigins"
                },
                "generateApiKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_3/generateApiKey"
                },
                "generateClientKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_3/generateClientKey"
                },
                "merchant": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
                }
            }
        },
        {
            "id": "YOUR_API_CREDENTIAL_4",
            "username": "YOUR_USERNAME_4",
            "clientKey": "YOUR_CLIENT_KEY_4",
            "allowedIpAddresses": [],
            "roles": [
                "API Clientside Encryption Payments role",
                "API tokenise payment details",
                "General API Payments role",
                "Checkout encrypted cardholder data",
                "Merchant Recurring role",
                "API PCI Payments role",
                "CSC Tokenization Webservice role",
                "Checkout webservice role",
                "ThreeDSecure WebService Role",
                "Merchant PAL Webservice role"
            ],
            "active": true,
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_4"
                },
                "allowedOrigins": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_4/allowedOrigins"
                },
                "generateApiKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_4/generateApiKey"
                },
                "generateClientKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_4/generateClientKey"
                },
                "merchant": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
                }
            }
        },
        {
            "id": "YOUR_API_CREDENTIAL_5",
            "username": "YOUR_USERNAME_5",
            "clientKey": "YOUR_CLIENT_KEY_5",
            "allowedIpAddresses": [],
            "roles": [
                "Merchant iDeal-API Webservice role",
                "General API Payments role",
                "Checkout encrypted cardholder data",
                "Merchant Recurring role",
                "Checkout webservice role",
                "Merchant PAL Webservice role"
            ],
            "active": true,
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_5"
                },
                "allowedOrigins": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_5/allowedOrigins"
                },
                "generateApiKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_5/generateApiKey"
                },
                "generateClientKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_5/generateClientKey"
                },
                "merchant": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
                }
            }
        },
        {
            "id": "YOUR_API_CREDENTIAL_6",
            "username": "YOUR_USERNAME_6",
            "allowedIpAddresses": [],
            "roles": [
                "Checkout encrypted cardholder data",
                "Merchant Recurring role",
                "API PCI Payments role",
                "Checkout webservice role",
                "Merchant PAL Webservice role"
            ],
            "active": true,
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_6"
                },
                "allowedOrigins": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_6/allowedOrigins"
                },
                "generateApiKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_6/generateApiKey"
                },
                "generateClientKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_6/generateClientKey"
                },
                "merchant": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
                }
            }
        },
        {
            "id": "YOUR_API_CREDENTIAL_7",
            "username": "YOUR_USERNAME_7",
            "allowedIpAddresses": [],
            "roles": [
                "Checkout encrypted cardholder data",
                "Checkout webservice role",
                "Merchant PAL Webservice role"
            ],
            "active": true,
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_7"
                },
                "allowedOrigins": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_7/allowedOrigins"
                },
                "generateApiKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_7/generateApiKey"
                },
                "generateClientKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_7/generateClientKey"
                },
                "merchant": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
                }
            }
        },
        {
            "id": "YOUR_API_CREDENTIAL_8",
            "username": "YOUR_USERNAME_8",
            "clientKey": "YOUR_CLIENT_KEY_8",
            "allowedIpAddresses": [],
            "roles": [
                "Checkout encrypted cardholder data",
                "Merchant Recurring role",
                "Checkout webservice role",
                "Merchant PAL Webservice role"
            ],
            "active": true,
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_8"
                },
                "allowedOrigins": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_8/allowedOrigins"
                },
                "generateApiKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_8/generateApiKey"
                },
                "generateClientKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_8/generateClientKey"
                },
                "merchant": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
                }
            }
        },
        {
            "id": "YOUR_API_CREDENTIAL_9",
            "username": "YOUR_USERNAME_9",
            "clientKey": "YOUR_CLIENT_KEY_9",
            "allowedIpAddresses": [],
            "roles": [
                "Checkout encrypted cardholder data",
                "Merchant Recurring role",
                "API PCI Payments role",
                "Checkout webservice role",
                "Merchant PAL Webservice role"
            ],
            "active": true,
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_9"
                },
                "allowedOrigins": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_9/allowedOrigins"
                },
                "generateApiKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_9/generateApiKey"
                },
                "generateClientKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_9/generateClientKey"
                },
                "merchant": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
                }
            }
        },
        {
            "id": "YOUR_API_CREDENTIAL_10",
            "username": "YOUR_USERNAME_10",
            "clientKey": "YOUR_CLIENT_KEY_10",
            "allowedIpAddresses": [],
            "roles": [
                "Checkout encrypted cardholder data",
                "Merchant Recurring role",
                "Checkout webservice role",
                "Merchant PAL Webservice role"
            ],
            "active": true,
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_10"
                },
                "allowedOrigins": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_10/allowedOrigins"
                },
                "generateApiKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_10/generateApiKey"
                },
                "generateClientKey": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL_10/generateClientKey"
                },
                "merchant": {
                    "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
                }
            }
        }
    ]
};

export const createApiCredentialResponse = {
    "id": "YOUR_API_CREDENTIAL",
    "username": "YOUR_USERNAME",
    "clientKey": "YOUR_CLIENT_KEY",
    "allowedIpAddresses": [],
    "roles": [
        "Checkout webservice role"
    ],
    "active": true,
    "allowedOrigins": [
        {
            "id": "YOUR_ALLOWED_ORIGIN",
            "domain": "https://www.mystore.com",
            "_links": {
                "self": {
                    "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL/allowedOrigins/YOUR_ALLOWED_ORIGIN"
                }
            }
        }
    ],
    "_links": {
        "self": {
            "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL"
        },
        "allowedOrigins": {
            "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL/allowedOrigins"
        },
        "generateApiKey": {
            "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL/generateApiKey"
        },
        "generateClientKey": {
            "href": "https://management-test.adyen.com/v1/companies/YOUR_COMPANY_ACCOUNT/apiCredentials/YOUR_API_CREDENTIAL/generateClientKey"
        },
        "merchant": {
            "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT"
        }
    },
    "apiKey": "YOUR_API_KEY",
    "password": "YOUR_PASSWORD"
};

export const apiCredential = {
    "_links": {
        "allowedOrigins": { "href": "string" },
        "company": { "href": "string" },
        "generateApiKey": { "href": "string" },
        "generateClientKey": { "href": "string" },
        "merchant": { "href": "string" },
        "self": { "href": "string" }
    },
    "active": false,
    "allowedIpAddresses": ["string"],
    "allowedOrigins": [{
        "_links": { "self": { "href": "string" } },
        "domain": "string",
        "id": "string"
    }],
    "clientKey": "string",
    "description": "string",
    "id": "string",
    "roles": ["string"],
    "username": "string"
};

export const generateApiKeyResponse = { "apiKey": "string" };

export const generateClientKeyResponse = { "clientKey": "string" };

export const paymentMethodResponse = {
    "_links": {
        "first": { "href": "string" },
        "last": { "href": "string" },
        "next": { "href": "string" },
        "prev": { "href": "string" },
        "self": { "href": "string" }
    },
    "data": [{
        "applePay": { "domains": ["string"] },
        "bcmc": { "enableBcmcMobile": false },
        "businessLineId": "string",
        "cartesBancaires": { "siret": "string" },
        "countries": ["string"],
        "currencies": ["string"],
        "enabled": false,
        "giroPay": { "supportEmail": "string" },
        "id": "string",
        "klarna": {
            "autoCapture": false,
            "disputeEmail": "string",
            "region": "NA",
            "supportEmail": "string"
        },
        "paypal": {
            "directCapture": false,
            "directSettlement": false,
            "payerId": "string",
            "subject": "string"
        },
        "sofort": {
            "currencyCode": "string",
            "logo": "string"
        },
        "storeId": "string",
        "swish": { "swishNumber": "string" },
        "type": "string"
    }],
    "itemsTotal": "0",
    "pagesTotal": "0"
};

export const paymentMethod = {
    "applePay": { "domains": ["string"] },
    "bcmc": { "enableBcmcMobile": false },
    "businessLineId": "string",
    "cartesBancaires": { "siret": "string" },
    "countries": ["string"],
    "currencies": ["string"],
    "enabled": false,
    "giroPay": { "supportEmail": "string" },
    "id": "string",
    "klarna": {
        "autoCapture": false,
        "disputeEmail": "string",
        "region": "NA",
        "supportEmail": "string"
    },
    "paypal": {
        "directCapture": false,
        "directSettlement": false,
        "payerId": "string",
        "subject": "string"
    },
    "sofort": {
        "currencyCode": "string",
        "logo": "string"
    },
    "storeId": "string",
    "swish": { "swishNumber": "string" },
    "type": "string"
};

export const payoutSettingsResponse = {
    "data": [{
        "allowed": false,
        "enabled": false,
        "enabledFromDate": "string",
        "id": "string",
        "priority": "first",
        "transferInstrumentId": "string",
        "verificationStatus": "invalid"
    }]
};

export const payoutSettings = {
    "allowed": false,
    "enabled": false,
    "enabledFromDate": "string",
    "id": "string",
    "priority": "first",
    "transferInstrumentId": "string",
    "verificationStatus": "invalid"
};

export const billingEntitiesResponse = {
    "data": [
        {
            "id": "MerchantAccount.YOUR_MERCHANT_ACCOUNT",
            "name": "YOUR_MERCHANT_ACCOUNT",
            "taxId": "ES1234567890",
            "email": "Pablo.Mengano@company.com",
            "address": {
                "streetAddress": "Paseo de la Castellana 43, 7",
                "postalCode": "28046",
                "city": "Madrid",
                "country": "ES"
            }
        }
    ]
};

export const shippingLocationsResponse = {
    "data": [
        {
            "id": "S2-6A6C2E3432747D4F2F2C3455485E3836457D",
            "name": "YOUR_COMPANY Spain",
            "contact": {
                "firstName": "Pablo",
                "lastName": "Mengano",
                "phoneNumber": "+34911234567",
                "email": "Pablo.Mengano@company.com"
            },
            "address": {
                "streetAddress": "Paseo de la Castellana 43",
                "streetAddress2": "7 piso",
                "postalCode": "28046",
                "city": "Madrid",
                "country": "ES"
            }
        }
    ]
};

export const shippingLocation = {
    "id": "S2-73536B20665526704F30792642212044452F714622375D477270",
    "name": "YOUR_MERCHANT_ACCOUNT Barcelona depot",
    "contact": {
        "firstName": "Rita",
        "lastName": "Perengano",
        "phoneNumber": "+34931234567",
        "email": "Rita.Perengano@company.com"
    },
    "address": {
        "companyName": "YOUR_COMPANY",
        "streetAddress": "El quinto pino 42",
        "postalCode": "08012",
        "city": "Barcelona",
        "stateOrProvince": ""
    }
};

export const terminalModelsResponse = {
    "data": [
        {
            "id": "Verifone.e315",
            "name": "Verifone e315"
        },
        {
            "id": "Verifone.e315M",
            "name": "Verifone e315M"
        },
        {
            "id": "Verifone.E355",
            "name": "Verifone E355"
        },
        {
            "id": "Verifone.M400",
            "name": "Verifone M400"
        },
        {
            "id": "Verifone.MX915",
            "name": "Verifone MX915"
        },
        {
            "id": "Verifone.MX925",
            "name": "Verifone MX925"
        },
        {
            "id": "Verifone.P400",
            "name": "Verifone P400"
        },
        {
            "id": "Verifone.P400Plus",
            "name": "Verifone P400Plus"
        },
        {
            "id": "Verifone.P400Eth",
            "name": "Verifone P400Eth"
        },
        {
            "id": "Verifone.V240m",
            "name": "Verifone V240m"
        },
        {
            "id": "Verifone.V240mPlus",
            "name": "Verifone V240mPlus"
        },
        {
            "id": "Verifone.UX300",
            "name": "Verifone UX300"
        },
        {
            "id": "Verifone.V200cPlus",
            "name": "Verifone V200cPlus"
        },
        {
            "id": "Verifone.V400cPlus",
            "name": "Verifone V400cPlus"
        },
        {
            "id": "Verifone.V400m",
            "name": "Verifone V400m"
        },
        {
            "id": "Verifone.V210mPlus",
            "name": "Verifone V210mPlus"
        },
        {
            "id": "Verifone.VX520",
            "name": "Verifone VX520"
        },
        {
            "id": "Verifone.VX6753G",
            "name": "Verifone VX6753G"
        },
        {
            "id": "Verifone.VX675WIFIBT",
            "name": "Verifone VX675WIFIBT"
        },
        {
            "id": "Verifone.VX680",
            "name": "Verifone VX680"
        },
        {
            "id": "Verifone.VX6803G",
            "name": "Verifone VX6803G"
        },
        {
            "id": "Verifone.VX690",
            "name": "Verifone VX690"
        },
        {
            "id": "Verifone.VX700",
            "name": "Verifone VX700"
        },
        {
            "id": "Verifone.VX810",
            "name": "Verifone VX810"
        },
        {
            "id": "Verifone.VX820",
            "name": "Verifone VX820"
        },
        {
            "id": "Verifone.VX825",
            "name": "Verifone VX825"
        },
        {
            "id": "Verifone.e285",
            "name": "Verifone e285"
        },
        {
            "id": "Verifone.E285",
            "name": "Verifone E285"
        },
        {
            "id": "Verifone.e285p",
            "name": "Verifone e285p"
        },
        {
            "id": "Verifone.e280",
            "name": "Verifone e280"
        },
        {
            "id": "Verifone.UX410",
            "name": "Verifone UX410"
        },
        {
            "id": "Castles.S1E",
            "name": "Castles S1E"
        },
        {
            "id": "Castles.S1EL",
            "name": "Castles S1EL"
        },
        {
            "id": "Castles.S1F",
            "name": "Castles S1F"
        },
        {
            "id": "Castles.S1F2",
            "name": "Castles S1F2"
        },
        {
            "id": "Castles.S1F2L",
            "name": "Castles S1F2L"
        },
        {
            "id": "Castles.S1E2",
            "name": "Castles S1E2"
        },
        {
            "id": "Castles.S1E2L",
            "name": "Castles S1E2L"
        }
    ]
};

export const terminalOrdersResponse = {
    "data": [
        {
            "id": "4154567890100682",
            "customerOrderReference": "YOUR_REFERENCE_M2",
            "status": "Placed",
            "shippingLocation": {
                "id": "S2-6A6C2E3432747D4F2F2C3455485E3836457D",
                "name": "YOUR_COMPANY Spain",
                "contact": {
                    "firstName": "Pablo",
                    "lastName": "Mengano",
                    "phoneNumber": "+34911234567",
                    "email": "Pablo.Mengano@company.com"
                },
                "address": {
                    "streetAddress": "Paseo de la Castellana 43",
                    "streetAddress2": "7 piso",
                    "postalCode": "28046",
                    "city": "Madrid",
                    "country": "ES"
                }
            },
            "billingEntity": {
                "id": "MerchantAccount.YOUR_MERCHANT_ACCOUNT",
                "name": "YOUR_MERCHANT_ACCOUNT",
                "taxId": "ES1234567890",
                "email": "Pablo.Mengano@company.com",
                "address": {
                    "streetAddress": "Paseo de la Castellana 43, 7",
                    "postalCode": "28046",
                    "city": "Madrid",
                    "country": "ES"
                }
            },
            "orderDate": "2022-01-21T16:12:33Z",
            "items": [
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
        },
        {
            "id": "8315943674501996",
            "customerOrderReference": "YOUR_REFERENCE_M1",
            "status": "Cancelled",
            "shippingLocation": {
                "id": "S2-6A6C2E3432747D4F2F2C3455485E3836457D",
                "name": "YOUR_COMPANY Spain",
                "contact": {
                    "firstName": "Pablo",
                    "lastName": "Mengano",
                    "phoneNumber": "+34911234567",
                    "email": "Pablo.Mengano@company.com"
                },
                "address": {
                    "streetAddress": "Paseo de la Castellana 43",
                    "streetAddress2": "7 piso",
                    "postalCode": "28046",
                    "city": "Madrid",
                    "country": "ES"
                }
            },
            "billingEntity": {
                "id": "MerchantAccount.YOUR_MERCHANT_ACCOUNT",
                "name": "YOUR_MERCHANT_ACCOUNT",
                "taxId": "ES1234567890",
                "email": "Pablo.Mengano@company.com",
                "address": {
                    "streetAddress": "Paseo de la Castellana 43, 7",
                    "postalCode": "28046",
                    "city": "Madrid",
                    "country": "ES"
                }
            },
            "orderDate": "2022-01-04T09:41:07.000Z",
            "items": [
                {
                    "id": "TBOX-V400m-774-EU",
                    "name": "V400m Package",
                    "quantity": 1
                }
            ]
        }
    ]
};

export const terminalOrder = {
    "id": "4154567890100682",
    "customerOrderReference": "YOUR_REFERENCE",
    "status": "Cancelled",
    "shippingLocation": {
        "id": "S2-6A6C2E3432747D4F2F2C3455485E3836457D",
        "name": "YOUR_COMPANY Spain",
        "contact": {
            "firstName": "Pablo",
            "lastName": "Mengano",
            "phoneNumber": "+34911234567",
            "email": "Pablo.Mengano@company.com"
        },
        "address": {
            "streetAddress": "Paseo de la Castellana 43",
            "streetAddress2": "7 piso",
            "postalCode": "28046",
            "city": "Madrid",
            "country": "ES"
        }
    },
    "billingEntity": {
        "id": "MerchantAccount.YOUR_MERCHANT_ACCOUNT",
        "name": "YOUR_MERCHANT_ACCOUNT",
        "taxId": "ES1234567890",
        "email": "Pablo.Mengano@company.com",
        "address": {
            "streetAddress": "Paseo de la Castellana 43, 7",
            "postalCode": "28046",
            "city": "Madrid",
            "country": "ES"
        }
    },
    "orderDate": "2022-01-21T16:12:33Z",
    "items": [
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

export const terminalProductsResponse = {
    "data": [
        {
            "id": "PART-620222-EU",
            "name": "Receipt Roll",
            "price": {
                "currency": "EUR",
                "value": 0.0
            }
        },
        {
            "id": "PART-175746-EU",
            "name": "Adyen Test Card",
            "price": {
                "currency": "EUR",
                "value": 0.0
            }
        },
        {
            "id": "PART-327486-EU",
            "name": "Battery - V400m",
            "price": {
                "currency": "EUR",
                "value": 0.0
            }
        },
        {
            "id": "PART-287001-EU",
            "name": "Bluetooth Charging Base - V400m",
            "price": {
                "currency": "EUR",
                "value": 0.0
            }
        },
        {
            "id": "PART-745984-EU",
            "name": "Power Supply EU - V400m",
            "price": {
                "currency": "EUR",
                "value": 0.0
            }
        },
        {
            "id": "TBOX-V400m-684-EU",
            "name": "V400m Package",
            "description": "Includes an EU Power Supply, SIM Card and battery",
            "price": {
                "currency": "EUR",
                "value": 0.0
            },
            "itemsIncluded": [
                "Receipt Roll",
                "Terminal Device V400m EU/GB"
            ]
        }
    ]
};

export const logo = {
    "data": "LOGO_INHERITED_FROM_HIGHER_LEVEL_BASE-64_ENCODED_STRING"
};

export const terminalSettings = {
    "cardholderReceipt": {
        "headerForAuthorizedReceipt": "header1,header2,filler"
    },
    "gratuities": [
        {
            "currency": "EUR",
            "usePredefinedTipEntries": true,
            "predefinedTipEntries": [
                "100",
                "1%",
                "5%"
            ],
            "allowCustomAmount": true
        }
    ],
    "nexo": {
        "nexoEventUrls": [
            "https://your-event-notifications-endpoint.com"
        ]
    },
    "opi": {
        "enablePayAtTable": true,
        "payAtTableStoreNumber": "1",
        "payAtTableURL": "https:/your-pay-at-table-endpoint.com"
    },
    "receiptOptions": {},
    "receiptPrinting": {
        "shopperApproved": true,
        "shopperRefused": true,
        "shopperCancelled": true,
        "shopperRefundApproved": true,
        "shopperRefundRefused": true,
        "shopperVoid": true
    },
    "signature": {
        "askSignatureOnScreen": true,
        "skipSignature": false,
        "deviceName": "Amsterdam-236203386"
    },
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
    },
    "timeouts": {
        "fromActiveToSleep": 30
    },
    "hardware": {
        "displayMaximumBackLight": 75
    }
};

export const listMerchantUsersResponse = {
    "_links": {
        "first": { "href": "string" },
        "last": { "href": "string" },
        "next": { "href": "string" },
        "prev": { "href": "string" },
        "self": { "href": "string" }
    },
    "data": [{
        "_links": { "self": { "href": "string" } },
        "accountGroups": ["string"],
        "active": false,
        "email": "string",
        "id": "string",
        "name": {
            "firstName": "string",
            "lastName": "string"
        },
        "roles": ["string"],
        "timeZoneCode": "string",
        "username": "string"
    }],
    "itemsTotal": 0,
    "pagesTotal": 0
};

export const createUserResponse = {
    "id": "S2-3B3C3C3B22",
    "name": {
        "firstName": "John",
        "gender": "UNKNOWN",
        "lastName": "Smith"
    },
    "email": "john.smith@example.com",
    "timeZoneCode": "Europe/Amsterdam",
    "username": "johnsmith",
    "roles": [
        "Merchant standard role"
    ],
    "active": "true",
    "_links": {
        "self": {
            "href": "https://management-test.adyen.com/v1/merchants/YOUR_MERCHANT_ACCOUNT/users/S2-3B3C3C3B22"
        }
    },
    "associatedMerchantAccounts": [
        "YOUR_MERCHANT_ACCOUNT"
    ]
};

export const user = {
    "_links": { "self": { "href": "string" } },
    "accountGroups": ["string"],
    "active": false,
    "email": "string",
    "id": "string",
    "name": {
        "firstName": "string",
        "lastName": "string"
    },
    "roles": ["string"],
    "timeZoneCode": "string",
    "username": "string"
};

export const listWebhooksResponse = {
    "_links": {
        "first": { "href": "string" },
        "last": { "href": "string" },
        "next": { "href": "string" },
        "prev": { "href": "string" },
        "self": { "href": "string" }
    },
    "accountReference": "string",
    "data": [{
        "_links": {
            "company": { "href": "string" },
            "generateHmac": { "href": "string" },
            "merchant": { "href": "string" },
            "self": { "href": "string" },
            "testWebhook": { "href": "string" }
        },
        "acceptsExpiredCertificate": false,
        "acceptsSelfSignedCertificate": false,
        "acceptsUntrustedRootCertificate": false,
        "accountReference": "string",
        "active": false,
        "additionalSettings": {
            "excludeEventCodes": ["string"],
            "includeEventCodes": ["string"],
            "properties": { "sample": false }
        },
        "certificateAlias": "string",
        "communicationFormat": "HTTP",
        "description": "string",
        "filterMerchantAccountType": "EXCLUDE_LIST",
        "filterMerchantAccounts": ["string"],
        "hasError": false,
        "hasPassword": false,
        "hmacKeyCheckValue": "string",
        "id": "string",
        "networkType": "LOCAL",
        "populateSoapActionHeader": false,
        "sslVersion": "HTTP",
        "type": "string",
        "url": "string",
        "username": "string"
    }],
    "itemsTotal": 0,
    "pagesTotal": 0
};

export const webhook = {
    "_links": {
        "company": { "href": "string" },
        "generateHmac": { "href": "string" },
        "merchant": { "href": "string" },
        "self": { "href": "string" },
        "testWebhook": { "href": "string" }
    },
    "acceptsExpiredCertificate": false,
    "acceptsSelfSignedCertificate": false,
    "acceptsUntrustedRootCertificate": false,
    "accountReference": "string",
    "active": false,
    "additionalSettings": {
        "excludeEventCodes": ["string"],
        "includeEventCodes": ["string"],
        "properties": { "sample": false }
    },
    "certificateAlias": "string",
    "communicationFormat": "HTTP",
    "description": "string",
    "filterMerchantAccountType": "EXCLUDE_LIST",
    "filterMerchantAccounts": ["string"],
    "hasError": false,
    "hasPassword": false,
    "hmacKeyCheckValue": "string",
    "id": "string",
    "networkType": "LOCAL",
    "populateSoapActionHeader": false,
    "sslVersion": "HTTP",
    "type": "string",
    "url": "string",
    "username": "string"
};

export const generateHmacKeyResponse = { "hmacKey": "string" };

export const testWebhookResponse = {
    "data": [{
        "merchantId": "string",
        "output": "string",
        "requestSent": "string",
        "responseCode": "string",
        "responseTime": "string",
        "status": "string"
    }]
};
