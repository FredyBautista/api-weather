const axios = require("axios");

const OPTIONS_BY_DEFAULT = {
  headers: { "Content-Type": "application/json" },
  url: "",
};
const getInstance = ({ url, headers } = OPTIONS_BY_DEFAULT) => {
  const instance = axios.create({
    baseURL: url,
    headers,
  });
  return instance;
};

module.exports = getInstance;
