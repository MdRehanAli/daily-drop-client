import React from 'react';
import { FaRegCreditCard, FaRegUser } from 'react-icons/fa6';
import { LiaHandsHelpingSolid } from 'react-icons/lia';
import { MdDirectionsBike } from 'react-icons/md';

const RiderDashboardHome = () => {
    return (
        <div className='shadow-xl bg-gray-100 rounded-2xl p-5 py-10 md:p-10 w-11/12 mx-auto mt-8'>
            <h1 className='text-3xl md:text-5xl text-center font-extrabold text-secondary mb-5'>Rider Dashboard</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='p-4 border border-secondary rounded-xl flex flex-col gap-2 text-secondary'>
                    <LiaHandsHelpingSolid className='text-3xl animate-[pulse_1s_linear_infinite_reverse] hover:animate-none' />
                    <h1 className='text-4xl mt-4 font-semibold'>1174</h1>
                    <p>Total amount of Orders</p>
                </div>
                <div className='p-4 border border-secondary rounded-xl flex flex-col gap-2 text-secondary'>
                    <FaRegCreditCard className='text-3xl animate-[pulse_1s_linear_infinite_reverse] hover:animate-none' />
                    <h1 className='text-4xl mt-4 font-semibold'>$ 64,265</h1>
                    <p>Total amount of Orders</p>
                </div>
                <div className='p-4 border border-secondary rounded-xl flex flex-col gap-2 text-secondary'>
                    <MdDirectionsBike className='text-3xl animate-[pulse_1s_linear_infinite_reverse] hover:animate-none' />
                    <h1 className='text-4xl mt-4 font-semibold'>25</h1>
                    <p>Total riders</p>
                </div>
                <div className='p-4 border border-secondary rounded-xl flex flex-col gap-2 text-secondary'>
                    <FaRegUser className='text-3xl animate-[pulse_1s_linear_infinite_reverse] hover:animate-none' />
                    <h1 className='text-4xl mt-4 font-semibold'>3036</h1>
                    <p>Visitors Last Month</p>
                </div>
            </div>
        </div>
    );
};

export default RiderDashboardHome;