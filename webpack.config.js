const path = require("path");
const outputPath = path.resolve(__dirname, "dist");

module.exports = {
    mode: "development",
    //mode: 'production',

    entry: "./src/main.ts",

    output: {
        publicPath: "/",
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: false,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: false,
                            includePaths: ["./node_modules"],
                        },
                    },
                ],
            },
        ],
    },

    resolve: {
        extensions: [".ts", ".js"],
    },

    devServer: {
        contentBase: outputPath,
        historyApiFallback: {
            index: "index.html",
        },
    },
};
