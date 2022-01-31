import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectLoggedIn } from "../auth/loginSlice";
import { selectProfile } from "./profileSlice";

import { ProfileHeader } from "./ProfileHeader";
import { ProfileTabSelector } from "./ProfileTabSelector";

export const MainProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const profile = useSelector(selectProfile);
    const isLoggedIn = useSelector(selectLoggedIn);

    // When user goes on site redirect to login page
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login", { replace: true });
        }
    }, [isLoggedIn, navigate]);

    const content = (!isLoggedIn) ? '' : <div className="fade-in md:px-56 md:py-20">
    <ProfileHeader />
    <ProfileTabSelector /> 
 </div>

    return (
        content
    );
}