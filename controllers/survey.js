const Survey = require("../models/survey.js");
const generateQuestions = require("../services/gemini.js");

// Generate survey questions
exports.createSurvey = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  try {
    const questions = await generateQuestions(title);
    //console.log(questions)
    const survey = new Survey({ title, questions });
    await survey.save();
    console.log(survey)
    res.status(200).json(survey);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Get all surveys
exports.getSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.json(surveys);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch surveys" });
  }
};
