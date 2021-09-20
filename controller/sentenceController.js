const factory = require('./handlerFactory');
const Sentence = require('./../models/sentenceModel');
exports.getAllSentences = factory.getAll(Sentence);
exports.createNewSentence = factory.createOne(Sentence);
exports.getOneSentence = factory.getOne(Sentence);
exports.deleteSentence = factory.deleteOne(Sentence);
exports.updateSentence = factory.updateOne(Sentence);
