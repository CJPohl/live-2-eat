import React from "react";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
import { selectProfile } from "../profileSlice";

import { ProfileMoreInfo } from "./ProfileMoreInfo";

export const ProfileHeader = () => {
    const profile = useSelector(selectProfile);

    // show profile icon depending on calorie state of user
    const profileIcon = (profile.calorie_current <= profile.calorie_max) ? <div className="bg-green-600 rounded shadow-lg text-5xl lg:text-8xl p-1"><i className="far fa-grin-beam"></i></div> : <div className="bg-red-600 rounded shadow-lg text-5xl lg:text-8xl p-1"><i className="far fa-grin-beam-sweat"></i></div>;

    // start animation and navigate to more info
    const showMoreInfo = () => {
        const profileAll = document.getElementById('profile-all');
        profileAll.classList.add('transition');
        profileAll.classList.add('-translate-x-full');

        const moreInfo = document.getElementById('more-info');
        moreInfo.classList.replace('hidden', 'flex');
    }

    return (
        <section className="bg-indigo-600 flex flex-col gap-4 md:gap-5 sm:flex-row justify-between items-center p-6 rounded shadow-lg">
                <div className="flex items-center gap-5">
                    {profileIcon}
                    <div className="bg-indigo-900 p-2 lg:p-4 rounded shadow flex flex-col">
                        <h1 className="text-xl text-slate-300 lg:text-3xl tracking-wider">{profile.first_name + ' ' + profile.last_name}</h1>
                        <span className="text-xs text-slate-300/70 lg:text-sm">{profile.about}</span>
                    </div>
                </div>
                <div className="flex gap-5 text-slate-300 text-xl text-center ">
                    <Link className="bg-indigo-900 rounded shadow text-sm p-1 md:text-md md:p-2" to={`/profile/followers/all/${profile._id}`}>
                        <h3>Followers</h3>
                        <span>{profile.followers.length}</span>
                    </Link>
                    <Link className="bg-indigo-900 rounded shadow text-sm p-1 md:text-md md:p-2" to={`/profile/following/all/${profile._id}`}>
                        <h3>Following</h3>
                        <span>{profile.following.length}</span>
                    </Link>
                </div>
                <div className="flex gap-5">
                <button type='button' onClick={showMoreInfo} className="flex items-center gap-3 bg-indigo-900 text-slate-300 text-md p-1 lg:text-lg lg:py-2 lg:px-2 rounded shadow">
                    <p>More Info</p>
                    <i className="fas fa-arrow-right"></i>
                </button>
                </div>
                <ProfileMoreInfo profile={profile}/>
        </section>
    );
}