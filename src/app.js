const express = require('express')

require('./database-connection')

const app = express()

app.get('/', (req, res, next) => {
  res.send('Hello world')
})

app.get('/private', (req, res) => {
  res.send('Private Hello world')
})

module.exports = app
