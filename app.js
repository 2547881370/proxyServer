const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
var koaStaticPlus = require('koa-static-plus')
var path = require('path')

//处理静态资源
app.use(koaStaticPlus(path.join(__dirname, '/dist'), {
    pathPrefix: ''
}))


/* 代理配置 start */
const proxy = require('koa2-proxy-middleware'); //引入代理模块
const options = {
    targets: {
        // (.*) means anything
        '/smc-workplace/(.*)': {
            target: 'http://39.99.160.199:16806/',
            changeOrigin: true,
            pathRewrite: {
              '^/smc-workplace': ''
            }
        },
    }
}
app.use(
    proxy(options)
);

/* 代理配置 end */


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
