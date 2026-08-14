# Integration tests

These tests exercise the library's public API against Adyen's TEST environment. They are intentionally separate from the mocked unit tests under `src/__tests__`.

## Configure

Copy `.env.example` to `.env` and provide the shared TEST credentials. Every integration suite uses the same API key and merchant account. Real values must remain in local environment variables or the CI secret store and must never be committed.

Service setup reads the shared values through:

```ts
const environment = getSharedIntegrationTestEnvironment();
const client = createIntegrationTestClient(environment.apiKey);
```

Suites may use `requireEnvironmentVariables([...])` for additional non-credential resource identifiers. Do not introduce service-specific API key or merchant account variables.

## Run

```bash
# All integration tests, run serially
npm run test:integration

# Only tests matching a service path or name
npm run test:integration -- checkout
```

Missing variables cause the selected suite to fail before making an API request. Regular `npm test` never discovers this directory.

## Add a service

Create `tests/integration/<service>/<apiClass>.spec.ts`. When a top-level service has multiple generated API classes, keep one test file per API class and share service-specific setup through `<service>/setup.ts`.

Use this shape:

```ts
import { ExampleAPI, Types } from "../../../src";
import { createIntegrationTestClient } from "../helpers/client";
import {
    getSharedIntegrationTestEnvironment,
    requireEnvironmentVariables
} from "../helpers/environment";

describe("Example ExampleResourceApi", (): void => {
    const sharedEnvironment = getSharedIntegrationTestEnvironment();
    const serviceEnvironment = requireEnvironmentVariables([
        "ADYEN_EXAMPLE_RESOURCE_ID"
    ] as const);
    const client = createIntegrationTestClient(sharedEnvironment.apiKey);
    const service = new ExampleAPI(client);

    test("getResource returns the requested resource", async (): Promise<void> => {
        const response = await service.ExampleResourceApi.getResource(
            serviceEnvironment.ADYEN_EXAMPLE_RESOURCE_ID
        );

        expect(response.id).toBe(serviceEnvironment.ADYEN_EXAMPLE_RESOURCE_ID);
    });
});
```

Use the public request and response types appropriate to the service. Keep assertions narrow and stable. If a test creates persistent state, retain its identifier and clean it up safely in `afterAll`.
