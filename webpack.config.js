let path=require('path');
let htmlWebpackPlugin=require('html-webpack-plugin');
let ExtractTextWebpackPlugin=require('extract-text-webpack-plugin');
let extract=new ExtractTextWebpackPlugin('build.css');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let isDev=process.env.NODE_ENV==='develop';

//上线打包步骤  整合分离CSS 压缩代码(Uglify)
//css里的背景图片会自动打包，只有img里面的图片需要require，css里的通过../获取图片即可
module.exports={
    entry:{
        index:'./src/index.js',
        vendor:['react','react-dom','redux','react-redux','react-router-dom']
    },
    output:{
        filename:'[name].bundle.js',
        //生成文件后，静态文件访问路径，根据后台配置静态文件目录获取 /代表静态文件目录，静态文件的根目录，所以HTML文件是"/"什么文件
        publicPath:isDev?'http://localhost:4000/':'/',
        path:path.resolve('./dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.less$/,
                use:extract.extract(['css-loader',{
                    loader:'postcss-loader',
                    //这个属性的位置不能动,完善css样式代码,补全兼容代码，在npm,postcss-loader中查看
                    options:{
                        plugins:[
                            require('autoprefixer') //添加css前缀,补全兼容前缀
                        ]
                    }
                },'less-loader'])
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:'url-loader?limit=8192'
            }
        ]
    },
    plugins:[
        extract,
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            chunks:['index','vendor'],
            inject:true
        }),
        new UglifyJSPlugin()
    ],
    devtool:isDev?'source-map':'',
    devServer:{
            proxy:{
                '/api':'http://localhost:3000'
            }
    }
}