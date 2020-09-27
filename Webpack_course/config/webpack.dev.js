const path = require('path');// const common = require('./webpack.common.js')();


module.exports = {
    mode: 'development',
    entry: { index: path.resolve(__dirname, "source", "index.js"),
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist"
        // everything will be served out of dist when the devServer is ran.
    }
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 {
    //                     loader: "style-loader"
    //                 },
    //                 {
    //                     loader: "css-loader"
    //                 }
    //             ]
    //         }
    //     ]
    // }
};