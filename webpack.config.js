let path=require('path');
let HtmlwebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Happypack = require('happypack');
const happypackThreadPool = Happypack.ThreadPool({size:4});//size:os.cpus().Lengt根据电脑的idle，配置当前最大的线程数量


module.exports = {
    entry:{
        app:[ 
                //'webpack-dev-server/client?http://localhost:8080',  // 热更新监听此地址                                                     
                //'webpack/hot/dev-server',  // 启用热更新
                path.resolve(__dirname, 'src', 'app')  
               ]        
           },
    output: {
        filename:'bundle.js',
        path:path.resolve(__dirname,'build'),
    },
    optimization: {
        minimizer: [
          new UglifyJsPlugin()
        ]
      },

    module:{
        rules:[
        {
            test:/\.css$/,
            //use:['style-loader','css-loader'],
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader"
              ],
        },
        {
            test:/\.less$/,        
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader","postcss-loader","less-loader"
              ],
    
        },
           {
            test:/\.scss$/,        
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader","postcss-loader","sass-loader"
              ],
        },
        {   //配置辅助loader,处理图片  
            test:/\.(png|jpg|gif)$/,
            loader:'url-loader',
            options:{limit:8192,name:"images/[name].[ext]"}
        },
        { //处理图片外的其他文件类型
            test:/\.(appcache|svg|eot|ttf|woff|woff2|mp3|pdf)(\?|$)/,
            include:path.resolve(__dirname,'src'),
            loader:'file-loader?name=[name].[ext]' 
        },
        {
            test:/\.js$/,
            enforce:'pre',
            loader:'eslint-loader',
            include:path.resolve(__dirname,'src')
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'happypack/loader?id=happybabel',
        },
    ]
    },

    plugins:[
        new HtmlwebpackPlugin({
            title:'Frontend',
            filename: "index.html",
           /* 全部都是可选项
            template:'', 模板文件路径
            inject:true|'body'|'head'|'false', 设置为 true|'body':js文件引入的位置为body的结束标签之前
            favicon:'',  设置html的icon图标
            minify:{}|false, 暂时不理解这个参数的使用
            hash:true|false,  将添加唯一的webpack编译hash到所有包含的脚本和css文件
            cache:true|false, 默认为true，仅仅在文件修改之后才会发布
            showErrors:true|false, 默认为true，错误信息写入HTML页面中
            chunks: 允许添加某些块（比如unit test）
            chunksSortMode: 允许控制块在添加到页面之前的排序方式
            excludeChunks: 允许跳过模型块，比如单元测试块
          */
        }),
       
        new MiniCssExtractPlugin({
            filename: "style.css",
          }),

        new Happypack({
            id:'happybabel',
            loaders:['babel-loader'],
            threadPool:happypackThreadPool,
            verbose:true
        }),
       

        
        //new webpack.HotModuleReplacementPlugin()//热更新配套插件
    
        ],
        
resolve:{
    extensions:['.js','jsx','less','.css','.scss']//后缀名自动补全
},
devtool:'eval-soure-map',

}