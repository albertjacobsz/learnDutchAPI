const factory = require('./handlerFactory');
const Level = require('./../models/levelModel');
exports.getAllLevel = factory.getAll(Level);
exports.createNewLevel = factory.createOne(Level);
exports.getOneLevel = factory.getOne(Level);
exports.deleteLevel = factory.deleteOne(Level);
exports.updateLevel = factory.updateOne(Level);
