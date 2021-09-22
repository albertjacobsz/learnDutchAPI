const mongoose = require('mongoose');
const wordModel = new mongoose.Schema({
  name: {
    type: String,
    required: ['true', 'Word needs to have a dutch value'],
  },
  english: [
    {
      type: String,
      required: ['true', 'Word needs to have a dutch value'],
    },
  ],
  type: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'WordType',
    },
  ],
});
wordModel.pre(/^find/, function (next) {
  this.populate({ path: 'type', select: '-__v' });
  next();
});
const Word = mongoose.model('Word', wordModel);
module.exports = Word;
