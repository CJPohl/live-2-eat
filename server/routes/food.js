import express from 'express';
const router = express.Router();

import { search_food } from '../controllers/foodController.js';

/// FOOD MANAGEMENT

// User searches for food
router.get('/search', search_food);

export default router;
