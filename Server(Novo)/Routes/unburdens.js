var express = require('express');
var router = express.Router();
var controller = require('../controllers/unburdens');
var system = require('../controllers/system');


router.get('/', system.verifytokenMiddle, controller.unburdens);




module.exports = router;
