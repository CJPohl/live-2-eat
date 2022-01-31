import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProfile } from "./profileSlice";

export const ProfileHeader = () => {
    const profile = useSelector(selectProfile);

    const profileIcon = (profile.calorie_current <= profile.calorie_max) ? <div className="bg-green-600 rounded shadow-lg text-8xl p-1"><i className="far fa-grin-beam"></i></div> : <div className="bg-red-600 rounded shadow-lg text-8xl p-1"><i className="far fa-grin-beam-sweat"></i></div>;

    return (
        <section className="flex flex-col lg:flex-row justify-between items-center border border-black p-6">
                <div className="flex items-center gap-5">
                    {profileIcon}
                    <div className="flex flex-col">
                        <h1 className="text-3xl tracking-wider">{profile.first_name + ' ' + profile.last_name}</h1>
                        <span>{profile.about}</span>
                    </div>
                </div>
                <div className="flex gap-5 text-slate-300 text-xl text-center">
                    <Link className="bg-indigo-900 rounded-lg shadow-lg p-2" to='/profile/followers'>
                        <h3>Followers</h3>
                        <span>{profile.followers.length}</span>
                    </Link>
                    <Link className="bg-indigo-900 rounded-lg shadow-lg p-2" to='/profile/following'>
                        <h3>Following</h3>
                        <span>{profile.following.length}</span>
                    </Link>
                </div>
                <Link className="flex items-center gap-3 bg-indigo-900 text-slate-300 text-xl py-3 px-2 rounded shadow-lg" to='/more-info'>
                    <p>More Info</p>
                    <i className="fas fa-arrow-right"></i>
                </Link>
        </section>
    );
}