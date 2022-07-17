const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path')

module.exports = {
    // 可以自動產出index.html 或是載入html模板，和把js自動載入進去index.html
    plugins: [new MiniCssExtractPlugin({
        filename: 'index.[hash].css',
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    // 自動清除dist 輸出目錄
    new CleanWebpackPlugin(),
    // 壓縮
    new CompressionPlugin(),
    ],
    // 模式 production模式下輸出的文件，最後會是排版緊湊和壓縮過較輕量檔案
    // prodution模式還會觸法tree shaking(沒有引用到的export的東西就不會載入)
    // 模式 development模式下不會壓縮，可以較好debug
    mode: 'development',
    // 需要載入讀取的檔案
    // css-loader需要安裝才可以載入css檔案
    module: {
        rules: [
            {
                test: /\.css$|\.scss$/i,
                // use: ['style-loader', 'css-loader'],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
            },
            {
                test: /\.(gif|png|jpeg|jpg)/,
                type: 'asset/resource' // 載入圖片
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ],
    },
    // 入口文件
    entry: './src/index.js',
    // 輸出文件
    output: {
        path: path.resolve(__dirname, 'docs'), // 輸出的路徑
        filename: 'index.[hash].js' // 輸出命名的檔案
    },

    devtool: 'source-map' // 可以讓瀏覽器看到原始的js，不是編譯過後的
}