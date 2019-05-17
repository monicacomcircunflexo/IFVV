var express = require('express');
var router = express.Router();
var controller = require('../controllers/unburden');



router.get('/:id',controller.unburden);
router.post('/:id', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);




module.exports = router;
