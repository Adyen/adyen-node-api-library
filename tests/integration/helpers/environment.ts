interface SharedIntegrationTestEnvironment {
    apiKey: string;
    merchantAccount: string;
}

export function requireEnvironmentVariables<T extends string>(
    names: readonly T[]
): Record<T, string> {
    const missingVariables = names.filter((name) => !process.env[name]);

    if (missingVariables.length > 0) {
        throw new Error(
            `Missing required integration test environment variables: ${missingVariables.join(", ")}`
        );
    }

    const environment = {} as Record<T, string>;
    names.forEach((name) => {
        environment[name] = process.env[name]!;
    });

    return environment;
}

export function getSharedIntegrationTestEnvironment(): SharedIntegrationTestEnvironment {
    const environment = requireEnvironmentVariables([
        "ADYEN_API_KEY",
        "ADYEN_MERCHANT_ACCOUNT"
    ] as const);

    return {
        apiKey: environment.ADYEN_API_KEY,
        merchantAccount: environment.ADYEN_MERCHANT_ACCOUNT
    };
}
