import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({})
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecure();

    console.log(sessionId);

    useEffect(() => {
        if (sessionId) {
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log(res.data);
                    setPaymentInfo({
                        trackingId: res.data.trackingId,
                        transactionId: res.data.trackingId
                    })
                })
        }
    }, [axiosSecure, sessionId])

    return (
        <div className='shadow-xl bg-gray-100 rounded-2xl p-5 py-10 md:p-10 w-11/12 mx-auto mt-8'>
            <h1 className='text-3xl md:text-5xl text-center font-extrabold text-secondary mb-8'>Payment successful</h1>
            <p className='text-center text-xl'>Your Transaction Id is: {paymentInfo.transactionId}</p>
            <p className='text-center text-xl'>Your Tracking Id is: {paymentInfo.trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;