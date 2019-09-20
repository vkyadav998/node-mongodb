#!/usr/bin/env node
var app = require('./index')
var config = require('./config')

console.log('config : ', config)

// then start listening
app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    console.error('Unable to listen for connections', error)
    process.exit(10)
  }
  console.log('express is listening on http://' + config.express.ip + ':' + config.express.port)
})
