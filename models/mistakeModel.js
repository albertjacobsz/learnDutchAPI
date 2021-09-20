const mongoose = require('mongoose');
const mistakeModel = mongoose.Schema({
  sentence: {
    type: mongoose.Schema.ObjectId,
    ref: 'Sentence',
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  word: {
    type: mongoose.Schema.ObjectId,
    ref: 'Word',
  },
  date: {
    type: Date,
    default: new Date.now(),
  },
});
const Mistake = mongoose.model('Mistake', mistakeModel);
module.exports = Sentence;
