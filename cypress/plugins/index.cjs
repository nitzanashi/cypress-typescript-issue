module.exports = (...args) => {
    return import('./index.js').then((mod) => {
        return mod.default(...args);
    });
};
