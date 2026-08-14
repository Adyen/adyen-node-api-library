# Integration test instructions

These instructions apply to all files under `tests/integration`.

## Purpose and structure

- Add real API integration tests only. Do not use mocks, Nock, or stubbed HTTP clients.
- Put each top-level service in its own lowercase directory.
- Use one `<apiClass>.spec.ts` file per generated API class, for example `checkout/paymentsApi.spec.ts` and `checkout/donationsApi.spec.ts`.
- Name the suite after both levels, for example `describe("Checkout PaymentsApi", ...)`.
- Extract service-specific setup shared by multiple files into that service directory, for example `checkout/setup.ts`.
- Reuse helpers from `helpers/`. Do not duplicate client or environment setup.
- Import the library through its public exports from `src`, not internal generated modules.
- Treat the API class represented by the feature as the system under test.
- Invoke each `When` operation through that API class. Other API classes may only arrange scenario prerequisites.
- Access generated API classes through the library's public service facade, for example `checkout.ModificationsApi`, rather than internal imports.

## Environment and secrets

- All requests must use `createIntegrationTestClient`, which always selects `EnvironmentEnum.TEST`.
- All suites must use the shared `ADYEN_API_KEY` and `ADYEN_MERCHANT_ACCOUNT` values through `getSharedIntegrationTestEnvironment()`.
- Do not introduce service-specific API key or merchant account variables.
- Declare additional non-credential resource identifiers with `requireEnvironmentVariables([...])` only when a suite needs them.
- Add placeholder entries to `.env.example`, grouped by service, when introducing variables.
- Never hardcode, print, snapshot, or commit API keys, credentials, tokens, or environment-specific resource IDs.
- Use descriptive names for additional resource identifiers, such as `ADYEN_BALANCE_PLATFORM_ID`.

## Test conventions

- Name tests `<method> <expected successful outcome>`.
- Bind the system-under-test API class to a descriptive local variable when a test uses multiple API classes.
- Use public request and response types from `Types`.
- Keep Arrange, Act, and Assert visually separated. Add comments only for non-obvious API constraints or cleanup behavior.
- Generate unique references with `randomUUID()` and keep them within API length limits.
- Make the smallest stable assertion that proves the endpoint succeeded:
  - creation: returned identifier and success status;
  - lookup: one stable identifying property;
  - payment: `pspReference` and successful `resultCode`.
- Do not assert complete responses or use snapshots. Optional fields and newly added response fields must not make tests fail.
- Do not add retries that can conceal product or API failures.

## Resource lifecycle

- Prefer test data and operations that do not create persistent resources.
- When a test creates persistent state, track the returned identifier and clean it up in `afterAll`.
- Cleanup must tolerate a test failing before resource creation and must not hide the original test failure.
- Never operate on production data or shared resource IDs that were not created for the test.

## Running tests

- `npm test` must remain isolated from integration tests.
- Run all integration tests with `npm run test:integration`.
- Run one service with `npm run test:integration -- <service>`.
- Integration tests fail fast when their required variables are missing.
