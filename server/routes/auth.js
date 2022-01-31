import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import passport from 'passport';
import bcrypt from 'bcryptjs'

import User from '../models/User.js';

// Create user POST
router.post('/signup', async (req, res) => {
  try {
    const user = await User.findOne({'email': req.body.email});
    if (user) {
      return res.status(401).json({msg: 'Profile with this email already exists'});
    }
  } catch (err) {
    res.status(404).json({msg: err.message});
  }

  const newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
    gender: req.body.gender,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  try {
    await newUser.save();
    res.status(200).json({msg: 'User Created'});
  } catch (err) {
    res.status(404).json({msg: err.message});
  }
})

// User login POST
router.post('/login', async (req, res, next) => {

  passport.authenticate('local', {session: false}, async (err, user) => {
      try {
          if (err || !user) {
              res.status(401).json({message: 'Wrong Email or Password'});
              return next(err);
          }

          req.login(user, {session: false}, async (error) => {
              if (error) return next(error);
              
              const body = {_id: user._id, email: user.email};
              const token = jwt.sign({user: body}, 'food');

              try {
                await User.findByIdAndUpdate(user._id, {
                  current_token: token
                });
              } catch (err) {
                res.status(404).json({msg: err.message});
                return next(err);
              }
              
              return res.json({user, token});
          }
          );
      } catch (err) {
          return next(err);
      }
  }
  )(req, res, next);
});

export default router;