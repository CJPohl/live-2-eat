import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectFoodSearchResults } from "../profileSlice";

export const FoodList = () => {
    const foodResults = useSelector(selectFoodSearchResults);

    // DOM content for search query
    const foods = foodResults.map((food) => (
        <div key={food._id}>
            <article className="grid grid-cols-3 items-center border border-black p-6" >
                <Link to={`/food/${food._id}`} className="col-start-1 col-end-3 flex flex-col">
                    <p className="text-md lg:text-lg text-indigo-600/90 font-bold">{food.name}</p>
                </Link>
                <div className="flex justify-end items-center gap-3">
                    <span className="text-lg justify-self-end text-slate-400">{Math.floor(food.calories)} Cal</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 justify-self-end" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </article>
        </div>
    ));

    // Fix grammar regarding length of search query
    const resultLength = (foodResults.length > 1 || foodResults.length===0) ? `${foodResults.length} Results` : '1 Result';

    return (
        <section className="p-6 2xl:px-72 2xl:py-20 overflow-y-scroll flex flex-col gap-6">
            <h3 className="text-3xl tracking-wider">{resultLength}</h3>
            <div className="flex flex-col gap-6 w-full justify-between ">
                {foods}     
            </div>
        </section>
    );
}