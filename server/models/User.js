import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema (
    {
        current_token: {type: String , default: ''},
        first_name: {type: String, required: true},
        last_name: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        age: {type: Number, required: true},
        gender: {type: String, required: true},
        about: {type: String, default: 'Write something about yourself!', maxlength: 50},
        height: {type: String, default: 'Your Height'},
        weight_goal_type: {type: String, default: 'Your Weight Goal Type'},
        weight: {type: Number, default: 0},
        weight_change: {type: Number, default: 0},
        weight_goal: {type: Number, default: 0},
        calorie_max: {type: Number, default: 0},
        calorie_current: {type: Number, default: 0},
        foods_current: [{type: Schema.Types.ObjectId, ref: 'Food'}],
        bmi: {type: Number, default: 0},
        favorite_foods: [{type: Schema.Types.ObjectId, ref: 'Food'}],
        followers: [{type: Schema.Types.ObjectId, ref: 'User'}],
        following: [{type: Schema.Types.ObjectId, ref: 'User'}],
        posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
        new_user: {type: Boolean, default: true}
    }
);

// Create indexes for user search
UserSchema.index(
    {
        first_name: 'text',
        last_name: 'text'
    }
);

// Export Module
export default mongoose.model('User', UserSchema);