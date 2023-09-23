import React from 'react';
import { githubLogo,googleLogo } from '../assets';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    GithubAuthProvider,
} from "firebase/auth";
import{ useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import { addUser, removeUser } from '../store/BazaarSlice';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.bazar.userInfo);
    const handleGoogleLogin = () =>{
        signInWithPopup(auth, googleProvider).then((res) => {
            const user = res.user;
            dispatch(addUser({
                _id: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
            }));
            setTimeout(() => {
                navigate('/');
            },1500);
        })
        .catch((error) => {
            
        });
        
    };
    
    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            toast.success("Log Out Successfully!");
        })
        .catch((error) => {
            
        });
    };
    
    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
            <div className="w-full flex items-center justify-center gap-10  h-[125px] ">
            {!userData?
                (<div onClick={handleGoogleLogin} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
                    <img className='w-8' src={googleLogo} alt='googleLogo'/>
                    <span className="text-sm text-gray-900"> Sign in with Google</span>
                </div>):
                (<button onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">Sign Out</button>)}
            </div>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"/>
        </div>
    );
};

export default Login;
