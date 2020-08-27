module.exports = {
    entry: "./widgets.jsx",
    output: {
        filename: "bundle.js"
    },
    devtool:"source-map",
    resolve: {
        extensions: [".js",".jsx","*"]
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/], //specifies file types to transpile
                exclude: /(node_modules)/, //leaves dependencies alone
                loader: 'babel-loader', //sets Babel as the transpiler
                query: {
                    presets:['@babel/env','@babel/react'] //tells Babel what syntaxes to translate
                }
            }
        ]
    }
}