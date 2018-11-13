var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //busca no banco e coloca na variavel user
  res.render('index', {title: 'Express'});
});

module.exports = router;
