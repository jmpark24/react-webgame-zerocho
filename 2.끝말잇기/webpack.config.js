const path = require('path');  // node.js에서 경로 쉽게 쓸수 있게 해주는거
const webpack = require('webpack');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name : 'wordrelay-setting',
    mode : 'development', //실서비스 : production
    devtool : 'eval', // 그냥 빠르게 하겠다는거
    resolve : {
        extensions : ['.js','.jsx']
    },

    entry: {
        app: ['./client'],
    }, // 입력
    module: {
        rules: [{
            test: /\.jsx?/,     //js파일이랑 jsx파일에 룰을 적용하겠다
            loader: 'babel-loader',      //어떤룰? babel룰 
            options: {
                presets: [
                    '@babel/preset-env', 
                    '@babel/preset-react'
                ],
                plugins: [
                    'react-refresh/babel'
                ],
            },
        }],
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],
    output: {
        path: path.join(__dirname,'dist'),  // join은 경로 합쳐주는거, 실제 경로 넣어도 됨
        filename: 'app.js',
        publicPath: '/dist/'
    }, // 출력
    devServer: {
        devMiddleware: { publicPath: '/dist'},
        static: { directory:path.join(__dirname)},
        hot: true,
        liveReload: false
    }
};