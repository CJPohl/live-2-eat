import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn, logout } from "../features/auth/loginSlice";

export const MobileMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(selectLoggedIn);

    // Logout current state
    const attemptLogout = () => {
        dispatch(logout());
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
        <aside className="fade-in lg:hidden absolute w-full h-screen flex bg-indigo-700 p-16">
            <nav className="h-full flex justify-center w-full text-xl sm:text-2xl text-slate-300">
                <div className="h-full flex flex-col gap-4 items-center">
                      <div className="flex justify-center w-1/2">
                        <Link className="w-full" to='/'>
                        <div className="bg-indigo-900 px-4 py-1 rounded-xl flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-10 -mb-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-10 -mb-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-10 -mb-6 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-10 -mb-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-10 -mb-6 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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