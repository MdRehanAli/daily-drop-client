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
        <div>
            <h2 className='text-5xl'>Payment successful</h2>
            <p>Your Transaction Id is: {paymentInfo.transactionId}</p>
            <p>Your Tracking Id is: {paymentInfo.trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;