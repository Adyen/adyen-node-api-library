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

const path = require("path");

module.exports = {
    context: process.cwd(),
    mode: "production",
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "dist", "es5"),
        filename: "[name].js",
        library: "Adyen",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [{
                    loader: "ts-loader",
                }]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    target: "node"
};
