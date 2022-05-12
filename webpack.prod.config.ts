import path from "path"
import { Configuration } from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ESLintPlugin from "eslint-webpack-plugin"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"

const config: Configuration = {
    mode: "production", // environment (development or production) 
    entry: "./src/index.tsx", //first runtime
    output: {
        path: path.resolve(__dirname, 'dist'), //position in folder dist
        filename: '[name].[contenthash].js', //file name
        publicPath: '',
        assetModuleFilename: "images/[hash][ext][query]",
    },
    //module, add process bundle at application running  
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ts|js)x?$/i, //search all file extention js/ts (x)
                exclude: /node_modules/, //no need to search
                use: {
                    loader: "babel-loader"  // if find => babel-loader plugin handle these files. that can Loads ES2015+ code and transpiles to ES5 using Babel
                },
            },
            //css-loader will take all the CSS from the CSS file and generate it to a single string
            //mini css creates a CSS file per JS file which contains CSS
            {
                test: /\.(s(a|c)ss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        preferRelative: true,
        alias: {
            "@/*": path.resolve(__dirname, "src/**"),
        },
        plugins: [new TsconfigPathsPlugin({})]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html", //creates the HTML file
        }),
        new ESLintPlugin({ //enable the Webpack process to lint the code with ESLint.
            extensions: ["js", "jsx", "ts", "tsx"]
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        })
    ],
};

export default config;