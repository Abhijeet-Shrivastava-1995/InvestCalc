require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production')
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})



// Serve index page
app.get('*/test.json?', function (req, res) {
  req.params = {
    'date': ''
  }
  console.log(req)
  // var query1 = 'http://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?mf=53&tp=1&frmdt=' + investdate + '&todt=' + investdate
  // var query2 = 'http://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?mf=53&tp=1&frmdt=17-Sep-2017&totd=17-Sep-2017'
  var query2 = 'http://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?mf=53&tp=1&frmdt=' + req.query.date + '&totd=' + req.query.date
  
  console.log(query2)
 
  var request = require('sync-request')
  var response = request('GET', query2)
  var data = {}
  var SKIP_STATE = 'SKIP'
  var CONSUME_STATE = 'CONSUME'
  var state = SKIP_STATE;
  var respText = response.getBody('utf-8')
  var string = "Axis Dynamic Bond Fund - Direct Plan - Growth Option"
  respText.split("\n").forEach(function(line){
    if(!line) { 
      state = SKIP_STATE; 
      return; 
    }else if(line.trim() === "Axis Mutual Fund") { 
      state = CONSUME_STATE; 
      return; 
    }else if(state === CONSUME_STATE){
      var cols = line.split(';');
      //here check whether the fundname param is there in cols[1]
        if(req.query.fundname == cols[1]) {
          res.json(cols[2]) // this is the NAV value of the date sent in query of that particular fund
        }
        data[cols[1]] = cols[2]; //this has NAV value
        //data[cols[2]] = cols[1]; //this will store the fund name
        //therefore cols[1] has the fund name
      
    }
  })
 
 
})




var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }

}