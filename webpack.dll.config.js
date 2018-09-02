const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'redux',
            'react-redux',
            'react-router-redux',
            'redux-thunk'
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].dll.js',
        library: '_dll_[name]' // 全局变量名，其他模块会从此变量上获取里面模块
    },
    // manifest是描述文件
    plugins: [
        new webpack.DllPlugin({
            name: '_dll_[name]',
            path: path.join(__dirname, 'build', 'manifest.json')
        })
    ]

    
};

