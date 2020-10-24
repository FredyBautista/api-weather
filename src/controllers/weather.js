const { getWeatherByCity } = require("../services/weatherService");

const getWeather = async (req, res) => {
  const { params, query } = req;
  const weather = await getWeatherByCity(params, query);
  return res.send(weather);
};

module.exports = getWeather;
