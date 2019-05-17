var express = require('express');
var router = express.Router();
var controller = require('../controllers/comments');



router.get('/:id',controller.comment);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);




module.exports = router;
