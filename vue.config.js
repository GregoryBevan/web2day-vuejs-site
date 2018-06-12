module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/Web2day-vuejs/'
        : '/',
    configureWebpack: config => {
        // ...
    }
};