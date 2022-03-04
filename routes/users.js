var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).render("index.pug", {});
});
router.get("/user/cool", function (req, res) {
  res.status(200).render("cool.pug", { msg: "Eres genial" });
});
module.exports = router;
