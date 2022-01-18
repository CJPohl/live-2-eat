import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema (
    {
        token: {type: String, required: true},
        facebook_id: {type: String, required: true},
        name: {type: String, required: true},
        email: {type: String, required: true},
        age: {type: Number, default: 0, required: true},
        about: {type: String, default: 'Write something about yourself!', required: true},
        height: {type: String, default: 'Your Height', required: true},
        weight: {type: Number, default: 0, required: true},
        weight_change: {type: Number, default: 0, required: true},
        calorie_max: {type: Number, default: 0, required: true},
        calorie_current: {type: Number, default: 0, required: true},
        bmi: {type: Number, default: 0, required: true},
        favorite_foods: [{type: Schema.Types.ObjectId, ref: 'Food'}],
        followers: [{type: Schema.Types.ObjectId, ref: 'User'}],
        following: [{type: Schema.Types.ObjectId, ref: 'User'}],
        posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
    }
);

// Export Module
export default mongoose.model('User', UserSchema);