const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const generateQuestions = async (title) => {
  try {
    const prompt = `Generate five engaging survey questions about: ${title}`;
    const result = await model.generateContent(prompt);
    return result.response.text().split("\n").filter(Boolean).slice(0, 5);
  } catch (error) {
    console.error("AI Generation Error:", error);
    return [];
  }
};

module.exports = generateQuestions;
