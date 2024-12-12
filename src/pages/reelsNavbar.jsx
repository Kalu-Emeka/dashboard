import { useState } from "react";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
function ReelsNavBar () {
    const navigate = useNavigate();
    const [nav, setNav] = useState(false);
    const { address, isDisconnected } = useAccount();

    const showNav = ()  => {
       setNav(!nav)
    }
    useEffect(() => {
        if (isDisconnected) {
            navigate('/home');
        }
      }, [isDisconnected, navigate]);
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-2 bg-[#1E1E1E] shadow-md">
                <nav className="flex justify-between items-center  my-[10px] mx-10 h-10 pb-13 sm:mx-5 lg:mx-10">
                    <div className="flex justify-between items-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[20%]">
                        <div className="flex justify-start self-center">
                            <a className="text-[27px] text-[#CC0808] font-bold" href="/reels">BITREEL</a>
                        </div>
                        <div className="w-0 sm:w-7 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/Images/menu.png" alt=""/> : <img className="cursor-pointer" src="/Images/close.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-center items-center text-[16px] space-x-5 text-white sm:hidden md:hidden lg:flex">
                        <button onClick={navigate}><w3m-button /></button>
                        {/* <a href="/connect" rel="noopener noreferrer"><img className="w-[25%] ml-[30px]" src="/Images/address.png" alt="" srcSet="" /></a> */}
                    </ul>
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] text-white mt-[76px] h-full bg-[#1E1E1E] shadow-md ease-in-out duration-500 sm:pt-[30px] sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="space-y-[30px] text-[19px]">
                            <li className="hover:bg-gray-800 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]" onClick={showNav}><a href="/reels">Watch</a></li>
                            <li className="hover:bg-gray-800 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]" onClick={showNav}><a href="/pool">Pools</a></li>
                            <li className="hover:bg-gray-800 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]" onClick={showNav}   ><a href="/earn">Earn</a></li>
                        </ul>
                        <div className="flex p-[10px] ml-0 w-[40%] mr-4 rounded-md text-[13px] sm:w-[90%]" onClick={showNav}>
                            <button onClick={navigate}><w3m-button /></button>
                        </div>
                    </div>
                   
                </nav>
            </div>
        </>
    )
}
export default ReelsNavBar