import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function ReelPage () {

    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <div className="flex justify-center items-center pt-[140px] mb-[20px] sm:pt-[100px] md:pt-[100px] lg:pt-[140px]">
                <img className="w-[55%] sm:w-[90%] md:w-[90%] lg:w-[55%]" src="/Images/I will design amazing documentary and History youtube video thumbnail (7) 1.png" alt="" />
            </div>
            <section className="pl-[320px] grid grid-cols-4 gap-2 text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:pl-[20px] md:pl-[20px] lg:pl-[320px]">
                <div className="mt-[20px] sm:mt-0 md:mt-0 lg:mt-[20px]">
                    <p className="mr-[20px] sm:mt-0 md:mt-0 lg:mt-[20px]">Help</p>
                    <p>caregory: Horror</p>
                </div>
                <div className="mt-[10px] sm:mt-0 md:mt-0 lg:mt-[20px]">
                    <p className="mr-[20px]">views: 3.5M</p>
                    <p>price: 3.5470biz <span className="text-[#08DA4E]">13.40%</span></p>
                </div>
                <p className="mt-[20px] sm:mt-0 md:mt-0 lg:mt-[20px]">Trending : 1</p>
                <div>
                <a href="https://web.telegram.org/a/#-1002495391379" target="_blank" rel="noopener noreferrer"><img className="w-[20%] cursor-pointer sm:w-[15%] md:w-[16%] lg:w-[20%]" src="/Images/Telegram App.png" alt="" /></a>
                    <p>Telegram channel</p>
                </div>
            </section>
            <section className="flex justify-center items-start space-x-[20px] mt-[30px] text-white pl-[30px] sm:pl-0 md:pl-0 lg:pl-[30px]">
                <button className="bg-white px-[30px] py-[5px] rounded-md text-black" type="button">Action</button>
            </section>
            <div className='mb-[40px] grid grid-cols-3 gap-4 mt-[30px] pl-[300px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:pl-[20px] md:pl-[20px] lg:pl-[320px]'>
                <div>
                    <img className='w-[50%]' src="/Images/Dwayne Johnson 1.png" alt="" />
                    <div className='flex justify-left mt-[10px] text-white'>
                        <p className='mr-[40px]'>2.2340biz</p>
                        <p className='text-[#08DA4E]'>+4.50%</p>
                    </div>
                    <p className='mt-[10px] text-white'>3.6M Views </p>
                </div>
                <div>
                    <img className='w-[50%]' src="/Images/The Lord of the Rings_ The Fellowship of the Ring 1.png" alt="" />
                    <div className='flex justify-left mt-[10px] text-white'>
                        <p className='mr-[40px]'>4.2340biz</p>
                        <p className='text-[#08DA4E]'>+9.50%</p>
                    </div>
                    <p className='mt-[10px] text-white'>3.9M Views </p>
                </div>
                <div>
                    <img className='w-[59%]' src="/Images/8fcaa1c2-4e8f-4b7b-8bc9-4e942010bd9b 1.png" alt="" />
                    <div className='flex justify-left mt-[10px] text-white'>
                        <p className='mr-[40px]'>3.2340biz</p>
                        <p className='text-[#08DA4E]'>+7.50%</p>
                    </div>
                    <p className='mt-[10px] text-white'>3.6M Views </p>
                </div>
            </div>
            <div className='mb-[40px] grid grid-cols-3 gap-4 mt-[30px] pl-[300px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:pl-[20px] md:pl-[20px] lg:pl-[320px]'>
                <div>
                    <img className='w-[50%]' src="/Images/Bel-Air Season 2 adds Tatyana Ali 1 (1).png" alt="" />
                    <div className='flex justify-left mt-[10px] text-white'>
                        <p className='mr-[40px]'>2.2340biz</p>
                        <p className='text-[#08DA4E]'>+4.50%</p>
                    </div>
                    <p className='mt-[10px] text-white'>3.6M Views </p>
                </div>
                <div>
                    <img className='w-[50%]' src="/Images/2df54cad-9155-43d5-85c2-bb60e6a4e035 1.png" alt="" />
                    <div className='flex justify-left mt-[10px] text-white'>
                        <p className='mr-[40px]'>4.2340biz</p>
                        <p className='text-[#08DA4E]'>+9.50%</p>
                    </div>
                    <p className='mt-[10px] text-white'>3.9M Views </p>
                </div>
                <div>
                    <img className='w-[50%]' src="/Images/9874ad16-4086-467c-be5a-f78b1a49f738 1.png" alt="" />
                    <div className='flex justify-left mt-[10px] text-white'>
                        <p className='mr-[40px]'>3.2340biz</p>
                        <p className='text-[#08DA4E]'>+7.50%</p>
                    </div>
                    <p className='mt-[10px] text-white'>3.6M Views </p>
                </div>
            </div>
        </>
    )
}
export default ReelPage