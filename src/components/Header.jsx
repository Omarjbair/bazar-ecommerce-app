import React from 'react'
import {cartImg, logoDark} from '../assets/index';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {
    const productData = useSelector((state) => state.bazar.productData);
    const userInfo = useSelector((state) => state.bazar.userInfo);
    
    return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
            <Link to= "/">
                <div>
                    <img className="w-28" src={logoDark} alt='logoDark' loading="lazy"/>
                </div>
            </Link>
            <div className='flex items-center gap-8'>
                <ul className='flex-row flex justify-between items-center gap-8'>
                    <Link to = '/'><li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li></Link>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Pages</li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
                </ul>
                <Link  to= '/cart'>
                    <div className='relative cursor-pointer'>
                        <img className='w-6' src={cartImg} alt='cart' loading="lazy"/>
                        <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">{productData.length}</span>
                        {productData.length > 0?(<span className="absolute top-[0px] right-[-3px] w-3 h-3 rounded-full top bg-red-500"></span>):null}
                    </div>
                </Link>
                <Link to= "/login">
                    <img loading="lazy" className="w-8 h-8 rounded-full" src={userInfo?String(userInfo.image):"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt='userImg'/>
                </Link>
                {userInfo && (
                        <p className="text-base font-titleFont font-semibold underline underline-offset-2">
                        {userInfo.name}
                    </p>
                )}
            </div>
        </div>
    </div>
    )
}

export default Header
