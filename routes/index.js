var express = require('express');
var router = express.Router();

var indexControllers = require('../controllers/indexControllers');

/* GET home page. */
router.get('/', indexControllers.get_index);

router.get('/test', indexControllers.test_countPosts);

module.exports = router;