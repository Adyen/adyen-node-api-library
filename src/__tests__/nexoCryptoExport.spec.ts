import { NexoCrypto } from "../index";
import NexoCryptoDirect from "../security/nexoCrypto";

describe("NexoCrypto export", (): void => {
    test("NexoCrypto is exported from the package index", (): void => {
        expect(NexoCrypto).toBeDefined();
    });

    test("NexoCrypto export is the same class as the direct import", (): void => {
        expect(NexoCrypto).toBe(NexoCryptoDirect);
    });

    test("NexoCrypto can be instantiated from the package export", (): void => {
        const instance = new NexoCrypto();
        expect(instance).toBeInstanceOf(NexoCrypto);
        expect(typeof instance.decrypt).toBe("function");
    });

    test("NexoCrypto.encrypt static method is accessible from the package export", (): void => {
        expect(typeof NexoCrypto.encrypt).toBe("function");
    });
});
