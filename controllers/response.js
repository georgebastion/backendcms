const Response = require("../models/response.js");

// Submit response
exports.submitResponse = async (req, res) => {
  const { surveyId, answers } = req.body;
  if (!surveyId || !answers) return res.status(400).json({ error: "Missing fields" });

  try {
    const response = new Response({ surveyId, answers });
    await response.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: "Failed to submit response" });
  }
};
