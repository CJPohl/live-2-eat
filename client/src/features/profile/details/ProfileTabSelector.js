import React, { useState } from "react";

import { ProfileFood } from "./ProfileFood";
import { ProfileSettings } from "./ProfileSettings";

export const ProfileTabSelector = () => {
    const [currentTab, toggleTab] = useState('food');

    // Dictate tab content depending on current tab selected
    let content;
    if (currentTab==='food') {
        content= <ProfileFood />
    }
    else if (currentTab==='posts') {
        content='';
    } else {
        content= <ProfileSettings />
    }

    const toggleFood = () => {
        if (currentTab==='settings') {
            toggleTab('food');
        }
    }

    const toggleSettings = () => {
        if (currentTab==='food') {
            toggleTab('settings');
        }
    }
    
    const togglePosts = () => {
        if (currentTab==='posts') {
            toggleTab('posts');
        }
    }

    return (
        <div>
            <section className="flex flex-col gap-5 py-10 text-xl lg:text-2xl ">
                <div className="flex gap-10 justify-evenly lg:justify-start">
                    <button type="button" onClick={toggleFood}>Food</button>
                    <button type="button" onClick={togglePosts}>Posts</button>
                    <button type="button" onClick={toggleSettings}>Settings</button>
                </div>
                <div className="border-t-2 text-slate-400"></div>
            </section>
            <section>
                {content}
            </section>
        </div>
    );
}