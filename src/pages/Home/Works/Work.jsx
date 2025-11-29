import React from 'react';
import van from '../../../assets/delivery-van.png'

const Work = ({ work }) => {

    const { work_name, description } = work;

    return (
        <div className='bg-[#FFFFFFB3] rounded-3xl p-8'>
            <img src={van} alt="Delivery Van" />
            <p className='mt-6 mb-4 text-xl font-bold'>{work_name}</p>
            <p>{description}</p>
        </div>
    );
};

export default Work;