const Router = require('koa-router')
const axios = require('axios')
const MemoryFs = require('memory-fs')
const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const VueServerRenderer = require('vue-server-renderer')

const serverRender = require('./server.render')
const serverConfig = require('../../build/webpack.config.server')

const serverCompiler = webpack(serverConfig)
const mfs = new MemoryFs()
// 写入内存
serverCompiler.outputFileSystem = mfs

let bundle
serverCompiler.watch({}, (err, status) => {
  if (err) throw err
  status = status.toJson()
  // eslint 报错
  status.errors.forEach(err => console.log(err))
  status.warnings.forEach(warn => console.warn(err))

  const bundlePath = path.join(
    serverConfig.output.path,
    // 输出的文件名 --- VueServerPlugin
    'vue-ssr-server-bundle.json'
  )
  // 装换成 json 文件
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
  console.log('new bundle generated')
})

const handelSSR = async (ctx) => {
  if(!bundle) {
    ctx.body = "您等一会----------------"
    return
  }

  const clientManifestResp = await axios.get(
    'http://127.0.0.1:8000/public/vue-ssr-client-manifest.json'
  )
  const clientManifest = clientManifestResp.data

  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs'), 
    'utf-8'
  )

  const renderer = VueServerRenderer
  .createBundleRenderer(bundle, {
    inject: false,
    clientManifest
  })

  await serverRender(ctx, renderer, template)
}
const router = new Router()
router.get('*', handelSSR)

module.exports = router