var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  const BASE = "https://jobs.github.com/positions.json";
  let description = req.query.description || "";
  let location = req.query.location || "";
  let full_time = req.query.full_time || "";

  const url = `${BASE}?description=${description}&location=${location}&full_time=${full_time}`;

  axios
    .get(url)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.json(error);
    });
});

module.exports = router;
