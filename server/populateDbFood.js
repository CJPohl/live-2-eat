#! /usr/bin/env node

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/

import fs from 'fs';
import Food from './models/Food.js';

// Parse JSON
let rawData = fs.readFileSync('mypyramid-food.json');
let parsedData = JSON.parse(rawData);


import mongoose from 'mongoose';
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Create food and save to database
const createFood = async (food) => {
    const newFood = new Food({
        name: food.Display_Name,
        sub_name: food.Portion_Display_Name,
        factor: food.Factor,
        calories: food.Calories
    });

    try {
        await newFood.save();
        console.log('Food saved');
    } catch (err) {
        console.log(err);
    }
}

// Loop through array and upload
for (let i=0; i<parsedData.length; i++) {
    createFood(parsedData[i]);
}

console.log('Upload Complete!');