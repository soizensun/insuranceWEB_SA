const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String,
    email: String,
    username: {type: String, require: true},
    password: {type: String, require: true},
});

module.exports = mongoose.model('user', UserSchema)