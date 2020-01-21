const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const Merge = require('webpack-merge-and-include-globally');

/**
 * This function is to merge the library files
 * into a single lib.js file
 */
function lib(mode)
{
    return mode === 'development' ? [
        './node_modules/react/umd/react.development.js',
        './node_modules/react-dom/umd/react-dom.development.js',
        './node_modules/redux/dist/redux.js'
    ] : [
        './node_modules/react/umd/react.production.min.js',
        './node_modules/react-dom/umd/react-dom.production.min.js',
        './node_modules/redux/dist/redux.min.js'
    ];

}

module.exports = (env, opts) => {
    const mode = opts.mode || 'development';
    return {
        devtool: 'inline-source-map',
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist/js')
        },

        plugins: [
            new CleanWebpackPlugin(),
            new Merge({
                files: {
                    'lib.js': lib(mode),
                    'fontawesome.js': [ './node_modules/@fortawesome/fontawesome-free/js/all.min.js' ]
                }
            })
        ],

        externals: {
            'react':'React',
            'react-dom': 'ReactDOM',
            'react-router':'ReactRouter',
            //'object-assign': 'Object.assign'
        }
    };
};
