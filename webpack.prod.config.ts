import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const config: Configuration = {
    mode: "production", // environment (development or production) 
    entry: "./src/index.tsx", //first runtime
    output: {
        path: path.resolve(__dirname, 'dist'), //position in folder dist
        filename: '[name].[contenthash].js', //file name
        publicPath: '',
    },
    //module, add process bundle at application running  
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i, //search all file extention js/ts (x)
                exclude: /node_modules/, //no need to search
                use: {
                    loader: "babel-loader"  // if find => babel-loader plugin handle these files. that can Loads ES2015+ code and transpiles to ES5 using Babel
                },
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html", //creates the HTML file
        }),
        new ESLintPlugin({ //enable the Webpack process to lint the code with ESLint.
            extensions: ["js", "jsx", "ts", "tsx"]
        }),
        new CleanWebpackPlugin()
    ],
};

export default config;