module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/tests/integration"],
    testMatch: ["**/*.spec.ts"],
    setupFiles: ["dotenv/config"],
    testTimeout: 30000,
    transform: {
        ".ts": ["ts-jest", {
            compiler: "ttypescript"
        }]
    },
    transformIgnorePatterns: ["^.+\\.js$"]
};
