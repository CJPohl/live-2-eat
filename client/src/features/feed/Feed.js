import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectLoggedIn, selectToken } from "../auth/loginSlice";
import { fetchMain } from "../profile/profileSlice";

export const Feed = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(selectLoggedIn);
    const token = useSelector(selectToken);
    const profileStatus = useSelector((state) => state.profile.status);

    // When user goes on site redirect to login page
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login", { replace: true });
        }
    }, [isLoggedIn, navigate]);
    
    return (
        <section>

        </section>
    )
}