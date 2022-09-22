const axios = require("axios");

require("dotenv").config();

const envKey = process.env.API_KEY;

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: envKey,
  },
});

module.exports = API;
