const factory = require('./handlerFactory');
const Word = require('./../models/wordModel');
exports.getAllWord = factory.getAll(Word);
exports.createNewWord = factory.createOne(Word);
exports.getOneWord = factory.getOne(Word);
exports.deleteWord = factory.deleteOne(Word);
exports.updateWord = factory.updateOne(Word);
