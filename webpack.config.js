const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "dashboard.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                include: path.resolve(__dirname, "src")
            },
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Production',
        template: './template.html'
    })]
}   