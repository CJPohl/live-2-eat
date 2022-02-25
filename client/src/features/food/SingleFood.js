import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const SingleFood = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [food, setFood] = useState('');

    // Fetch single food item at page render
    useEffect(() => {
        axios.get(`http://localhost:5000/food/single/${id}`)
        .then((result) => {
            setFood(result.data);
        },
        (err) => {
            console.log(err.message);
        });
    }, []);

    // When clicked animate the div to return to search list
    const navigateToResults = () => {
        const div = document.getElementById('single-food');
        div.classList.add('translate-y-full');
        setTimeout(() => navigate('/food-search', {replace: true}), 400);
    }

    return (
        <section id='single-food' className="transition ease-in-out duration-700 absolute h-screen lg:h-auto top-0 left-0 right-0 bottom-0  flex justify-center items-center">
            <div className="relative fade-in bg-indigo-900 p-9 rounded shadow-xl flex flex-col gap-1 lg:gap-4">
                <button type="button" onClick={navigateToResults}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-2 text-slate-300/50 top-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-slate-200/80 text-xl lg:text-3xl font-bold">{food.name}</h2>
                <p className="lg:text-2xl text-slate-300/50">{food.sub_name}</p>
                <span className="text-slate-200/80 text-xl lg:text-2xl">{Math.floor(food.calories)} calories per serving</span>
            </div>
        </section>
    );
}