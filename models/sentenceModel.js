const mongoose = require('mongoose');
const sentenceModel = mongoose.Schema({
  sentence: [{ type: mongoose.Schema.ObjectId, ref: 'Word' }],
  sentenceStructure: {
    type: mongoose.Schema.ObjectId,
    ref: 'SentenceStructure',
  },
});
sentenceModel.pre(/^find/, function (next) {
  this.populate({
    path: 'sentence',
    select: '-__v',
  });
  next();
});
const Sentence = mongoose.model('Sentence', sentenceModel);
module.exports = Sentence;
