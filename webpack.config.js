const path = require('path')
module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    devServer: {
        contentBase: './dist',
        liveReload: true,
        writeToDisk: true
    }
}