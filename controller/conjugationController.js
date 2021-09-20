const factory = require('./handlerFactory');
const Conjugation = require('./../models/conjugationModel');
exports.getAllConjugation = factory.getAll(Conjugation);
exports.createNewConjugation = factory.createOne(Conjugation);
exports.getOneConjugation = factory.getOne(Conjugation);
exports.deleteConjugation = factory.deleteOne(Conjugation);
exports.updateConjugation = factory.updateOne(Conjugation);
