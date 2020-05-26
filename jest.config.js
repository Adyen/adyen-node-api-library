/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

module.exports = {
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
