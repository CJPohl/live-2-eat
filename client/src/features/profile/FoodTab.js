import React from "react";
import { Link } from "react-router-dom";

export const FoodTab = (props) => {
    const profile = props.profile;

     // List of foods
     const foodList = 
     <div>
         {(profile.foods_current.length >= 3) ? profile.foods_current.splice(-3).map(food => (
             <p>{food.name}</p>
         )) : profile.foods_current.map(food => (
             <p>{food.name}</p>
         ))}
     </div>

    return (
        <section className="fade-in bg-indigo-900 p-4 rounded shadow-xl flex flex-col gap-2 2xl:gap-12">
            {/* Food list */}
            <div className="bg-indigo-800/10 py-5 rounded shadow">
                <div className="flex flex-col justify-center h-full gap-3 px-4">
                    <div className="flex justify-between items-center">
                        <h5 className="text-slate-300/50 font-bold">Daily Foods</h5>
                        <Link className="bg-slate-900/30 text-slate-300/50 p-1 px-2 rounded-xl" to='/dailyfoods/all'>More</Link>
                    </div>
                    {foodList}
                </div>
            </div>
            {/* Favorite food list */}
            <div className="bg-indigo-800/10 py-5 rounded shadow">
                <div className="flex flex-col justify-center h-full gap-3 px-4">
                    <div className="flex justify-between items-center">
                        <h5 className="text-slate-300/50 font-bold">Favorite Foods</h5>
                        <Link className="bg-slate-900/30 text-slate-300/50 p-1 px-2 rounded-xl" to='/favoritefoods/all'>More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}