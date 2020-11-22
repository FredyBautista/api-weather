const express = require("express");
const router = express.Router();
const { getGreeting, getWeather, getForecast } = require("../controllers");

router.get("/greeting", getGreeting);
router.get("/weather/:city", getWeather);
router.get("/forecast", getForecast);

module.exports = router;
