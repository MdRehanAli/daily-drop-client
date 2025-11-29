import React from 'react';
import serviceImg from '../../../assets/service.png'

const Service = ({ service }) => {

    const { title, description } = service;

    return (
        <div className='text-center bg-white hover:bg-[#CAEB66] rounded-3xl px-6 py-8'>
            <img className='mx-auto p-6 bg-linear-to-b from-[#eeedfc] to-[#eeedfc00] rounded-full' src={serviceImg} alt="Service Image" />
            <p className='text-2xl font-bold py-4'>{title}</p>
            <p>{description}</p>
        </div>
    );
};

export default Service;