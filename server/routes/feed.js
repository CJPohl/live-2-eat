import express from 'express';
const router = express.Router();

import { get_posts, new_post, like_post, unlike_post, new_comment, like_comment, unlike_comment } from '../controllers/feedController.js';

/// POSTS ///

// Get posts GET
router.get('/post/all', get_posts);

// New Post POST
router.post('/post/new', new_post);

// Like Post PUT
router.put('/post/like', like_post);

// Unlike Post PUT
router.put('/post/unlike', unlike_post);

/// COMMENTS ///

// New Comment POST
router.post('/comment/new', new_comment);;

// Like Comment PUT
router.put('/comment/like', like_comment);

// Unlike Comment PUT
router.put('/comment/unlike', unlike_comment);

export default router;