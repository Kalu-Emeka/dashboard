function Sidemenu () {
    return (
        <>
            <div className="fixed pt-[20px] bg-white w-[17%] h-[100vh] sm:hidden md:hidden lg:block shadow-lg" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <aside className="text-black">
                    <ul className="text-[19px]">
                        <h2 className="text-center text-blue-800 text-[25px] font-bold">Khuefe</h2>
                        <hr />
                        <h2 className="text-gray-500 text-[14px] ml-[20px] mt-[10px]">Main Menu</h2>
                        <div className="flex ml-[20px] my-[12px]">
                            <img className="w-[7%] object-contain" src="/Images/home-icon.webp" alt="" />
                            <li className="text-[14px] ml-[10px] cursor-pointer">Dashboard</li>
                        </div>
                        <div className="flex ml-[20px] my-[12px]">
                            <img className="w-[7%] object-contain" src="/Images/home-icon.webp" alt="" />
                            <li className="text-[14px] ml-[10px] cursor-pointer mr-[10px]">User Management</li>
                            <img className="w-[6%] object-contain cursor-pointer" src="/Images/vectorbl.webp" alt="" />
                        </div>
                        <div className="flex ml-[20px] my-[12px]">
                            <img className="w-[7%] object-contain" src="/Images/home-icon.webp" alt="" />
                            <li className="text-[14px] ml-[10px] cursor-pointer">Campaign</li>
                        </div>
                        <div className="flex ml-[20px] my-[12px]">
                            <img className="w-[7%] object-contain" src="/Images/home-icon.webp" alt="" />
                            <li className="text-[14px] ml-[10px] cursor-pointer">Referral</li>
                        </div>
                        <h2 className="text-gray-500 text-[14px] ml-[20px] mt-[10px]">Store Management</h2>
                        <div className="flex ml-[20px] my-[12px]">
                            <img className="w-[7%] object-contain" src="/Images/home-icon.webp" alt="" />
                            <li className="text-[14px] ml-[10px] cursor-pointer">Products</li>
                        </div>
                        <div className="flex ml-[20px] my-[12px]">
                            <img className="w-[7%] object-contain" src="/Images/home-icon.webp" alt="" />
                            <li className="text-[14px] ml-[10px] cursor-pointer">Stores</li>
                        </div>
                        <h2 className="text-gray-500 text-[14px] ml-[20px] mt-[10px]">Point Management</h2>
                        <div className="flex ml-[20px] my-[12px]">
                            <img className="w-[7%] object-contain" src="/Images/home-icon.webp" alt="" />
                            <li className="text-[14px] ml-[10px] cursor-pointer mr-[20px]">Reward</li>
                            <img className="w-[6%] object-contain cursor-pointer" src="/Images/vectorbl.webp" alt="" />
                        </div>
                    </ul>
                    <ul className="mt-[90px]">
                        <div className="flex ml-[20px] my-[12px]">
                            <img className="w-[7%] object-contain" src="/Images/home-icon.webp" alt="" />
                            <li className="text-[14px] ml-[10px] cursor-pointer">Manage Team</li>
                        </div>
                        <div className="flex ml-[20px] my-[12px]">
                            <img className="w-[7%] object-contain" src="/Images/home-icon.webp" alt="" />
                            <li className="text-[14px] ml-[10px] cursor-pointer mr-[10px]">Audit Log</li>
                        </div>
                        <div className="flex ml-[20px] my-[12px]">
                            <img className="w-[7%] object-contain" src="/Images/home-icon.webp" alt="" />
                            <li className="text-[14px] ml-[10px] cursor-pointer">Help & First Step</li>
                        </div> 
                    </ul>
                    <hr />
                    <div className="flex ml-[10px] mt-[10px]">
                        <img className="w-[17%] object-contain mr-[5px]" src="/Images/Ellipse 1.png" alt="" />
                        <div className="">
                            <h2 className="text-[14px]">Alexandra Andre</h2>
                            <p className="text-[12px] text-gray-500">alexandra@gmail.com</p>
                        </div>
                        <img className="w-[5%] object-contain ml-[30px]" src="/Images/arrow-left.webp" alt="" />
                    </div>
                </aside>
            </div>
    
        </>
    )
}
export default Sidemenu