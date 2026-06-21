/**
 * PredefinedContentHelper class to parse and manage predefined content reference IDs.
 */
export class PredefinedContentHelper {
    private params: URLSearchParams;

    constructor(referenceId: string) {
        this.params = new URLSearchParams(referenceId);
    }

    /**
     * Extracts and validates the `event` value from the ReferenceID.
     *
     * @returns A valid `DisplayNotificationEvent`, otherwise `null`.
     *
     * @example
     * const helper = new PredefinedContentHelper("...&event=PIN_ENTERED");
     * const event = helper.getEvent(); // DisplayNotificationEvent.PIN_ENTERED or null
     */
    getEvent(): DisplayNotificationEvent | null {
        const event = this.params.get("event");

        if (event && Object.values(DisplayNotificationEvent).includes(event as DisplayNotificationEvent)) {
            return event as DisplayNotificationEvent;
        }
        return null;
    }

    getTransactionId(): string | null {
        return this.params.get("TransactionID");
    }

    getTimeStamp(): string | null {
        return this.params.get("TimeStamp");
    }

    get(key: string): string | null {
        return this.params.get(key);
    }

    toObject(): Record<string, string> {
        return Object.fromEntries(this.params);
    }
}

// Supported events for display notifications
export enum DisplayNotificationEvent {
    TENDER_CREATED = "TENDER_CREATED",
    CARD_INSERTED = "CARD_INSERTED",
    CARD_PRESENTED = "CARD_PRESENTED",
    CARD_SWIPED = "CARD_SWIPED",
    WAIT_FOR_APP_SELECTION = "WAIT_FOR_APP_SELECTION",
    APPLICATION_SELECTED = "APPLICATION_SELECTED",
    ASK_SIGNATURE = "ASK_SIGNATURE",
    CHECK_SIGNATURE = "CHECK_SIGNATURE",
    SIGNATURE_CHECKED = "SIGNATURE_CHECKED",
    WAIT_FOR_PIN = "WAIT_FOR_PIN",
    PIN_ENTERED = "PIN_ENTERED",
    PRINT_RECEIPT = "PRINT_RECEIPT",
    RECEIPT_PRINTED = "RECEIPT_PRINTED",
    CARD_REMOVED = "CARD_REMOVED",
    TENDER_FINAL = "TENDER_FINAL",
    ASK_DCC = "ASK_DCC",
    DCC_ACCEPTED = "DCC_ACCEPTED",
    DCC_REJECTED = "DCC_REJECTED",
    ASK_GRATUITY = "ASK_GRATUITY",
    GRATUITY_ENTERED = "GRATUITY_ENTERED",
    BALANCE_QUERY_STARTED = "BALANCE_QUERY_STARTED",
    BALANCE_QUERY_COMPLETED = "BALANCE_QUERY_COMPLETED",
    LOAD_STARTED = "LOAD_STARTED",
    LOAD_COMPLETED = "LOAD_COMPLETED",
    PROVIDE_CARD_DETAILS = "PROVIDE_CARD_DETAILS",
    CARD_DETAILS_PROVIDED = "CARD_DETAILS_PROVIDED",
}
