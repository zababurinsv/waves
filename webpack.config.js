module.exports = {
    mode: 'development',
    entry: {
        index: `${__dirname}/app.waves.mjs`
    },
    output: {
        path: __dirname + "/temp",
        filename: 'waves.mjs',
        chunkFilename: 'waves.mjs',
        library: 'waves'
    }
};
