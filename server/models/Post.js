import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        text: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        timestamp: {type: Date, default: Date.now(), required: true},
        tags: [String],
        likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    }
);

export default mongoose.model('Post', PostSchema);