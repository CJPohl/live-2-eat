import React from "react";
import { useSelector } from "react-redux";
import { selectProfile } from "./profileSlice";

export const ProfileFood = () => {
    const profile = useSelector(selectProfile);
    return (
        <section>
            <div className="flex flex-col gap-2">
                {(profile.calorie_current < profile.calorie_max) ? <p className="bg-red-600 w-6 lg:w-14 text-center rounded lg:text-xl text-slate-200">{profile.calorie_current}</p> : <p className="bg-green-600 w-6 lg:w-14 text-center rounded lg:text-xl text-slate-200">{profile.calorie_current}</p>}
                <p className="bg-indigo-900 w-6 lg:w-14 text-center rounded lg:text-xl text-slate-200">{profile.calorie_max}</p>
            </div>
        </section>
    )
}