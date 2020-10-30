'use strict';
module.exports = function (app) {
    var comments = require('../controllers/commentsController');

    // posts Routes
    app.route('/comments')
        .get(comments.list_all_comments)
        .post(comments.create_a_comment);


    app.route('/comments/:commentId')
        .delete(comments.delete_a_comment)
        .patch(comments.patch_a_comment)
};