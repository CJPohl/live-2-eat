import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';

const app = express();

// Import routes
import routes from './routes/routes.js';

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
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// App use routes
app.use('/', routes);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));