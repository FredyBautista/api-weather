const express = require("express");
const cool = require('cool-ascii-faces');
const router = express.Router();
const { getGreeting, getWeather, getForecast } = require("../controllers");

router.get("/greeting", getGreeting);
router.get("/weather/:city", getWeather);
router.get("/forecast", getForecast);
router.get('/cool', (req, res) => res.send(cool()))

module.exports = router;
