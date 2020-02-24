const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_a', resolve('src/api'))
            .set('_v', resolve('src/views'))
            .set('_c', resolve('src/components'))
            .set('_u', resolve('src/utils'))
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000/api', //API服务器的地址
                ws: true, //代理websockets
                changeOrigin: true, // 虚拟的站点需要更管origin
                pathRewrite: { //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                    '^/api': ''
                }
            }
        }
    }
}