import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {

    const { register, handleSubmit, } = useForm();

    const handleSendParcel = (data) => {
        console.log(data);
    }

    return (
        <div className='max-w-7xl mx-auto w-11/12 mt-8 p-10 md:py-20 md:px-[100px] bg-white rounded-4xl'>
            <h1 className='text-3xl md:text-5xl font-extrabold text-secondary'>Send A Parcel</h1>
            <p className='mt-12 mb-7 pb-7 border-b border-[#0000001a] text-2xl font-bold'>Enter your parcel details</p>
            <div className='my-12'>
                <form onSubmit={handleSubmit(handleSendParcel)} className='text-black'>
                    {/* Parcel Document  */}
                    <div>
                        <label className="label mr-4">
                            <input type="radio" {...register('parcelType')} value="document" className="radio" defaultChecked />
                            Document
                        </label>
                        <label className="label">
                            <input type="radio" {...register('parcelType')} value="non-document" className="radio" />
                            Non-Document
                        </label>
                    </div>

                    {/* Parcel info: Name, Weight  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
                        <fieldset className="fieldset">
                            <label className="label">Parcel Name</label>
                            <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Parcel Weight (KG) </label>
                            <input type="number" {...register('parcelWeight')} className="input w-full" placeholder="Parcel Weight (KG) " />
                        </fieldset>
                    </div>

                    {/* Two Column  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                        {/* Sender Details  */}
                        <fieldset className="fieldset">
                            <h4 className="font-bold mb-8">Sender Details</h4>
                            {/* Sender Name  */}
                            <label className="label">Sender Name</label>
                            <input type="text" {...register('senderName')} className="input w-full" placeholder="Sender Name" />

                            {/* Sender Address  */}
                            <label className="label mt-5">Sender Address</label>
                            <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />

                            {/* Sender Phone No  */}
                            <label className="label mt-5">Sender Phone No</label>
                            <input type="text" {...register('senderPhoneNo')} className="input w-full" placeholder="Sender Phone No" />

                            {/* Sender District  */}
                            <label className="label mt-5">Sender District</label>
                            <input type="text" {...register('senderDistrict')} className="input w-full" placeholder="Sender District" />

                            {/* Pickup Instruction  */}
                            <label className="label mt-5">Pickup Instruction</label>
                            <textarea rows={5} className='w-full border border-gray-300 rounded-sm' name="" {...register('pickupInstruction')} id=""></textarea>
                        </fieldset>

                        {/* Receiver Details  */}
                        <fieldset className="fieldset">
                            <h4 className="font-bold mb-8">Receiver Details</h4>
                            {/* Receiver Name  */}
                            <label className="label">Receiver Name</label>
                            <input type="text" {...register('receiverName')} className="input w-full" placeholder="Receiver Name" />

                            {/* Receiver Address  */}
                            <label className="label mt-5">Receiver Address</label>
                            <input type="text" {...register('receiverAddress')} className="input w-full" placeholder="Receiver Address" />

                            {/* Receiver Phone No  */}
                            <label className="label mt-5">Receiver Phone No</label>
                            <input type="text" {...register('receiverPhoneNo')} className="input w-full" placeholder="Receiver Phone No" />

                            {/* Receiver District  */}
                            <label className="label mt-5">Receiver District</label>
                            <input type="text" {...register('receiverDistrict')} className="input w-full" placeholder="Receiver District" />

                            {/* Pickup Instruction  */}
                            <label className="label mt-5">Pickup Instruction</label>
                            <textarea rows={5} className='w-full border border-gray-300 rounded-sm' name="" {...register('pickupInstruction')} id=""></textarea>
                        </fieldset>
                    </div>
                    <input type="submit" className='btn btn-primary text-secondary' value="Send Parcel" />
                </form>
            </div>
        </div>
    );
};

export default SendParcel;