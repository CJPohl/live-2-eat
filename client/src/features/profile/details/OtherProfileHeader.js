import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { followProfile, selectProfile, unfollowProfile } from "../profileSlice";
import { ProfileMoreInfo } from "./ProfileMoreInfo";

export const OtherProfileHeader = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const mainProfile = useSelector(selectProfile);

    // Hold state for fetched profile
    const [fetchedProfile, setProfile] = useState('');

    // Fetch profile on render
    useEffect(() => {
        try {
           axios.get(`http://localhost:5000/profile/${id}`)
            .then((response) => {
                setProfile(response.data);
            }, (err) => {
                console.log(err.message);
            });  
        } catch (err) {
            console.log(err)
        }
       
    }, [id]);
    const profile = fetchedProfile;

    // Show changes of followers
    useEffect(() => {
        const followerSpan = document.getElementById('follower-span');
        followerSpan.textContent = (profile.followers) ? profile.followers.length : 0;
    }, [profile])

    // Handle the update of follow and unfollow
    const handleFollow = async () => {
        try {
            const payload = await dispatch(followProfile({followerId: mainProfile._id, followedId: profile._id})).unwrap();
            setProfile(payload.updatedFollowed);
        } catch (err) {
            console.log(err);
        }
    }

    const handleUnfollow = async () => {
        try {
            const payload = await dispatch(unfollowProfile({followerId: mainProfile._id, followedId: profile._id})).unwrap();
            setProfile(payload.updatedFollowed);
        } catch (err) {
            console.log(err);
        }
    }
 
    // show follow/unfollow button if other profile
    const followBtn = <button onClick={handleFollow} className="flex gap-1 items-center bg-indigo-900 text-slate-300 text-md p-1 lg:text-lg lg:py-2 lg:px-2 rounded shadow">Follow<span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg></span></button>;

    const unfollowBtn = <button onClick={handleUnfollow} className="flex gap-1 items-center bg-indigo-900 text-slate-300 text-md p-1 lg:text-lg lg:py-2 lg:px-2 rounded shadow">Unfollow<span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg></span></button>;

    // show follow/unfollow depending on state
    const fBtn = (mainProfile.following.find(element => element===profile._id)) ? unfollowBtn : followBtn;

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
                        <span id='follower-span'></span>
                    </Link>
                    <Link className="bg-indigo-900 rounded shadow text-sm p-1 md:text-md md:p-2" to={`/profile/following/all/${profile._id}`}>
                        <h3>Following</h3>
                        {/* If no followers show 0 else the length */}
                        <span>{(profile.following) ? profile.following.length : 0}</span>
                    </Link>
                </div>
                <div className="flex gap-5">
                {fBtn}
                <button type='button' onClick={showMoreInfo} className="flex items-center gap-3 bg-indigo-900 text-slate-300 text-md p-1 lg:text-lg lg:py-2 lg:px-2 rounded shadow">
                    <p>More Info</p>
                    <i className="fas fa-arrow-right"></i>
                </button>
                </div>
                <ProfileMoreInfo profile={profile}/>
        </section>
    );
}