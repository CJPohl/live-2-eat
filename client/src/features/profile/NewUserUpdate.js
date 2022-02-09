import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { calcBMI } from "./CalcBMI";
import { calcMax } from "./CalcMax";
import { falsifyNewUser, selectProfile, updateAbout, updateBMI, updateCalorieMax, updateHeight, updateWeight, updateWeightGoal, updateWeightGoalType } from "./profileSlice";

export const NewUserUpdate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const profile = useSelector(selectProfile);
    

    // Input states
    const [bio, setBio] = useState('');
    const [goalType, setGoalType] = useState('');
    const [weight, setWeight] = useState('');
    const [weightGoal, setWeightGoal] = useState('');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
 
    const handleBio = e => setBio(e.target.value);
    const handleGoalType = type => setGoalType(type);
    const handleWeight = e => setWeight(e.target.value);
    const handleWeightGoal = e => setWeightGoal(e.target.value);
    const handleFeet = e => setFeet(e.target.value);
    const handleInches = e => setInches(e.target.value);

    // Attempt to dispatch profile updates
    const attemptSubmit = async () => {
        try {
            await dispatch(updateAbout({_id: profile._id, bio})).unwrap();
            await dispatch(updateWeightGoalType({_id: profile._id, weightGoalType: goalType})).unwrap();
            await dispatch(updateWeight({_id: profile._id, weight})).unwrap();
            await dispatch(updateWeightGoal({_id: profile._id, weightGoal})).unwrap();
            await dispatch(updateHeight({_id: profile._id, height: `${feet}' ${inches}''`})).unwrap();

            const bmi = calcBMI(feet, inches, weight);
            await dispatch(updateBMI({_id: profile._id, bmi})).unwrap();

            const max = calcMax(profile, feet, inches, weight);
            await dispatch(updateCalorieMax({_id: profile._id, calorieMax: max})).unwrap();
            
            await dispatch(falsifyNewUser(profile));
            navigate('/', {replace: true});
        } catch (err) {
            console.log(err.message);
        }
    }


    return (
        <article className="h-full flex flex-col items-center justify-center text-xl lg:text-3xl tracking-wider text-slate-300 font-light">
                <h1 className="fade-in-slow mb-10 text-2xl font-bold lg:text-5xl">This is the era of YOU</h1>
                <form className="fade-in-slow bg-slate-700/50 rounded-lg p-5 w-full flex flex-col justify-center gap-5 lg:gap-10 shadow-lg">
                    <h2>Describe yourself in a few words...</h2>
                    <textarea className="fade-in-slow text-black resize-none" value={bio} onChange={handleBio}></textarea>
                    <h2>My weight goals are:</h2>
                    <div className="fade-in-slow flex justify-evenly">
                        <button type="button" className="transition ease-in-out focus:bg-indigo-500 bg-indigo-600 p-2 lg:p-4 rounded shadow" onClick={() => handleGoalType('lose')}>Lose</button>
                        <button type="button" className="transition ease-in-out focus:bg-indigo-500 bg-indigo-600 p-2 lg:p-4 rounded shadow" onClick={() => handleGoalType('gain')}>Gain</button>
                    </div>
                    <h2>I weigh... (in lbs)</h2>
                    <input className="fade-in-slow text-black p-2" type='number' placeholder="Your Weight" value={weight} onChange={handleWeight}></input>
                    <h2>...but I would like to weigh... (in lbs)</h2>
                    <input className="fade-in-slow text-black p-2" type='number' placeholder="Goal Weight" value={weightGoal} onChange={handleWeightGoal}></input>
                    <h2>I am...</h2>
                    <div className="flex items-center gap-2">
                        <input className="fade-in-slow text-black p-2 w-1/2" type='number' placeholder="Feet" value={feet} onChange={handleFeet}></input>
                        <input className="fade-in-slow text-black p-2 w-1/2" type='number' placeholder="Inches" value={inches} onChange={handleInches}></input>
                    </div>
                    <button type="button" className="bg-indigo-600 p-2 lg:p-4 rounded shadow" onClick={attemptSubmit}>Submit</button>
                </form>
            </article>
    );
}