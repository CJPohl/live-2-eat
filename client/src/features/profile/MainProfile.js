import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLoggedIn } from "../auth/loginSlice";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileTabSelector } from "./ProfileTabSelector";

export const MainProfile = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(selectLoggedIn);

    // When user goes on site redirect to login page
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login", { replace: true });
        }
    }, [isLoggedIn, navigate]); 

    const content = (!isLoggedIn) ? '' : <div className="fade-in p-6 2xl:px-72 2xl:py-20  h-full flex flex-col">
    <ProfileHeader />
    <ProfileTabSelector /> 
 </div>

    return (
        content
    );
}