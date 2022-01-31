import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, selectLoggedIn, signup } from "./loginSlice";

export const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectLoggedIn);

    // If user is already logged in logout
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(logout());
        }
    });

    // sign up input box handlers
    const [firstName, updateFirstName] = useState('');
    const [lastName, updateLastName] = useState(''); 
    const [age, updateAge] = useState('default');
    const [gender, updateGender] = useState('default');
    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState('');
    const [confirmPassword, updateConfirmPassword] = useState('');


    const [message, setMessage] = useState('placeholder');

    const handleFirstName = e => updateFirstName(e.target.value);
    const handleLastName = e => updateLastName(e.target.value);
    const handleAge = e => updateAge(e.target.value);
    const handleGender = e => updateGender(e.target.value);
    const handleEmail = e => updateEmail(e.target.value);
    const handlePassword = e => updatePassword(e.target.value);
    const handleUpdatePassword = (e) => updateConfirmPassword(e.target.value);

    // Age dropdown menu
    // Loop from 1 to specified int and create options for html select
    const [ageSelector] = useState(((num) => {
        const selector = [];
        for (let i=1; i<num; i++) {
            selector.push(
                <option key={`select-${i}`} value={i}>{i}</option>
            );
        }
        return selector;
    })(100));

    const canSignup = [firstName, lastName, age, gender, email, password, confirmPassword].every(Boolean);

    // validate inputs to attempt signup
    const attemptSignup = async () => {
        // If user inputs are filled
        if (canSignup) {
            const passwordInput = document.getElementById('password');
            const confirmPasswordInput = document.getElementById('confirm-password');
            const emailInput = document.getElementById('email');
            const ageInput = document.getElementById('age');
            const genderInput = document.getElementById('gender');
            const signupError = document.getElementById('signup-error');

            // Set conditions for validation and sanitation
            if (age==='default') {
                setMessage('Please select an age');
                signupError.classList.replace('invisible', 'visible');
                ageInput.classList.replace('border-gray-400', 'border-red-700');
                
            }

            else if (gender==='default') {
                setMessage('Please select a gender');
                signupError.classList.replace('invisible', 'visible');
                genderInput.classList.replace('border-gray-400', 'border-red-700');
                
            }

            else if (age < 18) {
                setMessage('Sorry, you need to be 18 to signup!');
                signupError.classList.replace('invisible', 'visible');
                ageInput.classList.replace('border-gray-400', 'border-red-700');
                
            } 
            
            else if (password!==confirmPassword) {
                setMessage('Passwords do not match.')
                signupError.classList.replace('invisible', 'visible');
                passwordInput.classList.replace('border-gray-400', 'border-red-700');
                confirmPasswordInput.classList.replace('border-gray-400', 'border-red-700');

            // Finally if all is approved dispatch signup and navigate to main
            } else {
                try {
                    await dispatch(signup({first_name: firstName, last_name: lastName, age, gender, email, password})).unwrap();
                    navigate('/', {replace: true});
                } catch (err) {
                    setMessage('A user with this email exists already!');
                    emailInput.classList.replace('border-gray-400', 'border-red-700');
                }
            }
        }
    }

    // Allow signup on enter
    const enterSubmit = (e) => {
        if (e.key==='Enter') attemptSignup();
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
                Sign up
            </h2>
            <form className="px-6 lg:px-0 flex flex-col gap-10 w-96 items-center">
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex gap-1">
                        <input
                            className="p-2 border-solid border-gray-400 border-2 w-1/2 "
                            type='text'
                            value={firstName}
                            onChange={handleFirstName}
                            onKeyPress={enterSubmit}
                            placeholder='First Name'
                        ></input>
                        <input
                            className="p-2 border-solid border-gray-400 border-2 w-1/2"
                            type='text'
                            value={lastName}
                            onChange={handleLastName}
                            onKeyPress={enterSubmit}
                            placeholder='Last Name'
                        ></input>
                    </div>
                    <div className="flex gap-1">
                        <select id='age' className="p-2 border-solid border-gray-400 border-2 text-slate-400 w-1/2" onChange={handleAge}>
                            <option value='default'>Select Age</option>
                            {ageSelector}
                        </select>
                        <select id='gender' className="p-2 border-solid border-gray-400 border-2 text-slate-400 w-1/2" onChange={handleGender}>
                            <option value='default'>Select Gender</option>
                            <option value='male'>Masculine</option>
                            <option value='female'>Feminine</option>
                            <option value='neutral'>Neutral</option>
                        </select>
                    </div>
                    <input
                        id="email"
                        className="p-2 border-solid border-gray-400 border-2 "
                        type="text"
                        value={email}
                        onChange={handleEmail}
                        onKeyPress={enterSubmit}
                        placeholder="Email"
                    ></input>
                    <input
                        id="password"
                        className="p-2 border-solid border-gray-400 border-2"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                        onKeyPress={enterSubmit}
                        placeholder="Password"
                    ></input>
                    <input
                        id="confirm-password"
                        className="p-2 border-solid border-gray-400 border-2"
                        type="password"
                        value={confirmPassword}
                        onChange={handleUpdatePassword}
                        onKeyPress={enterSubmit}
                        placeholder="Confirm Password"
                    ></input>
                </div>
                <button
                type="button"
                className="text-xl lg:text-2xl tracking-wider w-1/3 bg-indigo-900 text-slate-300 rounded py-1 lg:py-2"
                onClick={attemptSignup}
                disabled={!canSignup}
                >
                Submit
                </button>
            </form>
            <p id="signup-error" className="invisible w-full text-center text-red-600 font-bold tracking-wider">
                {message}
            </p>
        </div>
    </section>
    );
}