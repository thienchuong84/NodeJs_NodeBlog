var Post = require('../models/post');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

// get /posts/add
exports.get_add = function(req, res) {
    // res.send('Not Imolemented: /posts/add');
    res.render('addPost', {
        title: 'Add Post'
    });
}

exports.post_add = function(req, res, next) {
    // get value submit
    var title = req.body.title;
    var category = req.body.category;
    var body = req.body.body;
    var author = req.body.author;
    var date = new Date();

    // handle image
    if (req.file) {
        var mainimage = req.file.filename;
    } else {
        var mainimage = 'noimage.jpg';
    }

    console.log(req.body);

    res.send('Not Implement');

    // // form validation
    // req.checkBody('title', 'Title field is required').notEmpty();
    // res.checkBody('body', 'Body field is required').notEmpty();

    // // check errors
    // var errors = req.validationErrors();


    // if (errors) {
    //     res.render('addPost', {
    //         "errors": errors
    //     });
    // } else {
    //     // // insert post to mongodb by mongoose
    //     // posts.insert({
    //     //     "title": title,
    //     //     "body": body,
    //     //     "category": category,
    //     //     "date": date,
    //     //     "author": author,
    //     //     "mainimage": mainimage
    //     // }, function(err, post) {
    //     //     if (err) {
    //     //         res.send(err);
    //     //     } else {
    //     //         req.flash('success', 'Post Add');
    //     //         res.location('/');
    //     //         res.redirect('/');
    //     //     }
    //     // });
    // }
}