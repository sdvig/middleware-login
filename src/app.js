const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const session = require('express-session')
const User = require('./models/user-model')

require('./database-connection')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(session({ secret: 'parampampam', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)

const auth = require('./routes/auth')

app.use('/auth', auth)

app.get('/', (req, res, next) => {
  res.render('index')
})

app.get('/private', (req, res) => {
  res.send('Private Hello world')
})

module.exports = app
