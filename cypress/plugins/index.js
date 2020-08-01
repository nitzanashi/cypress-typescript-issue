import webpack from '@cypress/webpack-preprocessor/dist/index.js';
import path from "path";

const plugins = async (on, config) => {
    const webpackConfig = (await import(path.resolve('cypress/webpack.config.js'))).default;
    on('file:preprocessor', webpack({webpackOptions: webpackConfig()}));
}

export default plugins;
