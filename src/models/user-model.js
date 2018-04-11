const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = mongoose.Schema({}, { strict: false })

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema)
