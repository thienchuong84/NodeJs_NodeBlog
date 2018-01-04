var Post = require('../models/post');
var Category = require('../models/category');
var async = require('async');

const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// get /posts/add
exports.get_add = function(req, res) {
    // res.send('Not Imolemented: /posts/add');

    // res.render('addPost', {
    //     title: 'Add Post'
    // });

    async.parallel({
        categories: function(callback) {
            Category.find().exec(callback);
        }
    }, function(err, results) {
        if (err) {
            return next(err);
        }
        // if (results.categories == null) {

        // }
        console.log(results.categories);
        res.render('addPost', {
            title: 'Add Posts',
            categories: results.categories
        });
    });
}

exports.post_add = [
    // validate and sanitize title
    body('title', 'Title field required').isLength({ min: 1 }).trim(),
    sanitizeBody('title').trim().escape(),
    body('body', 'Body field required').isLength({ min: 1 }).trim(),
    sanitizeBody('body').trim().escape(),
    function(req, res, next) {
        console.log(req.body);
        // extract the validation errors from a request
        const errors = validationResult(req);

        // create post object with escaped and trim data
        var post = new Post({
            title: req.body.title,
            category: req.body.category,
            body: req.body.body,
            author: req.body.author
        });

        if (!errors.isEmpty()) {
            res.render('addPost', {
                title: 'Add Posts',
                post: post,
                errors: errors.array()
            });
        } else {
            post.save(function(err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            })
        }
    }
]