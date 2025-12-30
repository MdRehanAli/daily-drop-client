import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../../components/Loading/Loading';

const Payment = () => {

    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();

    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`)
            return res.data;
        }
    })

    const handlePayment = async () => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }

        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
        console.log(res.data);

        window.location.href = res.data.url;
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='shadow-xl bg-gray-100 rounded-2xl p-5 py-10 md:p-10 w-11/12 mx-auto mt-8'>
            <h1 className='text-3xl md:text-5xl text-center font-extrabold text-secondary mb-8'>Please Pay ${parcel.cost} for {parcel.parcelName}</h1>
            <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
        </div>
    );
};

export default Payment;