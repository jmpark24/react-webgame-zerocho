const path = require('path');  // node.js에서 경로 쉽게 쓸수 있게 해주는거

module.exports = {
    name : 'gugudan_webpack',
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
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        }],
    },
    output: {
        path: path.join(__dirname),  // join은 경로 합쳐주는거, 실제 경로 넣어도 됨
        filename: 'app.js'
    }, // 출력
};