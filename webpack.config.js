const path = require("path");

const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const webpackPlugins = [
    /*
    new CopyPlugin(
      {
          patterns: [
              { from: "./public", to: "./dist" },
          ],
      }
    ),
    */
    new ESLintPlugin(
        {
            extensions: ["tsx", "ts", "jsx", "js"],
            files: [
                "./src/**/*.ts", "./src/**/*.tsx",
                "./src/**/*.js", "./src/**/*.jsx"
            ],
        }
    ),
    new HtmlWebpackPlugin(
        {
            template: "src/index.html",
            chunks: ["index"],
            publicPath: 'auto',
        }
    ),
    new MiniCSSExtractPlugin(
        {
            filename: '[name].[hash].css',
            chunkFilename: "[id].css"
        }
    ),
    new webpack["ProvidePlugin"](
        {
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            Buffer: ["buffer", "Buffer"],
            process: 'process/browser',
        }
    ),
    new webpack["DefinePlugin"](
        {
            "process.env": {
                NODE_ENV: process.env.NODE_ENV,
            },
        }
    ),
];

const config = {
    entry: {
        index: ["./src/scripts/index.tsx", "./src/styles/all.scss"],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    externals: {},
    performance: {
        hints: false,
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        chunkFilename: '[name].js',
        filename: "[name].[hash].js",
    },
    devServer: {
        open: true,
        host: "localhost",
    },
    optimization: {
        minimize : true,
        nodeEnv: false,
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    plugins: webpackPlugins,
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(ts|tsx)$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', "postcss-loader", "sass-loader"]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(svgt)$/i,
                type: "asset/source"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
        ],
    },
};

module.exports = () => {
    if (process.env.NODE_ENV === "production") {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};
