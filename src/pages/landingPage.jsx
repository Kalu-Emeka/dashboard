import Navbar from '../components/nav.jsx';

function LandingPage () {
    return (
        <>
            <Navbar/>
            <div className="header flex justify-center pt-[170px] pb-[150px] items-center text-white bg-[#1E1E1E] sm:pr-[30px] sm:pl-[30px] lg:pr-[100px] lg:pl-[80px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className="text-center sm:w-[95%] sm:text-center md:text-center lg:text-center">
                    <h2 className="mb-4 text-[35px] text-white z-1000 font-bold sm:text-[17px] md:text-[35px]">Unlock the Value of Cinema with BitReel</h2>
                    <p className='text-white font-bold text-[20px] mb-[80px] sm:text-[16px] tracking-widest sm:w-[100%]  lg:text-[20px]'>Engage, Watch, Profit: The Blockchain Box Office</p>
                    <p className='text-[18px]'>Free streaming of movies, Engage, earn and trade </p>
                </div>
            </div>
            <section className='text-white mt-[20px] ml-[30px]'>
                <h2 className='text-[18px] font-bold mb-[20px]'>TRENDING NOW</h2>
                <div className='flex justify-left items-center border w-[8%] px-[10px] py-[4px] mb-[50px]'>
                    <p>Action</p>
                    <img className='ml-[10px] w-[30%]' src="/Images/logo.png" alt="" />
                </div>
                <div className='mb-[40px] grid grid-cols-3 gap-4'>
                    <div>
                        <img className='w-[50%]' src="/Images/Dwayne Johnson 1.png" alt="" />
                        <div className='flex justify-left mt-[10px]'>
                            <p className='mr-[40px]'>2.2340biz</p>
                            <p className='text-[#08DA4E]'>+4.50%</p>
                        </div>
                        <p className='mt-[10px]'>3.6M Views </p>
                    </div>
                    <div>
                        <img className='w-[50%]' src="/Images/The Lord of the Rings_ The Fellowship of the Ring 1.png" alt="" />
                        <div className='flex justify-left mt-[10px]'>
                            <p className='mr-[40px]'>4.2340biz</p>
                            <p className='text-[#08DA4E]'>+9.50%</p>
                        </div>
                        <p className='mt-[10px]'>3.9M Views </p>
                    </div>
                    <div>
                        <img className='w-[59%]' src="/Images/8fcaa1c2-4e8f-4b7b-8bc9-4e942010bd9b 1.png" alt="" />
                        <div className='flex justify-left mt-[10px]'>
                            <p className='mr-[40px]'>3.2340biz</p>
                            <p className='text-[#08DA4E]'>+7.50%</p>
                        </div>
                        <p className='mt-[10px]'>3.6M Views </p>
                    </div>
                </div>
                <div className='mb-[40px] grid grid-cols-3 gap-4'>
                    <div>
                        <img className='w-[50%]' src="/Images/Bel-Air Season 2 adds Tatyana Ali 1 (1).png" alt="" />
                        <div className='flex justify-left mt-[10px]'>
                            <p className='mr-[40px]'>1.2240biz</p>
                            <p className='text-[#08DA4E]'>+2.50%</p>
                        </div>
                        <p className='mt-[10px]'>2.6M Views </p>
                    </div>
                    <div>
                        <img className='w-[50%]' src="/Images/2df54cad-9155-43d5-85c2-bb60e6a4e035 1.png" alt="" />
                        <div className='flex justify-left mt-[10px]'>
                            <p className='mr-[40px]'>2.2340biz</p>
                            <p className='text-[#08DA4E]'>+3.50%</p>
                        </div>
                        <p className='mt-[10px]'>2.3M Views </p>
                    </div>
                    <div>
                        <img className='w-[50%]' src="/Images/9874ad16-4086-467c-be5a-f78b1a49f738 1.png" alt="" />
                        <div className='flex justify-left mt-[10px]'>
                            <p className='mr-[40px]'>1.1340biz</p>
                            <p className='text-[#08DA4E]'>+2.50%</p>
                        </div>
                        <p className='mt-[10px]'>2.1M Views </p>
                    </div>
                </div>
            </section>
            <section className='text-white pl-[30px] pb-[40px]'>
                <h2 className='text-[25px] font-bold mt-[30px] mb-[30px]'>Video AMM Trading Platform</h2>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='bg-[#580404] w-[80%]'>
                        <p className='px-[20px] py-[20px] w-[86%]'>Whether you download video movie and watch online, or watch movie online you are still going to be reward as a users for Engaging </p>
                    </div>
                    <div className='bg-[#580404] w-[80%]'>
                        <p className='px-[20px] py-[20px] w-[85%]'>FIlmmakers, creator, upload your movies for streaming, trading, and earning. Allowing users to trade and stake tokens on your content for earning </p>
                    </div>
                    <div className='bg-[#580404] w-[80%]'>
                        <p className='px-[20px] py-[20px] w-[80%]'>BitReel is not just a platform for streaming but a platform, it is a blockchain box office video platform</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LandingPage