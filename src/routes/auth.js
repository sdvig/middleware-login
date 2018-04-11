const express = require('express')
const router = express.Router()
const User = require('../models/user-model')

router.post('/register', (req, res, next) => {
  User.register({username: req.body.username}, req.body.password, (err, account) => {
    res.send(account)
  })
})

module.exports = router
