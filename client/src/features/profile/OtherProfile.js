import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectProfile } from "./profileSlice";


export const OtherProfile = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const profile = useSelector(selectProfile);

    // If other profile selected has its params equalling the user's id, navigate to main profile
    useEffect(() => {
        if (id===profile._id) {
            navigate("/profile", { replace: true });
        } 
    })
  

    return (
        <section></section>
    )
}