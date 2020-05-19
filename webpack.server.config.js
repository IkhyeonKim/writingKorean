const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: {
        server: ['babel-polyfill', './src/server/server.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}