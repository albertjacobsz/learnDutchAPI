const factory = require('./handlerFactory');
const Unit = require('./../models/unitModel');
exports.getAllUnits = factory.getAll(Unit);
exports.createNewUnit = factory.createOne(Unit);
exports.getOneUnit = factory.getOne(Unit);
exports.deleteUnit = factory.deleteOne(Unit);
exports.updateUnit = factory.updateOne(Unit);
