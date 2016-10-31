#!/usr/bin/env node

var clik = require('../clik')

var emoji = require('node-emoji')

clik(function (error, server) {
  if (error) {
    throw error
  }

  console.log((process.platform === 'darwin' ? emoji.get('dog') + '  ' : '') + 'Your Hoodie app has started on:', server.info.uri)
  console.log('Stop server with control + c')
})
