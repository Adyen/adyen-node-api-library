import {
    Client,
    Config,
    EnvironmentEnum
} from "../../../src";

export function createIntegrationTestClient(apiKey: string): Client {
    return new Client(new Config({
        apiKey,
        environment: EnvironmentEnum.TEST
    }));
}
