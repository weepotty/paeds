const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, 'Password cannot be blank']
  }
})

module.exports = mongoose.model('User', userSchema);
