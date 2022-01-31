import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProfile, selectProfileSearchResults } from "./profileSlice";

export const UserList = () => {
    const profile = useSelector(selectProfile);
    const profileResults = useSelector(selectProfileSearchResults);



    const profileList = profileResults.map()

    return (
        <section>
            <Link to='/profile/61ef05c5a15ba19163d9a227'>Me</Link>
        </section>
    )
}