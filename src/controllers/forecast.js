const { getForecastService } = require("../services/forecastService");

const getForecast = async (req, res) => {
  const forecast = await getForecastService();
  return res.send(forecast);
};

module.exports = getForecast;
