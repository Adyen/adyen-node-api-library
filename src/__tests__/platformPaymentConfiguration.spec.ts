import { PlatformPaymentConfiguration } from "../typings/balancePlatform/platformPaymentConfiguration";
import { BalanceAccountInfo } from "../typings/balancePlatform/balanceAccountInfo";

describe("PlatformPaymentConfiguration", (): void => {
    describe("lockedCurrency field", (): void => {
        it("should support lockedCurrency property", (): void => {
            const config = new PlatformPaymentConfiguration();
            config.lockedCurrency = "CAD";
            config.salesDayClosingTime = "02:00";
            config.settlementDelayDays = 3;

            expect(config.lockedCurrency).toBe("CAD");
            expect(config.salesDayClosingTime).toBe("02:00");
            expect(config.settlementDelayDays).toBe(3);
        });

        it("should include lockedCurrency in attributeTypeMap", (): void => {
            const attributeTypeMap = PlatformPaymentConfiguration.getAttributeTypeMap();
            const lockedCurrencyAttr = attributeTypeMap.find(attr => attr.name === "lockedCurrency");
            
            expect(lockedCurrencyAttr).toBeDefined();
            expect(lockedCurrencyAttr?.baseName).toBe("lockedCurrency");
            expect(lockedCurrencyAttr?.type).toBe("string");
        });

        it("should work with BalanceAccountInfo", (): void => {
            const balanceAccountInfo = new BalanceAccountInfo();
            balanceAccountInfo.accountHolderId = "AH123456";
            
            const platformConfig = new PlatformPaymentConfiguration();
            platformConfig.lockedCurrency = "CAD";
            
            balanceAccountInfo.platformPaymentConfiguration = platformConfig;
            
            expect(balanceAccountInfo.platformPaymentConfiguration?.lockedCurrency).toBe("CAD");
        });
    });
});