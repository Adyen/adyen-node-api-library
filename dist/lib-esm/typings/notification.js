// To parse this data:
//
//   import { Convert, Notification } from "./file";
//
//   const notification = Convert.toNotification(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
export var NotificationEnum;
(function (NotificationEnum) {
    NotificationEnum["EVENT_CODE_AUTHORISATION"] = "AUTHORISATION";
    //Event codes
    NotificationEnum["EVENT_CODE_CANCELLATION"] = "CANCELLATION";
    NotificationEnum["EVENT_CODE_REFUND"] = "REFUND";
    NotificationEnum["EVENT_CODE_CANCEL_OR_REFUND"] = "CANCEL_OR_REFUND";
    NotificationEnum["EVENT_CODE_CAPTURE"] = "CAPTURE";
    NotificationEnum["EVENT_CODE_CAPTURE_FAILED"] = "CAPTURE_FAILED";
    NotificationEnum["EVENT_CODE_REFUND_FAILED"] = "REFUND_FAILED";
    NotificationEnum["EVENT_CODE_REFUNDED_REVERSED"] = "REFUNDED_REVERSED";
    NotificationEnum["EVENT_CODE_PAIDOUT_REVERSED"] = "PAIDOUT_REVERSED";
    //Additional Data
    NotificationEnum["ADDITIONAL_DATA_TOTAL_FRAUD_SCORE"] = "totalFraudScore";
    NotificationEnum["ADDITIONAL_DATA_FRAUD_CHECK_PATTERN"] = "fraudCheck-(\\d+)-([A-Za-z0-9]+)";
})(NotificationEnum || (NotificationEnum = {}));
// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
var Convert = /** @class */ (function () {
    function Convert() {
    }
    Convert.toNotification = function (json) {
        return cast(JSON.parse(json), r("Notification"));
    };
    Convert.notificationToJson = function (value) {
        return JSON.stringify(uncast(value, r("Notification")), null, 2);
    };
    return Convert;
}());
export { Convert };
function invalidValue(typ, val) {
    throw Error("Invalid value " + JSON.stringify(val) + " for type " + JSON.stringify(typ));
}
function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        var map = {};
        typ.props.forEach(function (p) { return map[p.json] = { key: p.js, typ: p.typ }; });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}
function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        var map = {};
        typ.props.forEach(function (p) { return map[p.js] = { key: p.json, typ: p.typ }; });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}
function transform(val, typ, getProps) {
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val)
            return val;
        return invalidValue(typ, val);
    }
    function transformUnion(typs, val) {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ = typs[i];
            try {
                return transform(val, typ, getProps);
            }
            catch (_) { }
        }
        return invalidValue(typs, val);
    }
    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1)
            return val;
        return invalidValue(cases, val);
    }
    function transformArray(typ, val) {
        // val must be an array with no invalid elements
        if (!Array.isArray(val))
            return invalidValue("array", val);
        return val.map(function (el) { return transform(el, typ, getProps); });
    }
    function transformDate(typ, val) {
        if (val === null) {
            return null;
        }
        var d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }
    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        var result = {};
        Object.getOwnPropertyNames(props).forEach(function (key) {
            var prop = props[key];
            var v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps);
        });
        Object.getOwnPropertyNames(val).forEach(function (key) {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps);
            }
        });
        return result;
    }
    if (typ === "any")
        return val;
    if (typ === null) {
        if (val === null)
            return val;
        return invalidValue(typ, val);
    }
    if (typ === false)
        return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ))
        return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number")
        return transformDate(typ, val);
    return transformPrimitive(typ, val);
}
function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}
function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}
function a(typ) {
    return { arrayItems: typ };
}
function u() {
    var typs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        typs[_i] = arguments[_i];
    }
    return { unionMembers: typs };
}
function o(props, additional) {
    return { props: props, additional: additional };
}
function m(additional) {
    // @ts-ignore
    return { props: [], additional: additional };
}
function r(name) {
    return { ref: name };
}
var typeMap = {
    "Notification": o([
        { json: "live", js: "live", typ: "" },
        { json: "notificationItems", js: "notificationItems", typ: a(r("NotificationItem")) },
    ], false),
    "NotificationItem": o([
        { json: "NotificationRequestItem", js: "notificationRequestItem", typ: r("NotificationRequestItem") },
    ], false),
    "NotificationRequestItem": o([
        { json: "additionalData", js: "additionalData", typ: u(undefined, m("any")) },
        { json: "amount", js: "amount", typ: r("Amount") },
        { json: "eventCode", js: "eventCode", typ: "" },
        { json: "eventDate", js: "eventDate", typ: Date },
        { json: "merchantAccountCode", js: "merchantAccountCode", typ: "" },
        { json: "merchantReference", js: "merchantReference", typ: "" },
        { json: "operations", js: "operations", typ: u(undefined, a("")) },
        { json: "originalReference", js: "originalReference", typ: u(undefined, "") },
        { json: "paymentMethod", js: "paymentMethod", typ: "" },
        { json: "pspReference", js: "pspReference", typ: "" },
        { json: "reason", js: "reason", typ: "" },
        { json: "success", js: "success", typ: "" },
    ], false),
    "Amount": o([
        { json: "currency", js: "currency", typ: "" },
        { json: "value", js: "value", typ: 0 },
    ], false),
};
//# sourceMappingURL=notification.js.map