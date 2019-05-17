var express = require('express');
var router = express.Router();
var controller = require('../controllers/system');



router.post('/login',controller.login)
router.get('/verifytoken', controller.verifytoken);


module.exports = router;
