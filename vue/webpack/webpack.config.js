var webpack=require('webpack');
var ExtractTextPlugin=require("extract-text-webpack-plugin");
var extractCSS=new ExtractTextPlugin('css/index.css');
var HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:{
        app:__dirname+'/src/js/index.js'
    },
    output:{
        path:__dirname+"/assets/",
        filename:"js/[name].js",
    },
    devServer:{
        contentBase:"./",
        host:'192.168.1.10',
        port:'3333',
        color:true
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue'
            },{
                test:/\.json$/,
                loader:"json"
            },{
                test:/\.css/,
                loader:extractCSS.extract("style-loader","css-loader")
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        extractCSS,
        new HtmlWebpackPlugin({
            title:'wos',
            filename:'../index.html',
            template:__dirname+'/src/tpl/index.html',
            inject:'body',
            info:'Hello World'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names:['a','b']
        })
    ]
}