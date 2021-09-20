const factory = require('./handlerFactory');
const Mistake = require('./../models/mistakeModel');
const catchAsync = require('./../utils/catchAsync');
exports.getAllMistake = factory.getAll(Mistake);
exports.createNewMistake = factory.createOne(Mistake);
exports.getOneMistake = factory.getOne(Mistake);
exports.deleteMistake = factory.deleteOne(Mistake);
exports.getMyMistakes = catchAsync(async (req, res, next) => {
    if(req.params.id)
    const query = await User.findBy
})
//exports.updateMistake = factory.updateOne(Mistake);
