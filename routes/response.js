const express = require("express");
const { submitResponse } = require("../controllers/response.js");

const router = express.Router();

router.post("/", submitResponse);

module.exports = router;
