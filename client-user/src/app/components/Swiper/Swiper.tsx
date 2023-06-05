// @ts-ignore
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { QRCodeScanner } from "@app/components";
import { useState } from "react";
import {Link} from "react-router-dom";

SwiperCore.use([Navigation]);

const ImageSlider = () => {
    const [showQR, setShowQR] = useState<boolean>(false);

    return (
        <section className="relative h-screen">
            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className="h-screen"
            >
                <SwiperSlide className="bg-cover bg-center relative flex items-center justify-center">
                    <div className='h-1/5 border-r-4 absolute top-0 border-black'></div>
                    <div className='w-1/12 border-b-4 absolute right-0 border-black'></div>
                    <div className="text-2xl">
                        {showQR ?
                            <QRCodeScanner />
                            :
                            <div onClick={() => setShowQR(true)}>Click here</div>
                        }

                    </div>
                    <div className='h-1/5 border-r-4 absolute bottom-0 border-black'></div>
                </SwiperSlide>
                <SwiperSlide className="bg-cover bg-center relative flex items-center justify-center">
                    <div className='h-1/5 border-r-4 absolute top-0 border-black'></div>
                    <div className='w-1/12 border-b-4 absolute left-0 border-black'></div>
                    <div className="text-2xl flex flex-col items-center">
                        <div className='mb-4'>
                            <h1 className='text-3xl'>_String</h1>
                            <p className='text-sm'>_Unlock your product story</p>
                        </div>
                        <input type="text" id="id-input" placeholder='_Enter your product ID' className="border rounded px-2 py-1" />
                        <Link to='/products/420' className='w-full'>
                            <button className='mt-4 border-gray-300 border rounded-md w-1/2'>_find</button>
                        </Link>
                    </div>
                    <div className='h-1/5 border-r-4 absolute bottom-0 border-black'></div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default ImageSlider;
