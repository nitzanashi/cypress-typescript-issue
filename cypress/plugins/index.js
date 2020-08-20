import webpack from '@cypress/webpack-preprocessor/dist/index.js';
import path from "path";

const plugins = async (on, config) => {
    const webpackOptions = (await import(path.resolve('cypress/webpack.config.js'))).default;
    on('file:preprocessor', webpack({webpackOptions}));
}

export default plugins;
