const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserActivitySchema = new Schema({
  type: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
    required: "Activity name is Required",
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
  createdBy: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  isPrivate: {
    type: Boolean,
    default: true,
  },
});

const UserActivity = mongoose.model("UserActivity", UserActivitySchema);

module.exports = UserActivity;
