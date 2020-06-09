"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventNotification = void 0;
var EventNotification = (function () {
    function EventNotification() {
    }
    EventNotification.getAttributeTypeMap = function () {
        return EventNotification.attributeTypeMap;
    };
    EventNotification.discriminator = undefined;
    EventNotification.attributeTypeMap = [
        {
            "name": "customerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "displayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        },
        {
            "name": "eventDetails",
            "baseName": "EventDetails",
            "type": "string"
        },
        {
            "name": "eventToNotify",
            "baseName": "EventToNotify",
            "type": "EventToNotifyType"
        },
        {
            "name": "maintenanceRequiredFlag",
            "baseName": "MaintenanceRequiredFlag",
            "type": "boolean"
        },
        {
            "name": "rejectedMessage",
            "baseName": "RejectedMessage",
            "type": "AnyType"
        },
        {
            "name": "timeStamp",
            "baseName": "TimeStamp",
            "type": "string"
        }
    ];
    return EventNotification;
}());
exports.EventNotification = EventNotification;
//# sourceMappingURL=eventNotification.js.map