var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var postControllers = require('../controllers/postControllers');

// route get /posts/add
router.get('/add', postControllers.get_add);

router.post('/add', upload.single('mainimage'), postControllers.post_add);

module.exports = router;