import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const Login = ({ closeModal }) => {
    const [activeBox, setActiveBox] = useState(0)
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showSignupPassword, setShowSignupPassword] = useState(false);
    const [showReSignupPassword, setShowReSignupPassword] = useState(false);

    //for login
    const initialLoginForm = {
        loginUsername: '',
        loginPassword: ''
    }

    const [loginForm, setLoginForm] = useState(initialLoginForm)
    const handleLoginInput = (e) => {
        const { name, value } = e.target;
        setLoginForm({ ...loginForm, [name]: value });
    };
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log(loginForm);
        alert("Form submitted successfully!")

        // Reset the form to its initial state
        setLoginForm(initialLoginForm);
    };

    // for signup
    const initialSignUpForm = {
        fullName: '',
        username: '',
        password: '',
        rePassword: ''
    }

    const [signUpForm, setSignUpForm] = useState(initialSignUpForm)
    const handleSignUpInput = (e) => {
        const { name, value } = e.target;
        setSignUpForm({ ...signUpForm, [name]: value });
    };
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (signUpForm.password === signUpForm.rePassword) {
            console.log(signUpForm);
            alert("Form submitted successfully!")
            setSignUpForm(initialSignUpForm);
        }
        else{
            alert('You re-enter the wrong password')
        }
    };

    const handleActiveBox = (index) => {
        setActiveBox(index)
    }
    useEffect(() => {
        handleActiveBox(activeBox);
    }, [activeBox])
    return (
        <>
            <div className={`xl:w-[25%] lg:w-8/12 w-10/12 bg-white py-4 px-10 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] flex flex-col items-center`}>
                <button onClick={closeModal} className='w-[35px] h-[35px] flex justify-center items-center bg-gray-200 rounded-full ms-auto mb-2'><i className="fa-solid fa-xmark text-xl"></i></button>
                {/* login box */}
                <div className={`${activeBox === 0 ? 'flex' : 'hidden'} w-full flex-col`}>
                    <h2 className='lg:text-2xl text-xl font-medium sm:mb-4 mb-1 text-center'>Login to maxima</h2>
                    <form onSubmit={handleLoginSubmit} className='flex w-full flex-col justify-between items-center gap-4 mb-3'>
                        <div className='w-full'>
                            <input type="text" id="loginUsername" name="loginUsername" placeholder='Email or phone number' value={loginForm.loginUsername} onChange={handleLoginInput} required className='focus:outline-none w-full p-2 border border-gray-400 rounded' />
                        </div>
                        <div className='w-full relative'>
                            <input type={`${showLoginPassword ? 'text' : 'password'}`} id="loginPassword" name="loginPassword" placeholder='Password' value={loginForm.loginPassword} onChange={handleLoginInput} required className={`focus:outline-none w-full p-2 border border-gray-400 rounded placeholder:text-base placeholder:font-normal ${!showLoginPassword ? 'text-xl font-bold py-[6px]' : ''}`} />
                            {loginForm.loginPassword.length > 0 && <span onClick={() => setShowLoginPassword(!showLoginPassword)} className='flex justify-center items-center cursor-pointer w-[20px] h-[20px] rounded-full bg-gray-200 text-xs absolute top-1/2 -translate-y-1/2 right-2'>
                                <i className={`fa-solid fa-eye${showLoginPassword ? '' : '-slash'}`}></i>
                            </span>}
                        </div>
                        <button type="submit" className='text-white bg-brandColor py-2 px-3 rounded-md'>Login</button>
                        <a href="#" className='flex text-sm text-brandColor hover:underline'>Forgot password ?</a>
                    </form>
                    <span className='text-sm flex w-full border-t border-gray-400 pt-3 justify-center gap-1 items-center text-gray-700'>Don't have an account?<button onClick={() => handleActiveBox(1)} className='inline-block text-brandColor hover:underline'>Create new</button></span>
                </div>

                {/* signup box */}
                <div className={`${activeBox === 1 ? 'flex' : 'hidden'} w-full flex-col`}>
                    <h2 className='lg:text-2xl text-xl font-medium sm:mb-4 mb-1 text-center'>Signup to maxima</h2>
                    <form onSubmit={handleSignUpSubmit} className='flex w-full flex-col justify-between items-center gap-4 mb-3'>
                        <div className='w-full'>
                            <input type="text" id="fullName" name="fullName" placeholder='Your full name' value={signUpForm.fullName} onChange={handleSignUpInput} required className='focus:outline-none w-full p-2 border border-gray-400 rounded' />
                        </div>
                        <div className='w-full'>
                            <input type="text" id="username" name="username" placeholder='Email or phone number' value={signUpForm.username} onChange={handleSignUpInput} required className='focus:outline-none w-full p-2 border border-gray-400 rounded' />
                        </div>
                        <div className='w-full relative'>
                            <input type={`${showSignupPassword ? 'text' : 'password'}`} id="password" minlength="8" name="password" placeholder='Create Password' value={signUpForm.password} onChange={handleSignUpInput} required className={`focus:outline-none w-full p-2 border border-gray-400 rounded placeholder:text-base placeholder:font-normal ${!showSignupPassword ? 'text-xl font-bold py-[6px]' : ''}`} />
                            {signUpForm.password.length > 0 && <span onClick={() => setShowSignupPassword(!showSignupPassword)} className='flex justify-center items-center cursor-pointer w-[20px] h-[20px] rounded-full bg-gray-200 text-xs absolute top-1/2 -translate-y-1/2 right-2'>
                                <i className={`fa-solid fa-eye${showSignupPassword ? '' : '-slash'}`}></i>
                            </span>}
                        </div>
                        <div className='w-full relative'>
                            <input type={`${showReSignupPassword ? 'text' : 'password'}`} id="rePassword" name="rePassword" placeholder='Re-enter Password' value={signUpForm.rePassword} onChange={handleSignUpInput} required className={`focus:outline-none w-full p-2 border border-gray-400 rounded placeholder:text-base placeholder:font-normal ${!showReSignupPassword ? 'text-xl font-bold py-[6px]' : ''}`} />
                            {signUpForm.rePassword.length > 0 && <span onClick={() => setShowReSignupPassword(!showReSignupPassword)} className='flex justify-center items-center cursor-pointer w-[20px] h-[20px] rounded-full bg-gray-200 text-xs absolute top-1/2 -translate-y-1/2 right-2'>
                                <i className={`fa-solid fa-eye${showReSignupPassword ? '' : '-slash'}`}></i>
                            </span>}
                        </div>
                        <button type="submit" className='text-white bg-brandColor py-2 px-3 rounded-md'>Sign Up</button>
                    </form>
                    <span className='text-sm flex w-full border-t border-gray-400 pt-3 justify-center gap-1 items-center text-gray-700'>Already have an account?<button onClick={() => handleActiveBox(0)} className='inline-block text-brandColor hover:underline'>Login</button></span>
                </div>
            </div>
        </>
    )
}

export default Login;
