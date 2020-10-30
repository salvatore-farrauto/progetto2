'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
    commentUser: {
        type: String,
        required: 'Kindly enter the name of the post'
    },
    body: {
        type: String,
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    belongingPostID: {
        type: String
    },
    objectIDReferencePost: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Posts' }]
    },
    invisible: {
        type: Boolean,
        default: false
    }
});



module.exports = mongoose.model('Comments', CommentSchema);




