import * as path from 'path';
import webpack from 'webpack';
// import merge from 'webpack-merge';
// import HtmlPlugin from 'html-webpack-plugin';

/**
 * @param {Record<string, any>} env
 * @returns {Promise<import('webpack').Configuration>}
 */
export default (env = {}) => {

    let config = {
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: [/node_modules/],
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    }],
                },
            ],
        },
    }

    // let config = {};
    //
    // if (env.production) {
    //     htmlOptions = {
    //         ...htmlOptions,
    //         filename: '../index.html',
    //     };
    //
    //     config = merge(config, {
    //         output: {
    //             // Required by the server's resolution strategy.
    //             path: path.resolve(PATH_PROJECT_DIST, 'sandbox'),
    //             publicPath: '/sandbox/',
    //         },
    //     });
    // }
    //
    // // @ts-ignore
    // htmlOptions.templateParameters.__SELF__ = htmlOptions.templateParameters;
    //
    // config = merge(config, {
    //     entry: {
    //         sandbox: paths.PROJECT_SOURCE,
    //     },
    //     resolve: {
    //         alias: {
    //             '@sandbox': paths.PROJECT_SOURCE,
    //         },
    //     },
    //     plugins: [
    //         new webpack.DefinePlugin(injectable({
    //             ...globals,
    //             VOD_ENABLED: true,
    //         })),
    //         new HtmlPlugin(htmlOptions),
    //     ],
    // });
    //
    // return merge(commonConfig, config);
    return config;
};
