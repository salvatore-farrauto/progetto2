'use strict';


var mongoose = require('mongoose'),
    Users = mongoose.model('Users');


exports.list_all_users = function (req, res) {
    Users.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};



exports.create_a_user = function (req, res) {
    var new_user = new Users(req.body);
    new_user.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(new_user);
    });
};