/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

export const syncRes = {
    SaleToPOIResponse: {
        MessageHeader: {
            MessageCategory: "Payment",
            MessageClass: "Service",
            MessageType: "Response",
            POIID: process.env.ADYEN_TERMINAL_POIID,
            ProtocolVersion: "3.0",
            SaleID: "001",
            ServiceID: "001",
        },
        PaymentResponse: {
            POIData: {
                POIReconciliationID: "1000",
                POITransactionID: {
                    TimeStamp: "2019-04-29T00:00:00.000Z",
                    TransactionID: "4r7i001556529591000.8515565295894301",
                },
            },

            PaymentReceipt: [
                {
                    DocumentQualifier: "CashierReceipt",
                    OutputContent: {
                        OutputFormat: "Text",
                        OutputText: [
                            {
                                CharacterStyle: "Bold",
                                EndOfLineFlag: true,
                                Text: "key=header1",
                            },
                            {
                                CharacterStyle: "Bold",
                                EndOfLineFlag: true,
                                Text: "key=header2",
                            },
                            {
                                CharacterStyle: "Bold",
                                EndOfLineFlag: true,
                                Text: "name=MERCHANT%20COPY&key=merchantTitle",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "key=filler",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Date&value=29%2f04%2f19&key=txdate",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Time&value=10%3a19%3a51&key=txtime",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "key=filler",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Card&value=%2a%2a%2a%2a%2a%2a%2a%2a%2a%2a%2a%2a3511&key=pan",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Pref.%20name&value=MCC%20351%20v1%202&key=preferredName",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Card%20type&value=mc&key=cardType",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Payment%20method&value=mc&key=paymentMethod",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Payment%20variant&value=mc&key=paymentMethodVariant",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Entry%20mode&value=Contactless%20swipe&key=posEntryMode",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "key=filler",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=AID&value=A0000000041010&key=aid",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=MID&value=1000&key=mid",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=TID&value=P400Plus-275039202&key=tid",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=PTID&value=75039202&key=ptid",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "key=filler",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Auth.%20code&value=123456&key=authCode",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Tender&value=4r7i001556529591000&key=txRef",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Reference&value=003&key=mref",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "key=filler",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Type&value=GOODS_SERVICES&key=txtype",
                            },
                            {
                                CharacterStyle: "Bold",
                                EndOfLineFlag: true,
                                Text: "name=TOTAL&value=%e2%82%ac%c2%a01.00&key=totalAmount",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "key=filler",
                            },
                            {
                                CharacterStyle: "Bold",
                                EndOfLineFlag: true,
                                Text: "name=APPROVED&key=approved",
                            },
                        ],
                    },
                    RequiredSignatureFlag: false,
                },
                {
                    DocumentQualifier: "CustomerReceipt",
                    OutputContent: {
                        OutputFormat: "Text",
                        OutputText: [
                            {
                                CharacterStyle: "Bold",
                                EndOfLineFlag: true,
                                Text: "key=header1",
                            },
                            {
                                CharacterStyle: "Bold",
                                EndOfLineFlag: true,
                                Text: "key=header2",
                            },
                            {
                                CharacterStyle: "Bold",
                                EndOfLineFlag: true,
                                Text: "name=CARDHOLDER%20COPY&key=cardholderHeader",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "key=filler",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Date&value=29%2f04%2f19&key=txdate",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Time&value=10%3a19%3a51&key=txtime",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "key=filler",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Card&value=%2a%2a%2a%2a%2a%2a%2a%2a%2a%2a%2a%2a3511&key=pan",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Pref.%20name&value=MCC%20351%20v1%202&key=preferredName",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Card%20type&value=mc&key=cardType",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Payment%20method&value=mc&key=paymentMethod",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Payment%20variant&value=mc&key=paymentMethodVariant",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Entry%20mode&value=Contactless%20swipe&key=posEntryMode",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "key=filler",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=AID&value=A0000000041010&key=aid",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=MID&value=1000&key=mid",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=TID&value=P400Plus-275039202&key=tid",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=PTID&value=75039202&key=ptid",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "key=filler",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Auth.%20code&value=123456&key=authCode",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Tender&value=4r7i001556529591000&key=txRef",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Reference&value=003&key=mref",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "key=filler",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Type&value=GOODS_SERVICES&key=txtype",
                            },
                            {
                                CharacterStyle: "Bold",
                                EndOfLineFlag: true,
                                Text: "name=TOTAL&value=%e2%82%ac%c2%a01.00&key=totalAmount",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "key=filler",
                            },
                            {
                                CharacterStyle: "Bold",
                                EndOfLineFlag: true,
                                Text: "name=APPROVED&key=approved",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "key=filler",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Please%20retain%20for%20your%20records&key=retain",
                            },
                            {
                                EndOfLineFlag: true,
                                Text: "name=Thank%20you&key=thanks",
                            },
                        ],
                    },
                    RequiredSignatureFlag: false,
                },
            ],
            PaymentResult: {
                AmountsResp: {
                    AuthorizedAmount: 1,
                    Currency: "EUR",
                },
                OnlineFlag: true,
                PaymentAcquirerData: {
                    AcquirerPOIID: "P400Plus-123456789",
                    AcquirerTransactionID: {
                        TimeStamp: "2019-04-29T09:19:51.000Z",
                        TransactionID: "8515565295894301",
                    },
                    ApprovalCode: "123456",
                    MerchantID: "TestMerchant",
                },
                PaymentInstrumentData: {
                    CardData: {
                        EntryMode: [
                            "Tapped",
                        ],
                        MaskedPan: "411111 **** 1111",
                        PaymentBrand: "mc",
                        SensitiveCardData: {
                            ExpiryDate: "1225",
                        },
                    },
                    PaymentInstrumentType: "Card",
                },
            },
            Response: {
                AdditionalResponse: `tid=75039202&AID=A0000000041010&transactionType=GOODS_SERVICES&backendGiftcardIndi
                cator=false&expiryYear=2025&acquirerAccountCode=TestPmmAcquirerAccount&alias=M900978995070104&posOrigin
                alAmountCurrency=EUR&giftcardIndicator=false&authorisedAmountValue=100&pspReference=8515565295894301&pa
                ymentMethodVariant=mc&cardHolderName=N%2fA&refusalReasonRaw=APPROVED&authorisationMid=1000&expiryDate=1
                2%2f2025&applicationPreferredName=MCC%20351%20v1%202&acquirerCode=TestPmmAcquirer&txtime=10%3a19%3a51&i
                so8601TxDate=2019-04-29T09%3a19%3a51.0000000%2b0000&cardType=mc&posOriginalAmountValue=100&offline=fals
                e&aliasType=Default&txdate=29-04-2019&paymentMethod=mc&cvcResult=0%20Unknown&avsResult=0%20Unknown&mid=
                1000&merchantReference=003&transactionReferenceNumber=8515565295894301&expiryMonth=12&cardSummary=3511&
                posTotalAmountValue=100&posAuthAmountCurrency=EUR&cardHolderVerificationMethodResults=3F0300&authCode=1
                23456&shopperCountry=NL&posEntryMode=CLESS_SWIPE&cardScheme=mc&cardBin=541333&posAuthAmountValue=100`,
                Result: "Success",
            },
            SaleData: {
                SaleTransactionID: {
                    TimeStamp: "2019-04-29T00:00:00.000Z",
                    TransactionID: "001",
                },
            },
        },
    },
};

export const syncRefund = {
    SaleToPOIResponse: {
        MessageHeader: {
            MessageCategory: "Payment",
            MessageClass: "Service",
            MessageType: "Response",
            POIID: process.env.ADYEN_TERMINAL_POIID,
            ProtocolVersion: "3.0",
            SaleID: "001",
            ServiceID: "001",
        },
        ReversalResponse: {
            Response: {
                Result: "Success"
            }
        }
    }
};

export const syncResEventNotification = {
    SaleToPOIRequest: {
        EventNotification: {
            EventToNotify: "Reject",
            EventDetails: "message=Did+not+receive+a+response+from+the+POI.",
            RejectedMessage: "ewoi...0KfQo=",
            TimeStamp: "2020-03-31T10:28:39.515Z"
        },
        MessageHeader: {
            DeviceID: "666568147",
            MessageCategory: "Event",
            MessageClass: "Event",
            MessageType: "Notification",
            POIID: "P400Plus-123456789",
            ProtocolVersion: "3.0",
            SaleID: "saleid-4c32759faaa7",
            ServiceID: "31122609"
        }
    }
};

export const syncResEventNotificationWithAdditionalAttributes = {
   "SaleToPOIRequest":{
      "EventNotification":{
         "EventDetails":"newstate=IDLE&oldstate=START",
         "EventToNotify":"Shutdown",
         "TimeStamp":"2019-08-07T10:16:10.000Z",
         "AdditionalAttribute": "Something"
      },
      "MessageHeader":{
         "SaleID":"POSSystemID12345",
         "ProtocolVersion":"3.0",
         "MessageType":"Notification",
         "POIID":"V400m-324688179",
         "MessageClass":"Event",
         "MessageCategory":"Event",
         "DeviceID":"1517998561",
         "AdditionalAttribute": "SomethingElse"
      }
   }
};

export const syncResEventNotificationWithUnknownEnum = {
   "SaleToPOIRequest":{
      "EventNotification":{
         "EventDetails":"newstate=IDLE&oldstate=START",
         "EventToNotify":"this is unknown",
         "TimeStamp":"2019-08-07T10:16:10.000Z"
      },
      "MessageHeader":{
         "SaleID":"POSSystemID12345",
         "ProtocolVersion":"3.0",
         "MessageType":"Notification",
         "POIID":"V400m-324688179",
         "MessageClass":"Event",
         "MessageCategory":"Event",
         "DeviceID":"1517998561"
      }
   }
};
