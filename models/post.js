var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {
        type: String
    },
    category: {
        type: String
    },
    author: {
        type: String
    },
    body: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})



// khai bao tới đây là các trang khác có thể require sử dụng đc
// const Post = module.exports = mongoose.model('Post', PostSchema);
module.exports = mongoose.model('Post', PostSchema);