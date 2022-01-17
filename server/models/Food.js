import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FoodSchema = new Schema(
    {
        name: {type: String, required: true},
        sub_name: {type: String, required: true},
        factor: {type: Number, required: true},
        calories: {type: Number, required: true},
    }
);

export default mongoose.model('Food', FoodSchema);