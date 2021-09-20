const factory = require('./handlerFactory');
const SentenceStructure = require('./../models/sentenceStructureModel');
exports.getAllSentenceStructure = factory.getAll(SentenceStructure);
exports.createNewSentenceStructure = factory.createOne(SentenceStructure);
exports.getOneSentenceStructure = factory.getOne(SentenceStructure);
exports.deleteSentenceStructure = factory.deleteOne(SentenceStructure);
exports.updateSentenceStructure = factory.updateOne(SentenceStructure);
