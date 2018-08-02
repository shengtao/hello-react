const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// module.exports = {
//     entry: './app/src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'app/dist')
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: {
//                     loader: 'babel-loader'
//                 }
//             }
//         ]
//     }
// };

module.exports = {
    entry: './todo/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};