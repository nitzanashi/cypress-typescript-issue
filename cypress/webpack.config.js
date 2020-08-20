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

    return config;
};
