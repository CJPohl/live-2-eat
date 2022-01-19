import Post from '../models/Post.js';
import Comment from '../models/Comment.js';

// Gather posts
export const get_posts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// New post
export const new_post = async (req, res) => {
    const post = new Post(
        {
            text: req.body.text,
            author: req.body.userId
        }
    );

    try {
        const newPost = await post.save();
        res.status(200).json(newPost);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Like post
export const like_post = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.body.postId, {
            $push: {'likes': req.body.userId}
        }, {new: true});

        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Unlike post
export const unlike_post = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.body.postId, {
            $pull: {'likes': req.body.userId}
        }, {new: true});

        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// New comment
export const new_comment = async (req, res) => {
    const comment = new Comment(
        {
            post: req.body.postId,
            text: req.body.text,
            author: req.body.userId,
        }
    );

    try {
        const newComment = await comment.save();
        res.status(200).json(newComment);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

// Like comment
export const like_comment = async (req, res) => {
    try {
        const comment = Comment.findByIdAndUpdate(req.body.commentId, {
            $push: {'likes': req.body.userId}
        }, {new: true});

        res.status(200).json(comment);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
    
}

// Unlike comment
export const unlike_comment = async (req, res) => {
    try {
        const comment = Comment.findByIdAndUpdate(req.body.commentId, {
            $pull: {'likes': req.body.userId}
        });

        res.status(200).json(comment);
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}