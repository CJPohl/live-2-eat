import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {logout, selectLoggedIn } from "../features/auth/loginSlice";
import { initSlice } from "../features/profile/profileSlice";

export const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(selectLoggedIn);

    // Logout current state
    const attemptLogout = () => {
        dispatch(logout());
        dispatch(initSlice());
        navigate("/", { replace: true });
    }

    // If user is logged in show logout button, if user not logged in show login
    const loginBtn = !isLoggedIn ? (
      <Link to='/login'>Login</Link>
      ) : (
        <button
          type="button"
          className=""
          onClick={attemptLogout}
        >
          Logout
        </button>
      );

    return (
        <aside className="hidden lg:flex bg-indigo-700 p-16">
            <nav className="h-full text-2xl text-slate-300">
                <div className="h-full flex flex-col gap-4 items-start">
                      <div className="flex justify-center w-full">
                        <Link className="w-full" to='/'>
                          <div className="w-full h-full bg-indigo-900 flex flex-col items-center rounded-xl shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-16 -mb-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-16 -mb-8 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-16 -mb-8 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-16 -mb-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-16 -mb-8 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-16 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </Link>
                      </div>
                      <ul className="h-full flex flex-col justify-between">
                        <li className="w-full border-t"></li>
                        <Link to='/profile'>My Profile</Link>
                        <Link to='/followers'>Followers</Link>
                        <Link to='/following'>Following</Link>
                        <li className="w-full border-t"></li>
                        <li>Add Food</li>
                        <li>Today's Food</li>
                        <li>Favorite Foods</li>
                        <li>Weight History</li>
                        <li>Recipes</li>
                        <li className="w-full border-t"></li>
                        <li>{loginBtn}</li>
                        <li><Link to='/signup'>Sign up</Link></li>
                      </ul>
                </div>
            </nav>
        </aside>
    );
}