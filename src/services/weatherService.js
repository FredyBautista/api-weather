const getInstance = require("../utils/apiCall");
const {
  OPEN_WEATHER_URL,
  OPEN_WEATHER_URL_KEY,
} = require("../utils/constants");

const getWeatherByCity = async (params) => {
  const { city, units = "" } = params;
  const encodeCity = encodeURI(city);
  const headers = {
    "Content-Type": "application/json",
  };
  const buildParams = {
    q: encodeCity,
    appid: OPEN_WEATHER_URL_KEY,
    units,
  };
  return getInstance({ headers }).get(OPEN_WEATHER_URL, {
    params: buildParams,
  });
};

module.exports = { getWeatherByCity };
