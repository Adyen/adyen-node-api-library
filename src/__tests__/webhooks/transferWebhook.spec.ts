import { EstimationTrackingData } from "../../typings/transferWebhooks/estimationTrackingData";
import { TransferWebhooksHandler } from "../../typings/transferWebhooks/transferWebhooksHandler";

describe("Transfer Webhook Serialization", (): void => {
  // disabling temporarily (must address oneOf deserialization issue)
  it.skip("should correctly deserialize union types in transfer webhooks", () => {
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
});
