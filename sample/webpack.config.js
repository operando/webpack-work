module.exports = {
    // 指定しない場合 src/index.jsがエントリーポイント、dist/main.jsが出力になる
    entry: './src/index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js'
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: "ts-loader",
            include: __dirname
        }]
    },
    mode: 'development',
    devServer: {
        contentBase: 'dist',
        open: true
    }
}