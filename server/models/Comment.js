import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
    {
        text: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, required: true},
        timestamp: {type: Date, default: Date.now(), required: true},
        likes: {type: [Schema.Types.ObjectId], ref: 'user', default: [], required: true}
    }
);

export default mongoose.model('Comment', CommentSchema);