const mongoose = require('mongoose');
const conjugationModel = new mongoose.Schema({
  wordId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Word',
  },
  presentSimple: [
    {
      type: String,
      required: ['true', 'must have this conjugation'],
    },
  ],
  pastSimple: [
    { type: String, required: ['true', 'must have this conjugation'] },
  ],
  futurePerfect: [
    { type: String, required: ['true', 'must have this conjugation'] },
  ],
  presentPerfect: [
    { type: String, required: ['true', 'must have this conjugation'] },
  ],
  conditional: [
    { type: String, required: ['true', 'must have this conjugation'] },
  ],
  pastPerfect: [
    { type: String, required: ['true', 'must have this conjugation'] },
  ],
  conditionalPerfect: [
    { type: String, required: ['true', 'must have this conjugation'] },
  ],
  futureSimple: [
    { type: String, required: ['true', 'must have this conjugation'] },
  ],
});
const Conjugation = mongoose.model('Conjugation', conjugationModel);
module.exports = Conjugation;
