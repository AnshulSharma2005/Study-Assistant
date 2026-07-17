const express = require("express");
const router = express.Router();

const { generateFlashcards } = require("../controllers/aiController");

router.post("/", generateFlashcards);

module.exports = router;