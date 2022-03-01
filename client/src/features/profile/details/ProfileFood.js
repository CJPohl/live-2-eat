import React from "react";
import { useSelector } from "react-redux";
import { selectProfile } from "../profileSlice";

import { CalorieTab } from "./CalorieTab";
import { WeightTab } from "./WeightTab";
import { FoodTab } from "./FoodTab";

export const ProfileFood = () => {
    const profile = useSelector(selectProfile);

    return (
        <div className="flex flex-col gap-10 lg:gap-20 justify-evenly">
           <CalorieTab profile={profile} />
           <WeightTab profile={profile} /> 
           <FoodTab profile={profile} />
        </div>  
    );
}