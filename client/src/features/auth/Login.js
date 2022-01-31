import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { login, selectLoggedIn } from './loginSlice';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(selectLoggedIn);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState('placeholder');

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const canLogin = [email, password].every(Boolean);

    // If user is logged in navigate to home
    useEffect(() => {
        if (isLoggedIn) {
            navigate('/', {replace: true});
        }
    })

    // Attempt login, if failed set error msg and show input colors
    const attemptLogin = async () => {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const loginError = document.getElementById('login-error');
        if (canLogin) {
            try {
                await dispatch(login({email, password})).unwrap();
                navigate("/", { replace: true });
            } catch (err) {
                setMessage("Wrong Email or Password");
                emailInput.classList.replace('border-gray-400', 'border-red-700');
                passwordInput.classList.replace('border-gray-400', 'border-red-700')
                loginError.classList.replace('invisible', 'visible');
            }    
        }
    }

    // Allow login on enter
    const enterSubmit = (e) => {
       if (e.key==='Enter') attemptLogin();
    }

   return (
    <section className="fade-in h-full w-full flex items-center justify-center">
        <div className="h-screen w-screen lg:w-auto lg:h-auto bg-indigo-700 lg:p-20 flex flex-col justify-center items-center  gap-5 lg:gap-6 lg:rounded-xl">
            <div className='flex flex-col lg:flex-row justify-evenly gap-10 items-center w-full'>
                <h1 className='text-6xl lg:text-7xl font-light text-slate-300 tracking-widest'>Eat 2 Live</h1>
                <div className="bg-indigo-900 px-4 py-1 rounded-xl flex flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-6 lg:w-10 -mb-4 lg:-mb-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-6 lg:w-10 -mb-4 lg:-mb-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-6 lg:w-10 -mb-4 lg:-mb-6 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-6 lg:w-10 -mb-4 lg:-mb-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-6 lg:w-10 -mb-4 lg:-mb-6 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-6 lg:w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <Link className="absolute right-2 top-2 flex items-center bg-indigo-900 rounded p-1 shadow-lg lg:hidden" to='/mobile-menu'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-auto max-w-full w-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </Link>
            </div>
            <span className="fade-in-slow text-lg text-slate-300 font-light">A Food and Calorie Tracker For Humans.</span>
            <span className="fade-in-slower text-lg text-slate-300 font-light">Not Models.</span>
            <h2 className="text-4xl lg:text-5xl tracking-wider text-slate-300">
                Login
            </h2>
            <form className="px-6 lg:px-0 flex flex-col gap-10 w-96 items-center">
                <div className="flex flex-col gap-6 w-full">
                    <input
                        id="email"
                        className="p-3 border-solid border-gray-400 border-2 "
                        type="text"
                        value={email}
                        onChange={handleEmail}
                        onKeyPress={enterSubmit}
                        placeholder="Email"
                    ></input>
                    <input
                        id="password"
                        className="p-3 border-solid border-gray-400 border-2"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                        onKeyPress={enterSubmit}
                        placeholder="Password"
                    ></input>
                </div>
            <p id="login-error" className="invisible w-full text-center text-red-600 font-bold tracking-wider">
                {message}
            </p>
                <button
                type="button"
                className="text-2xl tracking-wider w-1/3 bg-indigo-900 text-slate-300 rounded py-2"
                onClick={attemptLogin}
                disabled={!canLogin}
                >
                Submit
                </button>
            </form>
            <div className='flex flex-col items-center gap-10 text-slate-300 w-full'>
                <p>or</p>
                <Link className='bg-indigo-900 text-xl tracking-wider w-1/4 text-center rounded p-2' to='/signup'>Sign up</Link>
            </div>
        </div>
    </section>
   );
}