import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { selectLoggedIn, selectToken } from "./features/auth/loginSlice";
import { fetchMain, selectProfile } from "./features/profile/profileSlice";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { UserList } from './features/profile/UserList';
import { Feed } from './features/feed/Feed';
import { Login } from './features/auth/Login';
import { Signup } from './features/auth/Signup';
import {MainProfile} from './features/profile/MainProfile';
import { OtherProfile } from './features/profile/OtherProfile';
import { MobileMenu } from './components/MobileMenu';

export const App = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectLoggedIn);
    const token = useSelector(selectToken);
    const profileStatus = useSelector((state) => state.profile.status);
    const profile = useSelector(selectProfile);

    //  Make sure redux is always updated with the latest profile from DB
     useEffect(() => {
        if (isLoggedIn) {
            if (profileStatus==='idle') {
                dispatch(fetchMain(token));
            }   
        }
       
    }, [dispatch, profileStatus, token, isLoggedIn]);

    return (
        <Router>
            <div className='h-screen flex'>
                <Sidebar />
                <div className='w-full flex flex-col bg-gradient-to-r from-slate-50 to-gray-100'>
                    <TopBar />
                    <Routes>
                        <Route exact path='/' element={<Feed />} />
                        <Route exact path='/profile' element={<MainProfile />} />
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/signup' element={<Signup />} />
                        <Route exact path='/mobile-menu' element={<MobileMenu />} />
                        <Route exact path='/user-search' element={<UserList />} />
                        <Route exact path='/profile/:id' element={<OtherProfile />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}