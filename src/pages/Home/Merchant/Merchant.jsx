import React from 'react';
import merchant from '../../../assets/location-merchant.png'
import merchantBG from '../../../assets/be-a-merchant-bg.png'

const Merchant = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-5 px-5 py-10 md:p-20 bg-secondary rounded-4xl bg-no-repeat' style={{ backgroundImage: `url(${merchantBG})` }}>
            <div>
                <h1 className='text-4xl text-white font-extrabold'>Merchant and Customer Satisfaction is Our First Priority</h1>
                <div className=''>
                    <p className='text-[#dadada] mt-4 mb-8'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
                        <button className='w-full md:w-fit px-8 py-4 bg-primary text-xl font-bold rounded-4xl'>Become a Merchant</button>
                        <button className='w-full md:w-fit px-8 py-4 border-2 border-primary text-primary text-xl font-bold rounded-4xl'>Earn with ZapShift Courier</button>
                    </div>
                </div>
            </div>
            <img className='' src={merchant} alt="Merchant Image" />
        </div>
    );
};

export default Merchant;