var express = require('express');
var router = express.Router();
var controller = require('../controllers/unburdens');



router.get('/',controller.unburdens);




module.exports = router;
