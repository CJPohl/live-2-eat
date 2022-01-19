import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import passport from 'passport';

const app = express();

// Import routes
import auth from './routes/auth.js';
import feed from './routes/feed.js';
import profile from './routes/profile.js';
import food from './routes/food.js';

// Connect MongoDB
import mongoose from 'mongoose';
const mongoDB = process.env.MONGO_PASS;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Init Port
const PORT = process.env.PORT || 5000;

// Init other middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// Init passport and session
import './passport.js';
app.use(passport.initialize());

// App use routes
app.use('/auth', auth);
app.use('/feed', feed);
app.use('/profile', profile);
app.use('/food', food);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));