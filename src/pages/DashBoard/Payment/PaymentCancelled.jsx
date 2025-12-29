import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div className='shadow-xl bg-gray-100 rounded-2xl p-5 py-10 md:p-10 w-11/12 mx-auto mt-8'>
            <h1 className='text-3xl md:text-5xl text-center font-extrabold text-secondary mb-8'>Payment is Cancelled. Please try again.</h1>
            <Link to='/dashboard/my-parcels' className='btn btn-primary text-black'>Try Again</Link>
        </div>
    );
};

export default PaymentCancelled;