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
 *
 * Adyen Node API Library
 *
 * Copyright (c) 2019 Adyen B.V.
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
    setupFiles: ["<rootDir>config.ts"],
    unmockedModulePathPatterns: [
        "/dist"
    ],
    testMatch: [
        "**/__tests__/*.ts"
    ],
    testPathIgnorePatterns : [
        "/node_modules",
        "/dist"
    ],
    transform: {
        ".ts": "ts-jest"
    },
    globals: {
        "ts-jest": {
            compiler: "ttypescript"
        }
    }
};
