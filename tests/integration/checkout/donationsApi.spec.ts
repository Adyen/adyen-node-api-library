import { Types } from "../../../src";
import { createCheckoutTestContext } from "./setup";

describe("Checkout DonationsApi", (): void => {
    const { checkout, merchantAccount } = createCheckoutTestContext();

    // Scenario: Get donation campaigns
    test("donationCampaigns returns active campaigns", async (): Promise<void> => {
        const request: Types.checkout.DonationCampaignsRequest = {
            merchantAccount,
            currency: "EUR"
        };

        const response = await checkout.DonationsApi.donationCampaigns(request);

        expect(response.donationCampaigns).toEqual(expect.any(Array));
    });
});
