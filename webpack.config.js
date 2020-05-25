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
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context: process.cwd(),
    mode: "production",
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "dist", "es5"),
        filename: "[name].js",
        library: "AdyenTerminalApi",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
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
