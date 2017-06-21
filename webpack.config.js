var path = require('path');
var webpack = require('webpack');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var NODE_ENV = process.env.NODE_ENV || 'development';
NODE_ENV = NODE_ENV.trim();

if (NODE_ENV == 'prod') {
    module.exports = {
        devtool: 'cheap-module-eval-source-map',
        entry: [
            'babel-polyfill',
            './src/index',
        ],
        output: {
            path: path.join(__dirname, 'static'),
            filename: 'bundle.js',
            publicPath: '/static/'
        },
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new NpmInstallPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                },
            }),
        ],
        module: {
            preLoaders: [
                {
                    test: /\.js$/,
                    loaders: ['eslint'],
                    include: [
                        path.resolve(__dirname, "src"),
                    ],
                }
            ],
            loaders: [
                {
                    loaders: ['babel-loader'],
                    include: [
                        path.resolve(__dirname, "src"),
                    ],
                    test: /\.js$/,
                    plugins: ['transform-runtime'],
                },
                // {
                //     test: /\.css$/,
                //     loaders:['react-hot',"style","css","sass"],
                //     loader: "style-loader!css-loader!postcss-loader!autoprefixer?browsers=last 10 versions",
                //     include: [
                //         path.resolve(__dirname, "src"),
                //     ],
                // },
                {
                    test: /\.scss$/,
                    loaders:["style","css","sass"],
                    loader: "style-loader!css-loader!autoprefixer?browsers=last 10 versions!sass-loader",
                    include: [
                        path.resolve(__dirname, "src"),
                    ],
                }
            ]
        }
    };
} else {
    module.exports = {
        devtool: 'cheap-module-eval-source-map',
        entry: [
            'webpack-hot-middleware/client',
            'babel-polyfill',
            './src/index',
        ],
        output: {
            path: path.join(__dirname, 'static'),
            filename: 'bundle.js',
            publicPath: '/static/'
        },
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new NpmInstallPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                },
            }),
        ],
        module: {
            preLoaders: [
                {
                    test: /\.js$/,
                    loaders: ['eslint'],
                    include: [
                        path.resolve(__dirname, "src"),
                    ],
                }
            ],
            loaders: [
                {
                    loaders: ['react-hot', 'babel-loader'],
                    include: [
                        path.resolve(__dirname, "src"),
                    ],
                    test: /\.js$/,
                    plugins: ['transform-runtime'],
                },
                // {
                //     test: /\.css$/,
                //     loaders:['react-hot',"style","css","sass"],
                //     loader: "style-loader!css-loader!postcss-loader!autoprefixer?browsers=last 10 versions",
                //     include: [
                //         path.resolve(__dirname, "src"),
                //     ],
                // },
                {
                    test: /\.scss$/,
                    loaders:['react-hot',"style","css","sass"],
                    loader: "style-loader!css-loader!autoprefixer?browsers=last 10 versions!sass-loader",
                    include: [
                        path.resolve(__dirname, "src"),
                    ],
                }
            ]
        }
    };
}
// module.exports = {
//     devtool: 'cheap-module-eval-source-map',
//     entry: [
//         'webpack-hot-middleware/client',
//         'babel-polyfill',
//         './src/index',
//     ],
//     output: {
//         path: path.join(__dirname, 'static'),
//         filename: 'bundle.js',
//         publicPath: '/static/'
//     },
//     plugins: [
//         new webpack.optimize.OccurenceOrderPlugin(),
//         new webpack.HotModuleReplacementPlugin(),
//         new NpmInstallPlugin(),
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warnings: false,
//             },
//         }),
//     ],
//     module: {
//         preLoaders: [
//             {
//                 test: /\.js$/,
//                 loaders: ['eslint'],
//                 include: [
//                     path.resolve(__dirname, "src"),
//                 ],
//             }
//         ],
//         loaders: [
//             {
//                 loaders: ['react-hot', 'babel-loader'],
//                 include: [
//                     path.resolve(__dirname, "src"),
//                 ],
//                 test: /\.js$/,
//                 plugins: ['transform-runtime'],
//             },
//             // {
//             //     test: /\.css$/,
//             //     loaders:['react-hot',"style","css","sass"],
//             //     loader: "style-loader!css-loader!postcss-loader!autoprefixer?browsers=last 10 versions",
//             //     include: [
//             //         path.resolve(__dirname, "src"),
//             //     ],
//             // },
//             {
//                 test: /\.scss$/,
//                 loaders:['react-hot',"style","css","sass"],
//                 loader: "style-loader!css-loader!autoprefixer?browsers=last 10 versions!sass-loader",
//                 include: [
//                     path.resolve(__dirname, "src"),
//                 ],
//             }
//         ]
//     }
// };