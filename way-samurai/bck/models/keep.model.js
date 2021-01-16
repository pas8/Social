const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const keepSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    pin: {
      type: Boolean,
      required: false,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Keep = mongoose.model('Keep', keepSchema);

module.exports = Keep;
