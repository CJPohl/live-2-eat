import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectLoggedIn, selectToken } from "../auth/loginSlice";
import { selectIsNew } from "../profile/profileSlice";

export const Feed = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(selectLoggedIn);
    const isNew = useSelector(selectIsNew);


    // When user goes on site redirect to login page
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login", { replace: true });
        }
    }, [isLoggedIn, navigate]);

    // If User is new to the app, navigate them to profile creation
    useEffect(() => {
            if (isNew) {
                navigate('/new-user', {replace: true});
            }
    }, [isLoggedIn, isNew, navigate]);
    
    return (
        <section>

        </section>
    )
}