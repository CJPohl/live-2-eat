import React, { useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectLoggedIn } from "../features/auth/loginSlice";
import { searchProfiles, selectProfile, selectIsNew, searchFoods } from "../features/profile/profileSlice";


export const TopBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(selectLoggedIn);
    const profile = useSelector(selectProfile);
    const isNew = useSelector(selectIsNew);

    // Search input and mode
    const [input, setInput] = useState('');
    const [searchMode, setMode] = useState('food');

    const handleInput = e => setInput(e.target.value);
    const handleSearchMode = e => setMode(e.target.value);

    // When input is empty block search
    const canSearch = (input!=='') ? true : false;

    // Handle search function
    const attemptSearch = async (search) => {
        if (searchMode==='profile') {
            try {
                await dispatch(searchProfiles(search));
                navigate('/user-search', {replace: true});
            } catch (err) {
                console.log(err.message);
            }
        } else {
            try {
                await dispatch(searchFoods(search));
                navigate('/food-search', {replace: true});
            } catch (err) {
                console.log(err.message);
            }
        }
    }

    // Allow login on enter
    const enterSubmit = (e) => {
        if (canSearch) {
            if (e.key==='Enter') attemptSearch(input);
        }
    }

    const content = (!isLoggedIn || isNew) ? '' : <header className="flex shadow-md">
    <nav className="w-full flex flex-col items-center lg:flex-row justify-between px-3 sm:px-5 lg:px-10 py-2 gap-3 2xl:pr-72">
        <div className="w-full flex items-center lg:gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type='text' placeholder="Search by food or by name" className="w-full p-6 placeholder:text-slate-400 outline-none bg-gradient-to-r from-slate-50 to-gray-100 text-md lg:text-xl tracking-wider" onKeyPress={enterSubmit} onChange={handleInput} value={input}></input>
            <Link className="flex items-center bg-indigo-900 rounded p-1 shadow-lg lg:hidden" to='/mobile-menu'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </Link>
        </div>
        <div className="flex items-center gap-5">
            <select onChange={handleSearchMode} className="bg-indigo-900 text-center text-slate-300 lg:text-xl py-1 lg:py-3 px-1 lg:px-2 rounded cursor-pointer shadow-lg">
                <option value="food">Search Food</option>
                <option value="profile">Search Profiles</option>
            </select>
        </div>
    </nav>
</header>
    return (
        content
    )
}