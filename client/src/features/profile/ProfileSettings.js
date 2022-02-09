import React, { useState } from "react";

import { UpdateProfile } from "./UpdateProfile";

export const ProfileSettings = () => {
    const [updateMode, updateUpdateMode] = useState('');

    const handleUpdate = (value) => updateUpdateMode(value);


    return (
        <section className="fade-in flex flex-col gap-6">
            <div className="flex flex-col items-start gap-3 border border-black p-6">
                <h3 className="text-3xl tracking-wider">About You</h3>
                <div className="flex flex-col 2xl:flex-row items-start gap-6 w-full justify-between">
                    <div>

                        <div className="flex flex-col items-start">
                            <button className="text-lg text-indigo-600/90 font-bold" type="button" onClick={() => handleUpdate('profile')}>Update Bio</button>
                            <span className="text-slate-400">Write something simple about yourself but memorable</span>
                        </div>
                    </div>
                    <div>

                        <div className="flex flex-col items-start">
                            <button className="text-lg text-indigo-600/90 font-bold" type="button" onClick={() => handleUpdate('current')}>Update Current Weight</button>
                            <span className="text-slate-400">Be truthful, both weight gains and losses are important in your journey</span>
                        </div>
                    </div>
                    <div>

                        <div className="flex flex-col items-start">
                            <button className="text-lg text-indigo-600/90 font-bold" type="button" onClick={() => handleUpdate('goal')}>Update Weight Goal</button>
                            <span className="text-slate-400">All journeys start with a goal in mind</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-3 border border-black p-6">
                <h3 className="text-3xl tracking-wider">Food and Calories</h3>
                <div className="flex flex-col 2xl:flex-row items-start gap-6 w-full justify-between">
                    <div>

                        <div className="flex flex-col items-start">
                            <button className="text-lg text-indigo-600/90 font-bold" type="button" onClick={() => handleUpdate('reset-food')}>Reset Food</button>
                            <span className="text-slate-400">A quick way to reset food for the day</span>
                        </div>
                    </div>
                </div>
            </div>
            <UpdateProfile updateMode={updateMode}/>
        </section>
    );
}