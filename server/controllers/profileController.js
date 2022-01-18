import {body, validationResult} from 'express-validator';

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

// Send other profile
export const profile_other_get = async (req, res) => {
    try {
        const userProfile = await User.findById(req.params.id);
        res.status(200).json(userProfile);
    } catch (err) {
        res.status(404).json({msg: 'User not found.'});
    }
}