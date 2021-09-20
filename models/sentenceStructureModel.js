const mongoose = require('mongoose');
const sentenceStructureModel = new mongoose.Schema({
  name: {
    type: String,
    required: ['true', 'Sentence structure needs to have a name'],
  },
  types: [{ type: mongoose.Schema.ObjectId, ref: 'WordType' }],
});
const SentenceStructure = mongoose.model(
  'SentenceStructure',
  sentenceStructureModel
);
module.exports = SentenceStructure;
