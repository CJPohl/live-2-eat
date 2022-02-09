import express from 'express';
const router = express.Router();

import {profile_main_get, profile_search, profile_other_get, follow_profile, unfollow_profile, update_age, update_about, update_height, update_weight, update_weight_change, update_calorie_max, update_bmi, add_favorite_food, update_user_false, update_weight_goal_type, update_weight_goal} from '../controllers/profileController.js';

/// Profile Interactions ///

// Show main user profile GET
router.get('/main/:token', profile_main_get);

// User search GET
router.get('/search', profile_search);

// Show other user profile GET
router.get('/:id', profile_other_get);

// Follow profile PUT
router.put('/follow', follow_profile);

// Unfollow profile PUT
router.put('/unfollow', unfollow_profile);

/// Profile Updates ///

// Update age PUT
router.put('/age/update', update_age);

// Update about PUT
router.put('/about/update', update_about);

// Update height PUT
router.put('/height/update', update_height);

// Update weight goal type PUT
router.put('/weight-goal-type/update', update_weight_goal_type);

// Update weight PUT
router.put('/weight/update', update_weight);

// Update weight goal PUT
router.put('/weight-goal/update', update_weight_goal);

// Update weight change PUT
router.put('/weight-changed/update', update_weight_change);

// Update calorie max PUT
router.put('/calorie-max/update', update_calorie_max);

// Update BMI PUT
router.put('/bmi/update', update_bmi);

// Add favorite food PUT
router.put('/favorite-foods/update', add_favorite_food);

// Update New User to False PUT
router.put('/new-user/falsify', update_user_false);

export default router;