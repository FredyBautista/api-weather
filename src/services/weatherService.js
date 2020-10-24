const getInstance = require("../utils/apiCall");
const {
  OPEN_WEATHER_URL,
  OPEN_WEATHER_URL_KEY,
} = require("../utils/constants");

const getWeatherByCity = async (params, query) => {
  const { city } = params;
  const { units = "" } = query;
  const encodeCity = encodeURI(city);
  const buildParams = {
    q: encodeCity,
    appid: OPEN_WEATHER_URL_KEY,
    units,
  };
  let result = {};
  try {
    const response = await getInstance().get(OPEN_WEATHER_URL, {
      params: buildParams,
    });
    const { id, name, timezone, wind, main, coord, sys } = response.data;
    result = {
      id,
      name,
      country: sys.country,
      timezone,
      ...main,
      wind,
      coord,
    };
  } catch (error) {
    const { status, statusText } = error.response;
    result = {
      status,
      error: statusText,
    };
  }

  return result;
};

module.exports = { getWeatherByCity };
