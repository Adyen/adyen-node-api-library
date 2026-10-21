import { EstimationTrackingData } from "../../typings/transferWebhooks/estimationTrackingData";
import { IssuedCard } from "../../typings/transferWebhooks/issuedCard";
import { Modification } from "../../typings/transferWebhooks/modification";
import { NetworkReason } from "../../typings/transferWebhooks/networkReason";
import { TransferData } from "../../typings/transferWebhooks/transferData";
import { TransferEvent } from "../../typings/transferWebhooks/transferEvent";
import { TransferWebhooksHandler } from "../../typings/transferWebhooks/transferWebhooksHandler";
import { USAchTracingData } from "../../typings/transferWebhooks/uSAchTracingData";

describe("Transfer Webhook Serialization", (): void => {
  test("should correctly deserialize union types in transfer webhooks", () => {
    // Simplest possible webhook with just the fields we need to test
    const webhookData = {
      data: {
        id: "test-transfer-id",
        tracking: {
          estimatedArrivalTime: "2025-04-23T22:30:00+02:00",
          type: "estimation",
        },
      },
      type: "balancePlatform.transfer.updated",
    };

    const jsonString = JSON.stringify(webhookData);
    const transferWebhooksHandler = new TransferWebhooksHandler(jsonString);
    const transferNotification =
      transferWebhooksHandler.getTransferNotificationRequest();

    if (transferNotification.data.tracking?.type === "estimation") {
      // Verify that the tracking object is properly deserialized to the correct type
      expect(transferNotification.data.tracking).toBeInstanceOf(
        EstimationTrackingData
      );

      // Verify that estimatedArrivalTime is properly converted to a Date object
      expect(
        transferNotification.data.tracking.estimatedArrivalTime
      ).toBeInstanceOf(Date);
    }
  });

  test("should correctly deserialize union types for tracing in transfer webhooks", () => {
    // Simplest possible webhook with just the fields we need to test
    const webhookData = {
      data: {
        id: "test-transfer-id",
        tracing: {
          traceNumber: "123456789012345",
          type: "usAch",
        },
      },
      type: "balancePlatform.transfer.updated",
    };

    const jsonString = JSON.stringify(webhookData);
    const transferWebhooksHandler = new TransferWebhooksHandler(jsonString);
    const transferNotification =
      transferWebhooksHandler.getTransferNotificationRequest();

    if (transferNotification.data.tracing?.type === "usAch") {
      // Verify that the tracing object is properly deserialized to the correct type
      expect(transferNotification.data.tracing).toBeInstanceOf(
        USAchTracingData
      );

      // Verify that traceNumber is properly deserialized
      expect(transferNotification.data.tracing.traceNumber).toBe(
        "123456789012345"
      );
    }
  });

  test("should deserialize a transfer webhook with reversalReceived status, fxSell type, and usAchCorrectionReasonCode networkReason", () => {
    const webhookData = {
      data: {
        id: "test-transfer-id",
        amount: { currency: "EUR", value: 1000 },
        category: "bank",
        status: "reversalReceived",
        type: "fxSell",
        networkReason: {
          code: "C01",
          description: "ACH correction requested",
          namespace: "usAchCorrectionReasonCode",
        },
        events: [
          {
            id: "EVT00000000000000000000001",
            status: "reversalReceived",
            type: "tracing",
            modification: {
              id: "MOD00000000000000000000001",
              direction: "outgoing",
              status: "reversalReceived",
              type: "captureReversal",
            },
          },
        ],
      },
      type: "balancePlatform.transfer.updated",
    };

    const transferWebhooksHandler = new TransferWebhooksHandler(
      JSON.stringify(webhookData)
    );
    const transferNotification =
      transferWebhooksHandler.getTransferNotificationRequest();

    expect(transferNotification.data.status).toBe(
      TransferData.StatusEnum.ReversalReceived
    );
    expect(transferNotification.data.type).toBe(TransferData.TypeEnum.FxSell);
    expect(transferNotification.data.networkReason?.namespace).toBe(
      NetworkReason.NamespaceEnum.UsAchCorrectionReasonCode
    );

    const event = transferNotification.data.events?.[0];
    expect(event).toBeInstanceOf(TransferEvent);
    expect(event?.status).toBe(TransferEvent.StatusEnum.ReversalReceived);
    expect(event?.type).toBe(TransferEvent.TypeEnum.Tracing);
    expect(event?.modification).toBeInstanceOf(Modification);
    expect(event?.modification?.status).toBe(
      Modification.StatusEnum.ReversalReceived
    );
  });

  test("should deserialize categoryData as IssuedCard with networkVariant", () => {
    const webhookData = {
      data: {
        id: "test-transfer-id",
        amount: { currency: "EUR", value: -2700 },
        category: "issuedCard",
        categoryData: {
          type: "issuedCard",
          networkVariant: "maestro_us",
          panEntryMode: "contactless",
          processingType: "pos",
        },
      },
      type: "balancePlatform.transfer.updated",
    };

    const transferWebhooksHandler = new TransferWebhooksHandler(
      JSON.stringify(webhookData)
    );
    const transferNotification =
      transferWebhooksHandler.getTransferNotificationRequest();

    const categoryData = transferNotification.data.categoryData;
    expect(categoryData).toBeInstanceOf(IssuedCard);
    expect((categoryData as IssuedCard).networkVariant).toBe(
      IssuedCard.NetworkVariantEnum.MaestroUs
    );
    expect((categoryData as IssuedCard).panEntryMode).toBe(
      IssuedCard.PanEntryModeEnum.Contactless
    );
    expect((categoryData as IssuedCard).processingType).toBe(
      IssuedCard.ProcessingTypeEnum.Pos
    );
  });
});
