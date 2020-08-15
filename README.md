##webpack4.x 相关配置
-本地安装
```
npm i webpack webpack-cli -D
```
-配置文件
新建文件夹 webpack.config.js  
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { env } = require('process');
// const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode : 'development', //dev环境
    entry: './index.js',  // 入口文件
    output: {
        filename: 'bundle.js',  //输出文件名
        path: path.resolve(__dirname,'./dist') //打包之后生成目录
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/'
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin()

    ]
};
```