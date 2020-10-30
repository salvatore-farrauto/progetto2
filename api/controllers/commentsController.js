'use strict';


var mongoose = require('mongoose'),
    Comments = mongoose.model('Comments'),
    Posts = mongoose.model('Posts');


// Lista ordinati per data. Alla fine della lista i più recenti.
exports.list_all_comments = function (req, res) {
    // to grand access and avoid CORS problems
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,POST');


    Comments.find({}).sort({ date: 'desc' }).exec(function (err, comment) {
        if (err)
            res.send(err);
        res.json(comment);
    });
};


exports.create_a_comment = function (req, res) {
    var new_comment = new Comments(req.body);
    new_comment.save(function (err, post) {
        if (err)
            res.send(err);
        res.json(new_comment);

        console.log(new_comment)
        // id comment:
        console.log(new_comment._id) // ritorna l'_id del commento. 
        // Possiamo fare una cosa analoga per i posts????
    });
};



exports.delete_a_comment = function (req, res) {
    Comments.deleteOne({
        _id: req.params.commentId
    }, function (err, comment) {
        if (err)
            res.send(err);
        res.json({ message: 'Comment successfully deleted' });
    });
};

exports.patch_a_comment = function (req, res) {

    //console.log("req is:", req); // è una cosa lunghissima.
    console.log("req.body is:", req.body) // è ciò che invio nel body della richiesta patch
    Comments.findOneAndUpdate({ _id: req.params.commentId }, { $set: req.body }, { new: true },
        function (err, post) {
            if (err)
                res.send(err);
            res.json(post);
        });
}

