const mongoose = require('mongoose');
const wordTypeModel = new mongoose.Schema({
  type: {
    type: String,
    enum: [
      'verb',
      'noun',
      'article',
      'adverb',
      'adjective',
      'pronoun',
      'conjuction',
    ],
    required: ['true', 'Word needs to have a type'],
  },
});
const WordType = mongoose.model('WordType', wordTypeModel);
module.exports = WordType;
