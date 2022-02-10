import express from 'express';
const router = express.Router();

import { search_food, add_food, reset_food, update_calorie_current, reset_calorie_current } from '../controllers/foodController.js';

/// FOOD MANAGEMENT

// Food query GET
router.get('/search/:search', search_food);

// Add food for day PUT
router.put('/add', add_food);

// Reset food for day PUT
router.put('/reset', reset_food);

// Update current calories PUT
router.put('/calorie-current/update', update_calorie_current);

// Reset daily current calories PUT
router.put('/calorie-current/reset', reset_calorie_current);

export default router;
