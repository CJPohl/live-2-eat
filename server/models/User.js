import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema (
    {
        facebook_id: {type: String, required: true},
        name: {type: String, required: true},
        email: {type: String, required: true},
        age: {type: Number, default: null, required: true},
        height: {type: String, default: null, required: true},
        weight: {type: Number, default: null, required: true},
        calorie_max: {type: Number, default: null, required: true},
        calorie_current: {type: Number, default: null, required: true},
        bmi: {type: Number, default: null, required: true},
        favorite_foods: {type: [Schema.Types.ObjectId], ref: 'food', default: [], required: true},
        followers: {type: [Schema.Types.ObjectId], ref: 'user', default: [], required: true},
        following: {type: [Schema.Types.ObjectId], ref: 'user', default: [], required: true},
        posts: {type: [Schema.Types.ObjectId], ref: 'post', default: [], required: true}
    }
);

// Export Module
export default mongoose.model('User', UserSchema);