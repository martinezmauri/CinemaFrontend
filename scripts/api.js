const axios = require("axios");
const API_URL = "https://cinema-1u48.onrender.com/movies";

const getData = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (err) {
    console.error("Error: ", err);
    throw err;
  }
};

module.exports = getData;
