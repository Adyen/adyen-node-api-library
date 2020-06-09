var Response = (function () {
    function Response() {
    }
    Response.getAttributeTypeMap = function () {
        return Response.attributeTypeMap;
    };
    Response.discriminator = undefined;
    Response.attributeTypeMap = [
        {
            "name": "additionalResponse",
            "baseName": "AdditionalResponse",
            "type": "string"
        },
        {
            "name": "errorCondition",
            "baseName": "ErrorCondition",
            "type": "Response.ErrorConditionEnum"
        },
        {
            "name": "result",
            "baseName": "Result",
            "type": "ResultType"
        }
    ];
    return Response;
}());
export { Response };
(function (Response) {
    var ErrorConditionEnum;
    (function (ErrorConditionEnum) {
        ErrorConditionEnum[ErrorConditionEnum["Aborted"] = 'Aborted'] = "Aborted";
        ErrorConditionEnum[ErrorConditionEnum["Busy"] = 'Busy'] = "Busy";
        ErrorConditionEnum[ErrorConditionEnum["Cancel"] = 'Cancel'] = "Cancel";
        ErrorConditionEnum[ErrorConditionEnum["DeviceOut"] = 'DeviceOut'] = "DeviceOut";
        ErrorConditionEnum[ErrorConditionEnum["InProgress"] = 'InProgress'] = "InProgress";
        ErrorConditionEnum[ErrorConditionEnum["InsertedCard"] = 'InsertedCard'] = "InsertedCard";
        ErrorConditionEnum[ErrorConditionEnum["InvalidCard"] = 'InvalidCard'] = "InvalidCard";
        ErrorConditionEnum[ErrorConditionEnum["LoggedOut"] = 'LoggedOut'] = "LoggedOut";
        ErrorConditionEnum[ErrorConditionEnum["MessageFormat"] = 'MessageFormat'] = "MessageFormat";
        ErrorConditionEnum[ErrorConditionEnum["NotAllowed"] = 'NotAllowed'] = "NotAllowed";
        ErrorConditionEnum[ErrorConditionEnum["NotFound"] = 'NotFound'] = "NotFound";
        ErrorConditionEnum[ErrorConditionEnum["PaymentRestriction"] = 'PaymentRestriction'] = "PaymentRestriction";
        ErrorConditionEnum[ErrorConditionEnum["Refusal"] = 'Refusal'] = "Refusal";
        ErrorConditionEnum[ErrorConditionEnum["UnavailableDevice"] = 'UnavailableDevice'] = "UnavailableDevice";
        ErrorConditionEnum[ErrorConditionEnum["UnavailableService"] = 'UnavailableService'] = "UnavailableService";
        ErrorConditionEnum[ErrorConditionEnum["UnreachableHost"] = 'UnreachableHost'] = "UnreachableHost";
        ErrorConditionEnum[ErrorConditionEnum["WrongPIN"] = 'WrongPIN'] = "WrongPIN";
    })(ErrorConditionEnum = Response.ErrorConditionEnum || (Response.ErrorConditionEnum = {}));
})(Response || (Response = {}));
//# sourceMappingURL=response.js.map