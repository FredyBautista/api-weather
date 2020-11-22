const getInstance = require("../utils/apiCall");

const getForecastService = async () => {
  let result = {};
  try {
    const response = await getInstance().get(
      "https://www.metaweather.com/api/location/2367105/"
    );
    result = response.data;
  } catch (error) {
    result = error;
  }
  return result;
};

module.exports = { getForecastService };
