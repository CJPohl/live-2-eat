import dotenv from 'dotenv';
dotenv.config();

import passport from "passport";
import FacebookStrategy from "passport-facebook";

import User from './models/User.js';

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

// Facebook strategy
passport.use(new FacebookStrategy({
    clientID: process.env['FACEBOOK_APP_ID'],
    clientSecret: process.env['FACEBOOK_APP_SECRET'],
    callbackURL: 'http://localhost:5000/auth/return',
    profileFields: ['id', 'displayName', 'emails']
},
async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if user has logged in before
        const user = await User.findOne({facebook_id: profile.id});

        // If user exists return user and update accesstoken
        if (user) {
            const newUser = new User(
                {
                    token: accessToken,
                    _id: user._id
                }
            );
            try {
                const updateUser = await User.findByIdAndUpdate(user._id, newUser, {new: true});
                done(null, updateUser);
            } catch (err) {
                done(err);
            }

        } else { // Create a new user
            const user = new User({
                token: accessToken,
                facebook_id: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
            });
            try {
                await user.save();
                done(null, user);
            } catch (err) {
                done(err);
            }
        }
    } catch (err) {
        return done(err);
    }
}
));