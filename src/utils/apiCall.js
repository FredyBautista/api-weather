const axios = require("axios");

const getInstance = ({ url, headers }) => {
  const instance = axios.create({
    baseURL: url,
    headers,
  });
  return instance;
};

module.exports = getInstance;
