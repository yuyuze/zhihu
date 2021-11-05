//配置反向代理
const {createProxyMiddleware} = require('http-proxy-middleware')
//
module.exports = function(app) {
    // /api 表示代理路径
    // target 表示目标服务器的地址
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:3001/',
            // 跨域时一般都设置该值 为 true
            changeOrigin: true,
            // 重写接口路由
            pathRewrite: {
                '^/api': ''
            }
        })
    )
}
