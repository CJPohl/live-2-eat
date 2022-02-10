import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectFoodSearchResults } from "./profileSlice";

export const FoodList = () => {
    const foodResults = useSelector(selectFoodSearchResults);

    // DOM content for search query
    const foods = foodResults.map((food) => (
        <Link to={`/food/${food._id}`}>
            <article className="flex items-center justify-between border border-black p-6" key={food._id}>
                <div className="flex flex-col">
                    <p className="text-lg text-indigo-600/90 font-bold">{food.name}</p>
                    <p className="text-slate-400">{food.sub_name}</p>
                </div>
                <span className="text-lg">{Math.floor(food.calories)} Cal</span>
            </article>
        </Link>
    ));

    // Fix grammar regarding length of search query
    const resultLength = (foodResults.length > 1 || foodResults.length===0) ? `${foodResults.length} Results` : '1 Result';

    return (
        <section className="p-6 2xl:px-72 2xl:py-20 h-screen lg:h-full flex flex-col gap-6">
            <h3 className="text-3xl tracking-wider">{resultLength}</h3>
            <div className="flex flex-col  gap-6 w-full justify-between">
                {foods}     
            </div>
        </section>
    )
}