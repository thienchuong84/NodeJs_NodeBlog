var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: {
        type: String
    }
});

module.exports = mongoose.model('Category', CategorySchema);
// var Category = mongoose.model('Category', CategorySchema);