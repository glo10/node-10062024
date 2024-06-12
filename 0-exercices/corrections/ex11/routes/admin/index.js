var express = require('express');
var router = express.Router();
const adminController = require('../../controllers/admin-controller')

/* GET home page. */
router.get('/users', adminController.show);

module.exports = router;
