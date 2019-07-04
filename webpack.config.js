const path = require("path");

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
