import React, { useEffect } from "react";
import { WidthPercentage } from "../utils/WidthPercentage";

export const WeightTab = (props) => {
    const profile = props.profile;

     // Update meter on render for weight needed to be lost
     useEffect(() => {
        const toLose = profile.weight-profile.weight_goal;
        setTimeout(() => WidthPercentage('goal', profile.weight_change, toLose), 1000);
    });

    return (
        <section className="fade-in bg-indigo-900 p-4 rounded shadow-lg">
            <div className="flex flex-col gap-2 2xl:gap-6 2xl:flex-row">
                {/* Current Weight */}
                <div className="bg-indigo-800/10 py-5 rounded shadow 2xl:w-1/3 grid grid-cols-3 items-center">
                    <div className="flex flex-col items-center">
                        <h5 className="text-slate-300/50 font-bold">Weight</h5>
                        <span className="bg-indigo-900 rounded lg:text-xl text-slate-200">{profile.weight} lbs</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <h5 className="text-slate-300/50 font-bold">Change</h5>
                        <span className="bg-indigo-900 rounded lg:text-xl text-slate-200">{profile.weight_change} lbs</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <h5 className="text-slate-300/50 font-bold">BMI</h5>
                        <span className="bg-indigo-900 rounded lg:text-xl text-slate-200">{profile.bmi}</span>
                    </div>
                </div>
                {/* Weight Percentage */}
                <div className="bg-indigo-800/10 py-5 rounded shadow 2xl:w-2/3">
                    <div className="flex flex-col justify-center h-full gap-3 px-4">
                        <h5 className="text-slate-300/50 font-bold">To Goal %</h5>
                        <div className="relative rounded-xl h-2 w-full bg-indigo-800/50 shadow">
                            <div id='goal' className="ease-in transition-all duration-1000 absolute w-0 rounded-xl h-2 bg-green-600/80"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}