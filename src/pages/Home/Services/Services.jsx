import React, { use } from 'react';
import Service from './Service';

const Services = ({ servicesPromise }) => {

    const services = use(servicesPromise);

    return (
        <div className='bg-secondary px-5 py-10 md:p-[100px] rounded-4xl my-[100px]'>
            <div className='text-center'>
                <h1 className='text-4xl text-white font-extrabold'>Our Services</h1>
                <p className='lg:w-2/3 mx-auto text-[#dadada] mt-4 mb-8'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;