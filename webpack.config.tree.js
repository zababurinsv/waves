module.exports = {
    mode: 'development',
    entry: {
        index: `${__dirname}/app.tree.mjs`
    },
    output: {
        path: __dirname + "/temp",
        filename: 'tree-bundle.mjs',
        chunkFilename: 'tree-bundle.mjs',
        library: 'waves'
    }
};
