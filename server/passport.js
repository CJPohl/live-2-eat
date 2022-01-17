import dotenv from 'dotenv';
dotenv.config();

import passport from "passport";
import FacebookStrategy from "passport-facebook";

import User from './models/User.js';

// Configure Passport authenticated session persistence.
passport.serializeUser((user, done) => {
    done(null, user);
  });
      
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

// Facebook strategy
passport.use(new FacebookStrategy({
    clientID: process.env['FACEBOOK_APP_ID'],
    clientSecret: process.env['FACEBOOK_APP_SECRET'],
    callbackURL: 'http://localhost:3000/return'
},
async (accessToken, refreshToken, profile, done) => {
    try {
        console.log(profile);
        // Check if user has logged in before
        const user = await User.findOne({facebook_id: profile.id});

        // If user exists return user
        if (user) {
            done(null, user);
        } else { // Create a new user
            const user = new User({
                facebook_id: profile.id,
                name: profile.name,
                email: profile.email,
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