const { getWeatherByCity } = require("../services/weatherService");

const getWeather = async (req, res) => {
  const { params } = req;
  const weather = await getWeatherByCity(params);
  return res.send(weather.data);
};

module.exports = getWeather;
