import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
    {   
        post: {type: Schema.Types.ObjectId, ref: 'Post'},
        text: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, required: true},
        timestamp: {type: Date, default: Date.now(), required: true},
        likes: [{type: Schema.Types.ObjectId, ref: 'User'}]
    }
);

export default mongoose.model('Comment', CommentSchema);