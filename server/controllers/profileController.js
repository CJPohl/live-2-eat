import User from '../models/User.js';

// Send main profile
export const profile_main_get = async (req, res) => {
    try {
        const userProfile = await User.findOne({token: req.body.token});
        res.status(200).json(userProfile);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Profiles search
export const profile_search = async (req, res) => {
    try {
        // Query 20 items of the user db based upon textScore of user's search
        const results = await Food.find(
            {$text: {$search: req.body.search}},
            {score: {$meta: 'textScore'}}
        ).sort({score: {$meta: 'textScore'}}).limit(20);

        res.status(200).json(results);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Send other profile
export const profile_other_get = async (req, res) => {
    try {
        const userProfile = await User.findById(req.params.id);
        res.status(200).json(userProfile);
    } catch (err) {
        res.status(404).json({msg: 'User not found.'});
    }
}

// Follow profile 
export const follow_profile = async (req, res) => {
    // Update attempts
    try {
        const updatedFollower = await User.findByIdAndUpdate(req.body.followerId, {
            $push: {'following': req.body.followedId}
        }, {new: true});
        const updatedFollowed = await User.findByIdAndUpdate(req.body.followedId, {
            $push: {'followers': req.body.followerId}
        }, {new: true});

        res.status(200).json({updatedFollower, updatedFollowed});
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Unfollow profile
export const unfollow_profile = async (req, res) => {
    // Update attemps
    try {
        const updatedFollower = await User.findByIdAndUpdate(req.body.followerId, {
            $pull: {'following': req.body.followedId}
        }, {new: true});
        const updatedFollowed = await User.findByIdAndUpdate(req.body.followedId, {
            $pull: {'followers': req.body.followerId}
        }, {new: true});

        res.status(200).json({updatedFollower, updatedFollowed});
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Update age
export const update_age = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.userId, {
            age: req.body.age
        }, {new: true});

        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Update about
export const update_about = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.userId, {
            about: req.body.about
        }, {new: true});

        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Update height
export const update_height = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.userId, {
            height: req.body.height
        }, {new: true});

        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Update weight
export const update_weight = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.userId, {
            weight: req.body.weight
        }, {new: true});

        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Update weight change
export const update_weight_change = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.userId, {
            weight_change: req.body.weightChange
        }, {new: true});

        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Update calorie max
export const update_calorie_max = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.userId, {
            calorie_max: req.body.calorieMax
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

// Update BMI
export const update_bmi = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.userId, {
            bmi: req.body.bmi
        }, {new: true});

        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Add favorite food
export const add_favorite_food = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.userId, {
            $push: {'favorite_foods': req.body.favoriteFood}
        }, {new: true});

        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}