const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SystemActivitySchema = new Schema({
  type: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  durationMinutes: {
    type: Number,
    min: 0,
  },
  notes: {
    type: String,
    trim: true,
  },
  videoUrl: {
    type: String,
    trim: true,
  },
});

const SystemActivity = mongoose.model("SystemActivity", SystemActivitySchema);

module.exports = SystemActivity;
