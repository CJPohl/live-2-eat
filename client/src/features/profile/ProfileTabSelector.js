import React, { useState } from "react";

import { ProfileFood } from "./ProfileFood";
import { ProfileSettings } from "./ProfileSettings";

export const ProfileTabSelector = () => {
    const [currentTab, toggleTab] = useState('food');

    const content = (currentTab==='food') ? <ProfileFood /> : <ProfileSettings />;

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

    return (
        <div>
            <section className="flex flex-col gap-5 py-10 text-2xl ">
                <div className="flex gap-10">
                    <button type="button" onClick={toggleFood}>Food</button>
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