const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    //we can have a phone/password
    //the biggest data files are generally userSchemas
    username: { type: String, required: true, unique: true }, //unique index, normally email, phone
    password: { type: String, required: true }
  }
  // { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User
