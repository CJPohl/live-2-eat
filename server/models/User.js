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
        about: {type: String, default: 'Write something about yourself!', required: true},
        height: {type: String, default: 'Your Height', required: true},
        weight: {type: Number, default: 0, required: true},
        weight_change: {type: Number, default: 0, required: true},
        calorie_max: {type: Number, default: 0, required: true},
        calorie_current: {type: Number, default: 0, required: true},
        foods_current: [{type: Schema.Types.ObjectId, ref: 'Food'}],
        bmi: {type: Number, default: 0, required: true},
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
        last_name: 'text',
        
    }
);

// Export Module
export default mongoose.model('User', UserSchema);