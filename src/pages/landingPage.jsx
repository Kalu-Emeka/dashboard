import Sidemenu from "../components/sidemenu"
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
const barChartData = [
    { name: "Mon", visitors: 3000 },
    { name: "Tue", visitors: 2000 },
    { name: "Wed", visitors: 2780 },
    { name: "Thu", visitors: 1890 },
    { name: "Fri", visitors: 2390 },
    { name: "Sat", visitors: 3490 },
    { name: "Sun", visitors: 4000 },
];
  
const lineChartData = [
    { date: "Nov 1", users: 2400 },
    { date: "Nov 5", users: 3200 },
    { date: "Nov 10", users: 2800 },
    { date: "Nov 15", users: 3600 },
    { date: "Nov 20", users: 4000 },
    { date: "Nov 25", users: 4400 },
];
function LandingPage () {
    return (
        <>
            <Sidemenu/>
            <section className="relative w-full">
                <div>
                    <div className="absolute left-[19%] top-[30px] w-[80%]">
                        <div className="flex justify-between">
                            <h2 className="mb-[5px] flex text-[15px]">Dashboard</h2>
                            <div>
                                <h2 className="border px-[10px] rounded-md">:</h2>
                            </div>
                        </div>
                        <hr className="w-full" />
                    </div>
                    <div className="absolute flex justify-between items-center left-[20%] top-[70px] w-[77%]">
                        <div>
                            <h3>Hey Kelvin</h3>
                            <p className="text-[13px] text-gray-500">Here is all your Mask analytics overview</p>
                        </div>
                        <div className="flex">
                            <button className="border text-gray-500 py-[7px] px-[25px] rounded-md text-[14px] mr-[10px] w-[60%]">Filter</button>
                            <button className="border text-white bg-blue-900 py-[7px] px-[25px] rounded-md text-[14px] w-[60%]">Export</button>
                        </div>
                    </div>
                    <div className="absolute left-[20%] top-[130px] grid grid-cols-4 gap-4 w-[78%]">
                        <div className="border-2 border border-dotted py-[10px] px-[8px] border-blue-400">
                            <div className="flex">
                                <h3 className="text-[12px] mr-[20px]">ACTIVE VISITORS</h3>
                                <p className="text-green-500 text-[12px]">6.7% Increase</p>
                            </div>
                            <h2 className="font-bold">157,367</h2>
                            <div className="flex justify-center mt-[10px] mr-[10px]">
                                <ResponsiveContainer width="130%" height={180}>
                                    <BarChart data={barChartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="visitors" fill="#4F46E5" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="border-2 border border-dotted py-[10px] px-[8px] border-blue-400">
                            <div className="flex">
                                <h3 className="text-[12px] mr-[20px]">VISITORS FOR MINUTE</h3>
                                <p className="text-red-500 text-[12px]">13.5% Decrease</p>
                            </div>
                            <h2 className="font-bold">9,741</h2>
                            <div className="flex justify-center mt-[2px] mr-[20px]">
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={lineChartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="users" stroke="#008000" strokeWidth={6} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="border-2 border border-dotted py-[10px] px-[8px] border-blue-400">
                            <div className="flex">
                                <h3 className="text-[12px] mr-[20px]">CONVERSION RATE</h3>
                                <p className="text-green-500 text-[12px]">6.7% Increase</p>
                            </div>
                            <h2 className="font-bold">9.73%</h2>
                            <div className="mt-[10px] mr-[30px]">
                                <ResponsiveContainer width="110%" height={180}>
                                    <BarChart data={barChartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="visitors" fill="#C0A000" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="border-2 border border-dotted py-[10px] px-[8px] border-blue-400">
                            <div className="flex">
                                <h3 className="text-[12px] mr-[20px]">BOUNCE RATE</h3>
                                <p className="text-green-500 text-[12px]">3.5% Increase</p>
                            </div>
                            <h2 className="font-bold">81.94%</h2>
                            <div className="mt-[5px] mr-[20px]">
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={lineChartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="users" stroke="#008000" strokeWidth={6} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-[20%] top-[420px] w-[79%]">
                        <div className="flex justify-between">
                            <div className="border-2 border border-dotted py-[10px] border-blue-400 w-[70%] mr-[20px]">
                                <div className="flex justify-between">
                                    <h2 className="mb-[5px] flex text-[15px] pl-[10px]">User Overview</h2>
                                    <button className="border px-[10px] py-[5px] text-[13px] rounded-md mb-[5px] mr-[10px]">This Month</button>
                                </div>
                                <hr className="w-full" />
                                <div className="mt-[30px] mr-[20px]">
                                    <ResponsiveContainer width="100%" height={250}>
                                        <LineChart data={lineChartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="date" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="users" stroke="#007bff" strokeWidth={6} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div  className="border-2 border border-dotted py-[10px] border-blue-400 w-[30%]">
                                <div className="flex justify-between mb-[5px] px-[5px]">
                                    <h2 className="mb-[5px] flex text-[15px]">Most Visited Page</h2>
                                    <img className="w-[10%] object-contain border bg-gray-200 px-[7px] py-[7px] rounded-[50px]" src="/Images/close.png" alt="" />
                                </div>
                                <hr className="w-full" />
                                <div className="">
                                    <div className="grid grid-cols-3 mt-[10px] gap-4 bg-gray-200 text-[12px] pl-[20px]">
                                        <h2>PAGE NAME</h2>
                                        <h2>TOTAL HERE</h2>
                                        <h2>83.6 RATE</h2>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pl-[20px] text-[12px] mt-[20px] font-bold">
                                        <h2>Package</h2>
                                        <h2>547,914</h2>
                                        <h2 className="text-green-400">81.94%</h2>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pl-[20px] text-[12px] mt-[20px] font-bold">
                                        <h2>Package</h2>
                                        <h2>547,914</h2>
                                        <h2 className="text-green-400">81.94%</h2>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pl-[20px] text-[12px] mt-[20px] font-bold">
                                        <h2>Package</h2>
                                        <h2>547,914</h2>
                                        <h2 className="text-green-400">81.94%</h2>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pl-[20px] text-[12px] mt-[20px] font-bold">
                                        <h2>Flight Booking</h2>
                                        <h2>547,914</h2>
                                        <h2 className="text-green-400">81.94%</h2>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pl-[20px] text-[12px] mt-[20px] font-bold">
                                        <h2>Hotel Listing</h2>
                                        <h2>547,914</h2>
                                        <h2 className="text-green-400">81.94%</h2>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pl-[20px] text-[12px] mt-[20px] font-bold">
                                        <h2>Package Rate</h2>
                                        <h2>547,914</h2>
                                        <h2 className="text-green-400">81.94%</h2>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pl-[20px] text-[12px] mt-[20px] font-bold">
                                        <h2>Package</h2>
                                        <h2>547,914</h2>
                                        <h2 className="text-green-400">81.94%</h2>
                                    </div>
                                </div>                          
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-[20%] top-[780px] w-[80%]">
                        <div className="flex justify-center">
                            <div className="border-2 border border-dotted py-[10px] border-blue-400 w-[50%] mr-[20px]">
                                <div className="flex justify-between">
                                    <h2 className="mb-[5px] flex text-[15px] pl-[10px]">Browser Overview</h2>
                                    <button className="border px-[10px] py-[5px] text-[13px] rounded-md mb-[5px] mr-[10px]">This Month</button>
                                </div>
                                <hr className="w-full" />
                                <div className="flex mt-[20px] ml-[20px]">
                                    <div className="flex justify-center items-center flex-col">
                                    <img className="w-[40%]" src="/Images/download.jpg" alt="" />
                                    <h3 className="text-[12px] font-bold my-[5px] text-center">Goggle Chrome</h3>
                                    <p className="text-gray-400 text-[12px] text-center">54% User</p> 
                                    </div>
                                    <div className="flex justify-center items-center flex-col">
                                    <img className="w-[35%]" src="/Images/download (1).jpg" alt="" />
                                    <h3 className="text-[12px] font-bold my-[5px] text-center">Firefox</h3>
                                    <p className="text-gray-400 text-[12px] text-center">23% User</p> 
                                    </div>
                                </div>
                                <div className="flex mt-[20px] ml-[20px]">
                                    <div className="flex justify-center items-center flex-col">
                                    <img className="w-[25%]" src="/Images/download (2).jpg" alt="" />
                                    <h3 className="text-[12px] font-bold my-[5px] text-center">Goggle Chrome</h3>
                                    <p className="text-gray-400 text-[12px] text-center">54% User</p> 
                                    </div>
                                    <div className="flex justify-center items-center flex-col">
                                    <img className="w-[25%]" src="/Images/download (3).jpg" alt="" />
                                    <h3 className="text-[12px] font-bold my-[5px] text-center">Google Chrome</h3>
                                    <p className="text-gray-400 text-[12px] text-center">23% User</p> 
                                    </div>
                                </div>
                                <div className="flex mt-[20px] ml-[20px]">
                                    <div className="flex justify-center items-center flex-col">
                                    <img className="w-[40%]" src="/Images/download.jpg" alt="" />
                                    <h3 className="text-[12px] font-bold my-[5px] text-center">Goggle Chrome</h3>
                                    <p className="text-gray-400 text-[12px] text-center">54% User</p> 
                                    </div>
                                    <div className="flex justify-center items-center flex-col">
                                    <img className="w-[40%]" src="/Images/download.jpg" alt="" />
                                    <h3 className="text-[12px] font-bold my-[5px] text-center">Google Chrome</h3>
                                    <p className="text-gray-400 text-[12px] text-center">23% User</p> 
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 border border-dotted py-[10px] border-blue-400 w-[70%] mr-[20px]">
                                <div className="flex justify-between">
                                    <h2 className="mb-[5px] flex text-[15px] pl-[10px]">User Location</h2>
                                    <button className="border px-[10px] py-[5px] text-[13px] rounded-md mb-[5px] mr-[10px]">This Month</button>
                                </div>
                                <hr className="w-full" />
                                <img className="w-[96%] mt-[10px]" src="/Images/map.png" alt="" />
                                <div className="pl-[20px] grid grid-cols-3 gap-4 place-items-center mt-[45px]">
                                    <div>
                                        <img className="w-[30%]" src="/Images/us.png" alt="" />
                                        <h3 className="text-[12px] mt-[10px]">United State (USA)</h3>
                                        <p className="text-[12px] text-gray-300">54% 567,268 Users</p>
                                    </div>
                                    <div>
                                        <img className="w-[35%]" src="/Images/images.jpg" alt="" />
                                        <h3 className="text-[12px] mt-[15px]">China</h3>
                                        <p className="text-[12px] text-gray-300">3% 808,723 Users</p>
                                    </div>
                                    <div>
                                        <img className="w-[40%]" src="/Images/images (1).jpg" alt="" />
                                        <h3 className="text-[12px]">Russia</h3>
                                        <p className="text-[12px] text-gray-300">19% 68,412 Users</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 border border-dotted py-[10px] border-blue-400 w-[50%] mr-[20px]">
                                <div className="flex justify-between">
                                    <h2 className="mb-[5px] flex text-[15px] pl-[10px]">Device Overview</h2>
                                    <button className="border px-[10px] py-[5px] text-[13px] rounded-md mb-[5px] mr-[10px]">This Month</button>
                                </div>
                                <hr className="w-full" />
                                <div className="flex pl-[20px] pt-[10px]">
                                    <img className="w-[30%] pr-[20px] object-contain" src="/Images/lp.png" alt="" />
                                    <div className="text-[13px]">
                                        <h3 className="font-bold">Computer</h3>
                                        <p className="text-gray-300">54% - 547,657 Users</p>
                                        <p className="text-green-300">1.2 Increase</p>
                                    </div>
                                </div>
                                <div className="flex pl-[20px] pt-[20px]">
                                    <img className="w-[30%] pr-[20px] object-contain" src="/Images/lp.png" alt="" />
                                    <div className="text-[13px]">
                                        <h3 className="font-bold">Laptop</h3>
                                        <p className="text-gray-300">54% - 547,657 Users</p>
                                        <p className="text-red-300">2.1 Increase</p>
                                    </div>
                                </div>
                                <div className="flex pl-[20px] pt-[20px]">
                                    <img className="w-[30%] pr-[20px] object-contain" src="/Images/lp.png" alt="" />
                                    <div className="text-[13px]">
                                        <h3 className="font-bold">Tablet</h3>
                                        <p className="text-gray-300">54% - 547,657 Users</p>
                                        <p className="text-green-300">1.2 Increase</p>
                                    </div>
                                </div>
                                <div className="flex pl-[20px] pt-[20px]">
                                    <img className="w-[30%] pr-[20px] object-contain" src="/Images/lp.png" alt="" />
                                    <div className="text-[13px]">
                                        <h3 className="font-bold">Mobile Phone</h3>
                                        <p className="text-gray-300">54% - 547,657 Users</p>
                                        <p className="text-green-300">1.2 Increase</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LandingPage