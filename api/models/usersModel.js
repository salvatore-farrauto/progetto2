'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter your name'
    },
    password: {
        type: String,
        required: 'Kindly enter your password'
    }
});



module.exports = mongoose.model('Users', UserSchema);