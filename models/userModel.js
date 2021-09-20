const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userModel = new mongoose.Schema({
  username: {
    type: String,
    required: ['true', 'Users require an username'],
    unique: true,
  },
  email: {
    type: String,
    required: ['true', 'Users are required to have an email'],
    unique: true,
  },
  password: {
    type: String,
    required: ['true', 'Users need a password'],
  },
  passwordConfirm: {
    type: String,
    required: ['true', 'Users need to confirm their password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  coins: { type: Number, default: 0 },
  role: { type: String, enum: ['admin', 'moderator', 'user'], default: 'user' },
});
userModel.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});
userModel.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
const User = mongoose.model('User', userModel);
module.exports = User;
