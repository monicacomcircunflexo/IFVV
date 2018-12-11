var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET depoiments listing. */
router.get('/', function(req, res, next) {
  res.send("Página de depoimentos");
});



module.exports = router;
