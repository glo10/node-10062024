var express = require('express');
var router = express.Router();
const userController = require('../controllers/user-controller')

router.post('/new', userController.add);

module.exports = router;
