import dotenv from 'dotenv';
dotenv.config();

import passport from "passport";
import 'passport-local';
import passportLocal from 'passport-local';
import bcrypt from 'bcryptjs';

import passportJwt from 'passport-jwt';
const JWTstrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;

const LocalStrategy = passportLocal.Strategy;

import User from './models/User.js';

// Local login strategy
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
async (email, password, done) => {
    try {
        // query admin user
        const user = await User.findOne({email});
        if (!user) {
            return done(null, false, {message: 'Incorrect Email'});
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user, {message: 'Logged In Successfully'});

    } catch (err) {
        return done(err);
    }
}));

// JWT strategy
passport.use(
    new JWTstrategy(
        {
            secretOrKey: 'food',
            jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token'),
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (err) {
                done(err);
            }
        }
    )
);