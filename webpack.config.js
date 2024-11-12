const path = require('path');
const TeserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'resources', 'client', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'src', 'public', 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    mode: 'production'
    // optimization: {
    //     minimize: true,
    //     minimizer: [new TeserPlugin()],
    // }
}