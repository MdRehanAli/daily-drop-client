import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const FAQ = () => {
    return (
        <div className='mb-[100px]'>
            <h3 className='text-3xl font-extrabold text-secondary text-center mt-8 mb-6'>Frequently Asked Question (FAQ)</h3>
            <p className='text-[#606060] lg:w-2/3 mx-auto'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>

            {/* Accordion  */}
            <div className='md:w-4/5 mx-auto mt-10 flex flex-col gap-4'>
                <div className="collapse collapse-arrow bg-white rounded-xl">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title">
                        <h1 className=' text-secondary p-2 font-bold'>How does this posture corrector work?</h1>
                    </div>
                    <div className="collapse-content text-[#606060]  ">
                        <p className='m-2 pt-4 border-t-2 border-[#c3dfe2] text-justify'>A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white rounded-xl">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title">
                        <h1 className=' text-secondary p-2 font-bold'>Is it suitable for all ages and body types?</h1>
                    </div>
                    <div className="collapse-content text-[#606060]  ">
                        <p className='m-2 pt-4 border-t-2 border-[#c3dfe2] text-justify'>Yes, the posture corrector is designed with adjustable straps and flexible materials to comfortably fit most body types and ages.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white rounded-xl">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title">
                        <h1 className=' text-secondary p-2 font-bold'>Does it really help with back pain and posture improvement?</h1>
                    </div>
                    <div className="collapse-content text-[#606060]  ">
                        <p className='m-2 pt-4 border-t-2 border-[#c3dfe2] text-justify'>When worn regularly, it gently aligns your spine and shoulders, reducing strain and supporting better posture over time.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white rounded-xl">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title">
                        <h1 className=' text-secondary p-2 font-bold'>Does it have smart features like vibration alerts?</h1>
                    </div>
                    <div className="collapse-content text-[#606060]  ">
                        <p className='m-2 pt-4 border-t-2 border-[#c3dfe2] text-justify'>Some models include vibration reminders that alert you when you slouch, helping you maintain correct posture throughout the day.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white rounded-xl">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title">
                        <h1 className=' text-secondary p-2 font-bold'>How will I be notified when the product is back in stock?</h1>
                    </div>
                    <div className="collapse-content text-[#606060]  ">
                        <p className='m-2 pt-4 border-t-2 border-[#c3dfe2] text-justify'>You will receive an email notification or app alert once the item is available, so you can purchase it without missing out.</p>
                    </div>
                </div>

            </div>
            <div className='flex justify-center items-center mt-10'>
                <button className='px-8 py-4 bg-primary text-xl font-bold rounded-2xl'>See More FAQ’s</button>
                <button className='p-4 rounded-full bg-[#1F1F1F] text-primary font-bold text-2xl'><MdArrowOutward /></button>
            </div>
        </div>
    );
};

export default FAQ;