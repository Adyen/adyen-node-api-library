export const transfersSuccess = {
    "id" : "1W1UG35U8A9J5ZLG",
    "amount" : {
        "value" : 110000,
        "currency" : "EUR"
    },
    "balanceAccountId" : "BAB8B2C3D4E5F6G7H8D9J6GD4",
    "category" : "bank",
    "counterparty" : {
        "accountHolder" : {
            "fullName" : "A. Klaassen",
            "address" : {
                "city" : "San Francisco",
                "country" : "US",
                "postalCode" : "94678",
                "stateOrProvince" : "CA",
                "street" : "Brannan Street",
                "street2" : "274"
            }
        },
        "accountIdentification" : {
            "type" : "numberBic",
            "accountNumber" : "123456789",
            "bic" : "BOFAUS3NXXX"
        }
    },
    "priority" : "wire",
    "referenceForBeneficiary" : "Your reference sent to the beneficiary",
    "reference" : "Your internal reference for the transfer",
    "description" : "Your description for the transfer",
    "direction" : "outgoing",
    "reason" : "approved",
    "status" : "authorised"
};

export const getTransactionSuccess = {
    "accountHolderId" : "AHA1B2C3D4E5F6G7H8I9J0",
    "amount" : {
        "currency" : "EUR",
        "value" : 9887
    },
    "balanceAccountId" : "BAB8B2C3D4E5F6G7H8D9J6GD4",
    "balancePlatform" : "YOUR_BALANCE_PLATFORM",
    "bookingDate" : "2022-03-14T12:01:00+01:00",
    "category" : "bank",
    "counterparty" : {
        "balanceAccountId" : "NL29ADYX0000000001"
    },
    "createdAt" : "2022-03-14T12:01:00+01:00",
    "description" : "YOUR_DESCRIPTION",
    "id" : "IZK7C25U7DYVX03Y",
    "instructedAmount" : {
        "currency" : "EUR",
        "value" : 9887
    },
    "reference" : "2L6C6B5U7DYULLXC",
    "referenceForBeneficiary" : "YOUR_REFERENCE_FOR_BENEFICIARY",
    "status" : "booked",
    "transferId" : "2QP32A5U7IWC5WKG",
    "type" : "bankTransfer",
    "valueDate" : "2022-03-14T12:01:00+01:00"
};

export const listTransactionsSuccess = {
    "data" : [
       {
          "accountHolderId" : "AHA1B2C3D4E5F6G7H8I9J0",
          "amount" : {
             "currency" : "EUR",
             "value" : -9
          },
          "balanceAccountId" : "BAB8B2C3D4E5F6G7H8D9J6GD4",
          "balancePlatform" : "YOUR_BALANCE_PLATFORM",
          "bookingDate" : "2022-03-11T11:21:24+01:00",
          "category" : "internal",
          "createdAt" : "2022-03-11T11:21:24+01:00",
          "id" : "1VVF0D5U66PIUIVP",
          "instructedAmount" : {
             "currency" : "EUR",
             "value" : -9
          },
          "reference" : "REFERENCE_46e8c40e",
          "status" : "booked",
          "transferId" : "1VVF0D5U66PIUIVP",
          "type" : "fee",
          "valueDate" : "2022-03-11T11:21:24+01:00"
       },
       {
          "accountHolderId" : "AHA1B2C3D4E5F6G7H8I9J0",
          "amount" : {
             "currency" : "EUR",
             "value" : -46
          },
          "balanceAccountId" : "BAB8B2C3D4E5F6G7H8D9J6GD4",
          "balancePlatform" : "YOUR_BALANCE_PLATFORM",
          "bookingDate" : "2022-03-12T14:22:52+01:00",
          "category" : "internal",
          "createdAt" : "2022-03-12T14:22:52+01:00",
          "id" : "1WEPGD5U6MS1CFK3",
          "instructedAmount" : {
             "currency" : "EUR",
             "value" : -46
          },
          "reference" : "YOUR_REFERENCE",
          "status" : "booked",
          "transferId" : "1WEPGD5U6MS1CFK3",
          "type" : "fee",
          "valueDate" : "2022-03-12T14:22:52+01:00"
       },
       {
          "accountHolderId" : "AHA1B2C3D4E5F6G7H8I9J0",
          "amount" : {
             "currency" : "EUR",
             "value" : -8
          },
          "balanceAccountId" : "BAB8B2C3D4E5F6G7H8D9J6GD4",
          "balancePlatform" : "YOUR_BALANCE_PLATFORM",
          "bookingDate" : "2022-03-14T21:00:48+01:00",
          "createdAt" : "2022-03-14T15:00:00+01:00",
          "description" : "YOUR_DESCRIPTION_2",
          "id" : "2QP32A5U7IWC5WKG",
          "instructedAmount" : {
             "currency" : "EUR",
             "value" : -8
          },
          "status" : "booked",
          "valueDate" : "2022-03-14T21:00:48+01:00"
       }
    ],
    "_links" : {
       "next" : {
          "href" : "https://balanceplatform-api-test.adyen.com/btl/v2/transactions?balancePlatform=Bastronaut&createdUntil=2022-03-21T00%3A00%3A00Z&createdSince=2022-03-11T00%3A00%3A00Z&limit=3&cursor=S2B-TSAjOkIrYlIlbjdqe0RreHRyM32lKRSxubXBHRkhHL2E32XitQQz5SfzpucD5HbHwpM1p6NDR1eXVQLFF6MmY33J32sobDxQYT90MHIud1hwLnd6JitcX32xJ"
       }
    }
};