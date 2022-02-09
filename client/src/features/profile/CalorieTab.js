import React, { useEffect } from "react";
import { WidthPercentage } from "../../components/WidthPercentage";

export const CalorieTab = (props) => {
    const profile = props.profile;



    // Update food meter on render
    useEffect(() => {
        setTimeout(() => WidthPercentage('daily', profile.calorie_current, profile.calorie_max), 800);
    });

    // Animate calorie numbers to state
    
    const cycleNum = (id, start, end, duration) => {
        let startTimeStamp = null;
        const step = (timestamp) => {
            if (!startTimeStamp) startTimeStamp = timestamp;
            const progress = Math.min((timestamp - startTimeStamp) / duration, 1);
            id.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Animate calorie current numbers
    useEffect(() => {
        const id = document.getElementById('current');
        setTimeout(() => cycleNum(id, 0, profile.calorie_current, 1000), 250);
    });

    // Animate calorie under/over numbers
    useEffect(() => {
        const id = document.getElementById('left');
        const cals = profile.calorie_max - profile.calorie_current;
        setTimeout(() => cycleNum(id, 0, cals, 1000), 500);
    })

    return (
        <section className="fade-in bg-indigo-900 p-4 rounded shadow-xl flex flex-col gap-2 2xl:gap-12">
            <div className="flex flex-col 2xl:flex-row gap-2 2xl:gap-6">
                {/* Calorie header */}
                <div className="bg-indigo-800/10 rounded py-5 grid grid-cols-4 2xl:grid-cols-2 2xl:w-1/3 2xl:px-4 2xl:grid-rows-2 2xl:gap-3 text-md shadow">
                    <div className="flex flex-col items-center 2xl:items-start justify-center">
                        <span className="text-slate-300/50 font-bold">Budget</span>
                        <p className="bg-indigo-900 rounded lg:text-xl text-slate-200">{profile.calorie_max}</p>
                    </div>
                    <div className="flex flex-col items-center 2xl:items-start justify-center">
                        <span className="text-slate-300/50 font-bold">Current</span>
                        {(profile.calorie_current > profile.calorie_max) ? <p id='current' className="bg-red-600 w-1/2 lg:w-14 text-center rounded lg:text-xl text-slate-200">0</p> : <p id='current' className="bg-green-600 w-1/2 lg:w-14 text-center rounded lg:text-xl text-slate-200">0</p>}
                    </div>
                    <div className="flex flex-col items-center 2xl:items-start justify-center">
                        <span className="text-slate-300/50 font-bold">Exercise</span>
                        <p className="text-center rounded lg:text-xl text-slate-200">0</p>
                    </div>
                    <div className="flex flex-col items-center 2xl:items-start justify-center">
                        {(profile.calorie_current > profile.calorie_max) ? <span className="text-slate-300/50 font-bold">Over</span> : <span className="text-slate-300/50 font-bold">Under</span>}
                        {(profile.calorie_current > profile.calorie_max) ? <p id='left' className="bg-red-600 w-1/2 lg:w-14 text-center rounded lg:text-xl text-slate-200">0</p> : <p id='left' className="bg-green-600 w-1/2 lg:w-14 text-center rounded lg:text-xl text-slate-200">0</p>}
                    </div>
                </div>
                {/* Daily perecent */}
                <div className="bg-indigo-800/10 py-5 rounded shadow 2xl:w-2/3">
                    <div className="flex flex-col justify-center h-full gap-3 px-4">
                        <h5 className="text-slate-300/50 font-bold">Daily %</h5>
                        <div className="relative rounded-xl h-2 w-full bg-indigo-800/50 shadow">
                            <div id='daily' className="ease-in transition-all duration-1000 w-0 absolute rounded-xl h-2 bg-green-600/80"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}