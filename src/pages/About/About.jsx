import React from 'react';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12 mt-8 p-10 md:py-20 md:px-[100px] bg-white rounded-4xl'>
            <div className='mb-12 pb-12 border-b border-[#0000001a]'>
                <h1 className='text-5xl font-extrabold text-secondary'>About Us</h1>
                <p className='md:w-4/7 mt-4'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div>
                <div className='flex gap-12'>
                    <button className='btn'>Story</button>
                    <button className='btn'>Mission</button>
                    <button className='btn'>Success</button>
                    <button className='btn'>Team & Others</button>
                </div>
                <div className='flex flex-col gap-5 mt-12'>
                    <p className='text-justify text-[#606060]'>We started with a simple promise to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination on time, every time.</p>
                    <p className='text-justify text-[#606060]'>We started with a simple promise to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination on time, every time.</p>
                    <p className='text-justify text-[#606060]'>We started with a simple promise to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default About;