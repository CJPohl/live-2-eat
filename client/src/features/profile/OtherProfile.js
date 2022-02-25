import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectLoggedIn } from "../auth/loginSlice";
import { OtherProfileTabSelector } from "./OtherProfileTabSelector";
import { ProfileHeader } from "./ProfileHeader";
import { selectProfile } from "./profileSlice";
import { ProfileTabSelector } from "./ProfileTabSelector";


export const OtherProfile = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const profile = useSelector(selectProfile);
    const isLoggedIn = useSelector(selectLoggedIn);

    // When user goes on site redirect to login page
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login", { replace: true });
        }
    }, [isLoggedIn, navigate]); 

    // If other profile selected has its params equalling the user's id, navigate to main profile
    useEffect(() => {
        if (id===profile._id) {
            navigate("/profile", { replace: true });
        } 
    });

    // Hold state for fetched profile
    const [fetchedProfile, setProfile] = useState('');

    // Fetch profile on render
    useEffect(() => {
        axios.get(`http://localhost:5000/profile/${id}`)
        .then((response) => {
            setProfile(response.data);
        }, (err) => {
            console.log(err.message);
        });
    }, []);

    const content = (!isLoggedIn) ? '' : <div className="fade-in p-6 2xl:px-72 2xl:py-20  h-full flex flex-col">
    <ProfileHeader profile={fetchedProfile} />
    <OtherProfileTabSelector />
    </div>
  

    return (
        content
    );
}