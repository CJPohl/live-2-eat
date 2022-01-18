import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'user', required: true},
        timestamp: {type: Date, default: Date.now(), required: true},
        tags: {type: [String], default: [], required: true},
        likes: {type: [Schema.Types.ObjectId], ref: 'user', default: [], required: true},
        comments: {type: [Schema.Types.ObjectId], ref: 'comment', default: [], required: true}
    }
);

export default mongoose.model('Post', PostSchema);