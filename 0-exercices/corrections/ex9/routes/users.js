var express = require('express');
var router = express.Router();

const userController = require('../controllers/users')
router.post('/sign-up', userController.signUp)

router.post('/sign-in', userController.signIn)

module.exports = router;
