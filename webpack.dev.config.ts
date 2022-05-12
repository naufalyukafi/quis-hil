import path from "path";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
    mode: "development", // environment (development or production) 
    entry: "./src/index.tsx", //first runtime
    output: {
        publicPath: "/"
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
            //style loader will take this string and will embed it in the style tag in index.html
            //css-loader will take all the CSS from the CSS file and generate it to a single string
            {
                test: /\.(s(a|c)ss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            //url-loader to inline a file into the bundle as a data URI
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
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
        // new HotModuleReplacementPlugin(), // auto reload
        new ESLintPlugin({ //enable the Webpack process to lint the code with ESLint.
            extensions: ["js", "jsx", "ts", "tsx"]
        }),
    ],
    devtool: "inline-source-map",
    devServer: {
        static: path.join(__dirname, "public"),
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: true
    },
};

export default config;