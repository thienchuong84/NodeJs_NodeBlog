var Post = require('../models/post');

exports.get_index = function(req, res) {
    Post.find(function(err, posts) {
        if (err) {
            return handleError(err);
        }
        console.log(posts); // test
        res.render('index', { title: 'Express', posts: posts });
    });
}

exports.test_countPosts = function(req, res) {
    // res.send('Not Implement');
    Post.count(function(err, count) {
        if (err) {
            throw error;
        }
        res.send('total count of posts : ' + count);
    })
}