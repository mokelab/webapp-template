module.exports = {
    mode: "development",
    //mode: 'production',

    entry: "./src/main.ts",

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: false,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: [".ts", ".js"]
    }
};
