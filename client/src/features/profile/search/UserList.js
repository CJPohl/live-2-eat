import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProfile, selectProfileSearchResults } from "../profileSlice";

export const UserList = () => {
    const profile = useSelector(selectProfile);
    const profileResults = useSelector(selectProfileSearchResults);
    

    // DOM content for search query
    const profiles = profileResults.map((user) => (
        <Link  key={user._id} to={`/profile/${user._id}`}>
            <article className="flex items-center justify-between border border-black p-6">
                <div className="flex flex-col">
                    <p className="text-lg text-indigo-600/90 font-bold">{user.first_name + ' ' + user.last_name}</p>
                    <p className="text-slate-400">{user.about.substring(0, 20)}...</p>
                </div>
                <span className="text-lg">{user.followers.length} Followers</span>
            </article>
        </Link>
    ));

    // Fix grammar regarding length of search query
    const resultLength = (profileResults.length > 1 || profileResults.length===0) ? `${profileResults.length} Results` : '1 Result';
    

    return (
        <section className="p-6 2xl:px-72 2xl:py-20 h-screen lg:h-full flex flex-col gap-6">
            <h3 className="text-3xl tracking-wider">{resultLength}</h3>
            <div className="flex flex-col  gap-6 w-full justify-between">
                {profiles}     
            </div>
        </section>
    )
}