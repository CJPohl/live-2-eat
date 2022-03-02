import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectLoggedIn } from "../../auth/loginSlice";
import { OtherProfileTabSelector } from "../details/OtherProfileTabSelector";
import { selectProfile } from "../profileSlice";
import { OtherProfileHeader } from "../details/OtherProfileHeader";


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

    const content = (!isLoggedIn) ? '' : <div id='profile-all' className="fade-in p-6 2xl:px-72 2xl:py-20 h-full flex flex-col">
    <OtherProfileHeader  />
    <OtherProfileTabSelector />
    </div>
  
    return (
        content
    );
}