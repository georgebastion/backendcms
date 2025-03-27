const express = require("express");
const { createSurvey, getSurveys } = require("../controllers/survey.js");

const router = express.Router();

router.post("/", createSurvey);
router.get("/", getSurveys);

module.exports = router;
