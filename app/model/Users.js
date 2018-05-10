let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    email: { type: String, require: true },
    fullname: { type: String, require: true },
    age: { type: Number, require: true }
});

module.exports = mongoose.model('users', userSchema);