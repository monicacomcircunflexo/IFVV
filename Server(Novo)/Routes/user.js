var express = require('express');
var router = express.Router();
var controller = require('../controllers/user');



router.get('/:id',controller.get)
router.post('/:id', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);


module.exports = router;
