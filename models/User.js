// models/User.js - user model
// import packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// UserSchema
const UserSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    default: 'student'
  }
});
// model
const User = mongoose.model('User', UserSchema);
// export
module.exports = User;
