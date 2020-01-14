const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const Merge = require('webpack-merge-and-include-globally');

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
    ]

}

module.exports = (env, options) => {
    const mode = options.mode || 'development';
    return {
        devtool: 'inline-source-map',
        entry: {
            app: './src/app.js'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, './dist')
        },

        plugins: [
            new CleanWebpackPlugin(),
            new Merge({
                files: {
                    'lib.js': lib(mode),
                    'fontawesome.js': [
                        './node_modules/@fortawesome/fontawesome-free/js/all.min.js'
                    ]
                }
            })
        ],

        externals: {
            'react':'React',
            'react-drom': 'ReactDOM',
            'react-router':'ReactRouter',
            'object-assign': 'Object.assign'
        }
    }
};
