var express = require('express');
var router = express.Router();
var Posts = require('../models/post');


/* GET home page. */
router.get('/', function(req, res, next) {
    Posts.find(function(err, posts) {
        if (err) {
            return handleError(err);
        }
        console.log(posts); // test
        res.render('index', { title: 'Express', posts: posts });
    });

});

module.exports = router;