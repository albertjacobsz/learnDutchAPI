const mongoose = require('mongoose');
const levelModel = new mongoose.Schema({
  name: {
    type: String,
    required: ['true', 'Level should have a name'],
  },
  units: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Unit',
      required: ['true', 'Level should have at least one Unit'],
    },
  ],
});
const Level = mongoose.model('Level', levelModel);
module.exports = Level;
