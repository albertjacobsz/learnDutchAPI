const mongoose = require('mongoose');
const unitModel = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  vocabulary: [{ type: mongoose.Schema.ObjectId, ref: 'Word' }],
  grammar: [{ type: mongoose.Schema.ObjectId, ref: 'Sentence' }],
  image: { type: String },
});
unitModel.pre(/^find/, function (next) {
  this.populate({ path: 'vocabulary', select: '-__v' });
  this.populate({ path: 'grammar', select: '-__v' });
  next();
});
const Unit = mongoose.model('Unit', unitModel);
module.exports = Unit;
