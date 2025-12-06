import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const SendParcel = () => {

    const { register, control, handleSubmit, } = useForm();

    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicate)];

    // Explore UseMemo useCallback
    const senderRegion = useWatch({ control, name: 'senderRegion' })
    const receiverRegion = useWatch({ control, name: 'receiverRegion' })

    const districtByRegion = region => {
        const regionDistricts = serviceCenters.filter(c => c.region === region)
        const districts = regionDistricts.map(d => d.district);

        return districts;
    }

    console.log(regions);

    const handleSendParcel = (data) => {
        console.log(data);

        const isDocument = data.parcelType === 'document';
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        const parcelWeight = parseFloat(data.parcelWeight);

        let cost = 0;
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        }
        else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            }
            else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
                cost = minCharge + extraCharge;
            }
        }
        console.log("cost", cost);

        Swal.fire({
            title: "Agree with the Cost",
            text: `You will be Charged! ${cost} taka`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "I Agree!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className='max-w-7xl mx-auto w-11/12 mt-8 p-10 md:py-20 md:px-[100px] bg-white rounded-4xl'>
            <h1 className='text-3xl md:text-5xl font-extrabold text-secondary'>Send A Parcel</h1>
            <p className='mt-12 text-2xl font-bold'>Enter your parcel details</p>
            <div className='my-12'>
                <form onSubmit={handleSubmit(handleSendParcel)} className='text-black'>
                    {/* Parcel Document  */}
                    <div className='border-y border-[#0000001a] my-8'>
                        <div className='pt-8'>
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
                    </div>

                    {/* Two Column  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                        {/* Sender Details  */}
                        <fieldset className="fieldset">
                            <h4 className="font-bold mb-8">Sender Details</h4>
                            {/* Sender Name  */}
                            <label className="label font-bold">Sender Name</label>
                            <input type="text" {...register('senderName')} className="input w-full" placeholder="Sender Name" />

                            {/* Sender Email  */}
                            <label className="label mt-5 font-bold">Sender Email</label>
                            <input type="email" {...register('senderEmail')} className="input w-full" placeholder="Sender Email" />

                            {/* Sender Region  */}
                            <fieldset className="fieldset">
                                <label className="label mt-5 font-bold">Sender Regions</label>
                                <select {...register('senderRegion')} defaultValue="Pick a Region" className="select w-full">
                                    <option disabled={true}>Pick a Region</option>
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>
                            </fieldset>

                            {/* Sender Districts  */}
                            <fieldset className="fieldset">
                                <label className="label mt-5 font-bold">Sender Districts</label>
                                <select {...register('senderDistrict')} defaultValue="Pick a Districts" className="select w-full">
                                    <option disabled={true}>Pick a Districts</option>
                                    {
                                        districtByRegion(senderRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                                    }
                                </select>
                            </fieldset>

                            {/* Sender Address  */}
                            <label className="label mt-5 font-bold">Sender Address</label>
                            <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />

                            {/* Sender Phone No  */}
                            <label className="label mt-5 font-bold">Sender Phone No</label>
                            <input type="text" {...register('senderPhoneNo')} className="input w-full" placeholder="Sender Phone No" />

                            {/* Pickup Instruction  */}
                            <label className="label mt-5 font-bold">Pickup Instruction</label>
                            <textarea rows={5} className='w-full border border-gray-300 rounded-sm' name="" {...register('pickupInstruction')} id=""></textarea>
                        </fieldset>

                        {/* Receiver Details  */}
                        <fieldset className="fieldset">
                            <h4 className="font-bold mb-8">Receiver Details</h4>
                            {/* Receiver Name  */}
                            <label className="label font-bold">Receiver Name</label>
                            <input type="text" {...register('receiverName')} className="input w-full" placeholder="Receiver Name" />

                            {/* Receiver Email  */}
                            <label className="label mt-5 font-bold">Receiver Email</label>
                            <input type="email" {...register('receiverEmail')} className="input w-full" placeholder="Receiver Email" />


                            {/* Receiver Region  */}
                            <fieldset className="fieldset">
                                <label className="label mt-5 font-bold">Receiver Regions</label>
                                <select {...register('receiverRegion')} defaultValue="Pick a Region" className="select w-full">
                                    <option disabled={true}>Pick a Region</option>
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>
                            </fieldset>

                            {/* Receiver Districts  */}
                            <fieldset className="fieldset">
                                <label className="label mt-5 font-bold">Receiver Districts</label>
                                <select {...register('receiverDistrict')} defaultValue="Pick a Districts" className="select w-full">
                                    <option disabled={true}>Pick a Districts</option>
                                    {
                                        districtByRegion(receiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                                    }
                                </select>
                            </fieldset>

                            {/* Receiver Address  */}
                            <label className="label mt-5 font-bold">Receiver Address</label>
                            <input type="text" {...register('receiverAddress')} className="input w-full" placeholder="Receiver Address" />


                            {/* Receiver Phone No  */}
                            <label className="label mt-5 font-bold">Receiver Phone No</label>
                            <input type="text" {...register('receiverPhoneNo')} className="input w-full" placeholder="Receiver Phone No" />

                            {/* Delivery Instruction  */}
                            <label className="label mt-5 font-bold">Delivery Instruction</label>
                            <textarea rows={5} className='w-full border border-gray-300 rounded-sm' name="" {...register('deliveryInstruction')} id=""></textarea>
                        </fieldset>
                    </div>
                    <p className='my-12'>* PickUp Time 4pm-7pm Approx.</p>
                    <input type="submit" className='btn btn-primary text-secondary' value="Proceed to Confirm Booking" />
                </form>
            </div>
        </div>
    );
};

export default SendParcel;