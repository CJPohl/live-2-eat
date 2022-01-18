import express from 'express';
const router = express.Router();

import {profile_main_get, profile_other_get} from '../controllers/profileController.js';

/// Profile Interactions ///

// Show main user profile GET
router.get('/main', profile_main_get);

// Show other user profile GET
router.get('/:id', profile_other_get);

// Follow profile PUT
// TODO

// Unfollow profile PUT
// TODO

/// Profile Updates ///

// Update age PUT
// TODO

// Update about PUT
// TODO

// Update height PUT
// TODO

// Update weight PUT
// TODO

// Update weight change PUT
// TODO

// Update calorie max PUT
// TODO

// Update current calories PUT
// TODO

// Update BMI PUT
// TODO

// Add favorite food PUT
// TODO

export default router;