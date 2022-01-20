import Food from '../models/Food.js';
import User from '../models/User.js';

// Search food in db
export const search_food = async (req, res) => {
    try {
        // Query 20 items of the food db based upon textScore of user's search
        const results = await Food.find(
            {$text: {$search: req.body.search}},
            {score: {$meta: 'textScore'}}
        ).sort({score: {$meta: 'textScore'}}).limit(20);

        res.status(200).json(results);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Add food to daily food
export const add_food = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.userId, {
            $push: {'foods_current': req.body.foodId}
        }, {new: true});

        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Reset daily food array
export const reset_food = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.userId, {
            $set: {'foods_current': []}
        }, {new: true});

        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Update current calories
export const update_calorie_current = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.userId, {
            calorie_current: req.body.calorieCurrent
        }, {new: true});

        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

export const reset_calorie_current = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.userId, {
            calorie_current: 0
        }, {new: true});

        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}
