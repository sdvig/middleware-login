const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const connectionString = proccess.env.DB_URL || 'mongodb://localhost/wtm'

mongoose.connect(connectionString)
