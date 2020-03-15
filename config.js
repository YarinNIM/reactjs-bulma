const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
/**
 * This function is to merge the library files
 * into a single lib.js file
 */

function js(file, ext = '.js')
{
    return './' + file + ext;
}

module.exports = (env, opts) => {
    const mode = opts.mode || 'development';
    return {
        devtool: 'inline-source-map',
        entry: {
            app: js('app'),
        },

        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist/js')
        },

        module: {
            rules: [
                { 
                    test: /\.js$/,
                    exclude: '/node_modules/',
                    loader: "babel-loader" 
                }
            ]
        },

        plugins: [
            new CopyPlugin([{
                from : './images',
                to: 'dist/images'
            }])
        ],

        externals: {
            'react':'React',
            'react-dom': 'ReactDOM',
            'react-router':'ReactRouter',
            //'object-assign': 'Object.assign'
        }
    };
};
