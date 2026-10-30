import { EstimationTrackingData } from "../../typings/transferWebhooks/estimationTrackingData";
import { TransferData } from "../../typings/transferWebhooks/transferData";
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

  test("should deserialize transfer webhook with interest category and interestPayout type", () => {
    const webhookData = {
      data: {
        id: "test-transfer-id",
        category: "interest",
        type: "interestPayout",
      },
      type: "balancePlatform.transfer.created",
    };

    const transferWebhooksHandler = new TransferWebhooksHandler(
      JSON.stringify(webhookData)
    );
    const transferNotification =
      transferWebhooksHandler.getTransferNotificationRequest();

    expect(transferNotification.data.category).toBe(
      TransferData.CategoryEnum.Interest
    );
    expect(transferNotification.data.type).toBe(
      TransferData.TypeEnum.InterestPayout
    );
  });
});
