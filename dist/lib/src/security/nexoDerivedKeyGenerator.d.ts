import { NexoDerivedKey } from "../typings/terminal/models";
declare class NexoDerivedKeyGenerator {
    static deriveKeyMaterial(passphrase: string): NexoDerivedKey;
    private static readKeyData;
}
export default NexoDerivedKeyGenerator;
