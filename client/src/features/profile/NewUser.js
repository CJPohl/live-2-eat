import React, { useState } from "react";
import { NewUserUpdate } from "./NewUserUpdate";

export const NewUser = () => {
    const [ifReady, setReady] = useState(false);
    
    const landingContent = (
        <article className="h-full flex flex-col gap-10 lg:gap-16 items-center justify-center text-2xl lg:text-4xl tracking-wider text-slate-300 fade-in">
            <h2 className="fade-in-slow">Hey, we need some info...</h2>
            <h2 className="fade-in-slower">Let's do this real quick.</h2>
            <button type="button" className="fade-in-slower bg-indigo-600 p-2 lg:p-4 rounded-lg shadow-lg" onClick={() => setReady(true)}>Ready?</button>
        </article>
    );

    // If ready button is submitted render update screen
    let content = (!ifReady) ? landingContent : <NewUserUpdate />

    return (
        <section className="bg-indigo-900 h-screen">
            <div className="w-4/5 max-w-7xl mx-auto h-full">
                {content}
            </div>
        </section>
    );
}