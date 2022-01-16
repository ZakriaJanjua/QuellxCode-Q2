const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/signUser", (req, res, next) => {
  const payload = { user: req.body.user };
  if (req.body.user) {
      jwt.sign(payload, "tokenSecret", { expiresIn: "10m" }, (err, token) => {
        if (err) {
          res.status(422).json("authentication error");
        } else {
          res.json(token);
        }
      });
  } else {
      res.status(400).json('Provide a user')
  }
});

module.exports = router
