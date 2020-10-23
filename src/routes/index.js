const express = require("express");
const router = express.Router();
const { getGreeting, getWeather } = require("../controllers");

router.get("/greeting", getGreeting);
router.get("/weather/:city", getWeather);
router.get("/weather/:city/:units", getWeather);

module.exports = router;
