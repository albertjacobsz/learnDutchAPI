const factory = require('./handlerFactory');
const WordType = require('./../models/wordTypeModel');
exports.getAllWordType = factory.getAll(WordType);
exports.createNewWordType = factory.createOne(WordType);
exports.getOneWordType = factory.getOne(WordType);
exports.deleteWordType = factory.deleteOne(WordType);
exports.updateWordType = factory.updateOne(WordType);
