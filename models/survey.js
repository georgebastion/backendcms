const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Survey", SurveySchema);
