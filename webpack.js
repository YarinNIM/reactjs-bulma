const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: './src/app.js',
        lib: './src/lib.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },

    plugins: [
        new CleanWebpackPlugin()
    ],

    externals: {
        //'react':'React',
        //'react-drom': 'ReactDOM',
        //'react-router':'ReactRouter',
        'object-assign': 'Object.assign'
    }
};
