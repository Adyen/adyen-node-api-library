export default {
    preset: "ts-jest",
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    coveragePathIgnorePatterns: [
        "<rootDir>/src/typings"
    ],
    setupFiles: ["<rootDir>config.ts", "dotenv/config"],
    testMatch: [
        "**/src/__tests__/**/*.spec.ts"
    ],
    roots: ['<rootDir>/src'],
    transform: {
        ".ts": "ts-jest"
    },
    globals: {
        "ts-jest": {
            compiler: "ttypescript",
            transformIgnorePatterns: ['^.+\\\\.js$']
        }
    },
};
