import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectProfile } from "./profileSlice";


export const OtherProfile = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const profile = useSelector(selectProfile);

    useEffect(() => {
        if (id===profile._id) {
            navigate("/", { replace: true });
        } 
    })
  

    return (
        <section></section>
    )
}