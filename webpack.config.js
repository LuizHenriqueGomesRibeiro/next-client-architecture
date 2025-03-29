const path = require('path');

module.exports = {
    entry: "./src/services/api/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: "MyLibrary",
        libraryTarget: "umd",
        clean: true, 
    },
    module: {
      rules: [
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: "ts-loader",
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
            },
        },
      ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    externals: {
        react: "react",
        "react-dom": "react-dom",
    },
};