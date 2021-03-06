module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "@/scss/variables.scss";`
            },
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/profile/'
        : '/'
};