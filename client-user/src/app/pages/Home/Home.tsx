import {Link} from "react-router-dom";
import {Swiper} from "@app/components";

const Home = () => {

    return (
        <div
            className='custom-scrollbar overflow-y-scroll w-full bg-white text-2xl text-center pt-10 overflow-auto'
            style={{
                scrollSnapType: 'y mandatory',  // force snap for every section in y-axis
                height: '100vh',  // restrict the height to viewport height
                overflowY: 'scroll'  // enable vertical scrolling
            }}
        >
            <div className='relative h-screen flex flex-col justify-between items-center' style={{ scrollSnapAlign: 'start' }}>
                <span></span>
                <div>
                    <p className='text-9xl mx-24'>S</p>
                    <p className='text-2xl'>Made on ETH</p>
                </div>
                <div className='h-1/5 border-r-4 border-black'></div>
            </div>
            <div className='relative h-screen ' style={{scrollSnapAlign: 'start'}}>
                <Swiper />
            </div>
            <div className='relative h-screen flex flex-col justify-between items-center' style={{scrollSnapAlign: 'start'}}>
                <div className='h-1/5 border-r-4 border-black'></div>
                <div className='flex flex-col'>

                    <button className='text-5xl mb-16' onClick={() => {}}>_Connect wallet</button>
                    <Link to='/help'>
                        <button className='text-lg'>_What is wallet?</button>
                    </Link>
                </div>
                <span></span>
            </div>
        </div>
    )
}

export default Home;