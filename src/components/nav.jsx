import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
function NavBar () {
    const navigate = useNavigate();
    const { address, isConnecting} = useAccount();
    
    useEffect(() => {
        if (address && !isConnecting) {
          navigate('/reels');
        }
      }, [address, isConnecting, history]);
    return (
        <>
            <div className="fixed w-full z-[1000] bg-[#1E1E1E] p-[5px] py-2 shadow-md">
                <nav className="flex justify-between items-center my-[10px] mx-10 h-10 pb-13 sm:mx-2 lg:mx-10">
                    <div className="flex justify-between items-center w-[100%] sm:w-full md:w-full lg:w-[20%]">
                        <div className="flex justify-start self-center">
                            <a className="text-[27px] text-[#CC0808] font-bold sm:text-[20px] md:text-[22px] lg:text-[27px]" href="/">BITREEL</a>
                        </div>
                    </div>
                    <ul className="uls flex justify-center items-center space-x-5 text-white">
                        {/* <button className="bg-[#CC0808] hover:bg-[#CC0740] px-[7px] py-[10px] text-[15px] rounded-xl" type="button">Connect wallet</button> */}
                        <button onClick={navigate}><w3m-button /></button>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default NavBar