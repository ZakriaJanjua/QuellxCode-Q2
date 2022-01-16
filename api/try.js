const router = require('express').Router()
const axios = require("axios").default;

const options = {
  method: "GET",
  url: "http://api.weatherapi.com/v1/current.json",
  params: {
    key: "bae7fbc4bd954761bc5214717221301",
    q: "Islamabad",
    aqi: "no",
  },
};

router.get('/', (req, res, next) => {
    axios
      .request(options)
      .then((response) => {
          console.log(response)
          res.status(200).send(response)
      })
      .catch((error) => {
        console.error(error);
        res.status(400).send('error')
      });
})
module.exports = router
