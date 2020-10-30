'use strict';


var mongoose = require('mongoose'),
    Posts = mongoose.model('Posts');


// Lists sorted by created date. Last in the list the most recent.
exports.list_all_posts = function (req, res) {
    // to grand access and avoid CORS problems
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,POST');



    Posts.find({}).sort({ date: 'desc' }).exec(function (err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
};



exports.create_a_post = function (req, res) {
    // To grant access
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,POST');



    var new_post = new Posts(req.body);
    new_post.save(function (err, post) {
        if (err)
            res.send(err);
        res.json(post);

        // And return the id of the post

        console.log(post)

    });
};


exports.delete_a_post = function (req, res) {
    res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');

    Posts.remove({
        _id: req.params.postId
    }, function (err, post) {
        if (err)
            res.send(err);
        res.json({ message: 'Post successfully deleted' });
    });
}


exports.patch_a_post = function (req, res) {

    //console.log("req is:", req); // è una cosa lunghissima.
    console.log("req.body is:", req.body) // è ciò che invio nel body della richiesta patch

    Posts.findOneAndUpdate({ _id: req.params.postId }, { $set: req.body }, { new: true },
        function (err, post) {
            if (err)
                res.send(err);
            res.json(post);
        });

}



