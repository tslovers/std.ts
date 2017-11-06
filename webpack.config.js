module.exports = {
    entry: './lib/std.js',
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: 'bundle/std.js',
        library: 'std'
    }
};