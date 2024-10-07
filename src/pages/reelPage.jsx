import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function ReelPage () {

    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <div className="flex justify-center items-center pt-[140px]">
                <img className="w-[55%]" src="/Images/I will design amazing documentary and History youtube video thumbnail (7) 1.png" alt="" />
            </div>
            <section className="pl-[320px] grid grid-cols-4 gap-2 text-white">
                <div className="mt-[20px]">
                    <p className="mr-[20px]">Help</p>
                    <p>caregory: Horror</p>
                </div>
                <div className="mt-[10px]">
                    <p className="mr-[20px]">views: 3.5M</p>
                    <p>price: 3.5470biz <span className="text-[#08DA4E]">13.40%</span></p>
                </div>
                <p className="mt-[20px]">Trending : 1</p>
                <div>
                    <img className="w-[20%] cursor-pointer" src="/Images/Telegram App.png" alt="" />
                    <p>Telegram channel</p>
                </div>
            </section>
            <section className="flex justify-center items-center space-x-[20px] mt-[30px] text-white pl-[30px]">
                <p className="bg-[#CC0808] px-[30px] py-[5px] rounded-md" type="button">All</p>
                <button className="bg-white px-[30px] py-[5px] rounded-md text-black" type="button">Action</button>
                <button className="bg-white px-[30px] py-[5px] rounded-md text-black" type="button">Trailers</button>
                <button className="bg-white px-[30px] py-[5px] rounded-md text-black" type="button">Comedy</button>
                <button className="bg-white px-[30px] py-[5px] rounded-md text-black" type="button">Drama</button>
                <button className="bg-white px-[30px] py-[5px] rounded-md text-black" type="button">Fashion</button>
            </section>
            <div className='mb-[40px] grid grid-cols-3 gap-4 mt-[30px] pl-[300px]'>
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
            <div className='mb-[40px] grid grid-cols-3 gap-4 mt-[30px] pl-[300px]'>
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