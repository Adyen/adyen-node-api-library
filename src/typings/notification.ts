// To parse this data:
//
//   import { Convert, Notification } from "./file";
//
//   const notification = Convert.toNotification(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Notification {
    live:              string;
    notificationItems: NotificationItem[];
}

export interface NotificationItem {
    notificationRequestItem: NotificationRequestItem;
}

export interface NotificationRequestItem {
    additionalData:      AdditionalData;
    amount:              Amount;
    eventCode:           string;
    eventDate:           Date;
    merchantAccountCode: string;
    merchantReference:   string;
    operations?:          string[];
    originalReference?:   string;
    paymentMethod:       string;
    pspReference:        string;
    reason:              string;
    success:             string;
}

export interface AdditionalData {
    [key: string]: string;
}

export interface Amount {
    currency: string;
    value:    number;
}

export enum NotificationEnum {
    EVENT_CODE_AUTHORISATION = "AUTHORISATION",

    //Event codes
    EVENT_CODE_CANCELLATION = "CANCELLATION",
    EVENT_CODE_REFUND = "REFUND",
    EVENT_CODE_CANCEL_OR_REFUND = "CANCEL_OR_REFUND",
    EVENT_CODE_CAPTURE = "CAPTURE",
    EVENT_CODE_CAPTURE_FAILED = "CAPTURE_FAILED",
    EVENT_CODE_REFUND_FAILED = "REFUND_FAILED",
    EVENT_CODE_REFUNDED_REVERSED = "REFUNDED_REVERSED",
    EVENT_CODE_PAIDOUT_REVERSED = "PAIDOUT_REVERSED",

    //Additional Data
    ADDITIONAL_DATA_TOTAL_FRAUD_SCORE = "totalFraudScore",
    ADDITIONAL_DATA_FRAUD_CHECK_PATTERN = "fraudCheck-(\\d+)-([A-Za-z0-9]+)",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toNotification(json: string): Notification {
        return cast(JSON.parse(json), r("Notification"));
    }

    public static notificationToJson(value: Notification): string {
        return JSON.stringify(uncast(value, r("Notification")), null, 2);
    }
}

function invalidValue(typ: any, val: any): never {
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(typ: any, val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        var result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(typ, val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    // @ts-ignore
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
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
