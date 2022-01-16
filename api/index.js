const axios = require("axios").default;
const fs = require('fs')

const options = {
  method: "GET",
  url: "http://api.weatherapi.com/v1/current.json",
  params: {
    key: "bae7fbc4bd954761bc5214717221301",
    q: "Islamabad",
    aqi: "no",
  },
};

let res = axios
  .request(options)
  .then((response) => {
    const data = JSON.stringify(response.data)
    fs.writeFile('weather.json', data, err => {
      if (err) {
        throw err
      }
      console.log('data saved')
    })
  })
  .catch((error) => {
    console.error(error);
  });

  module.exports = res
