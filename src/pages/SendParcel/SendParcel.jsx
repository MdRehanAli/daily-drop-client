import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const SendParcel = () => {

    const { register, control, handleSubmit, } = useForm();

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    const navigate = useNavigate()

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
        data.cost = cost;

        Swal.fire({
            title: "Agree with the Cost",
            text: `You will be Charged! ${cost} taka`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm and Continue Payment!"
        }).then((result) => {
            if (result.isConfirmed) {

                // Save the parcel info to the Database
                axiosSecure.post('/parcels', data)
                    .then(res => {
                        console.log("After Saving Data: ", res.data);

                        if (res.data.insertedId) {
                            navigate('/dashboard/my-parcels')
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Parcel has created. Please Pay.",
                                showConfirmButton: false,
                                timer: 2500
                            });
                        }
                    })


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
                                <input type="radio" {...register('parcelType', { required: true })} value="document" className="radio" defaultChecked />
                                Document
                            </label>
                            <label className="label">
                                <input type="radio" {...register('parcelType', { required: true })} value="non-document" className="radio" />
                                Non-Document
                            </label>
                        </div>

                        {/* Parcel info: Name, Weight  */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
                            <fieldset className="fieldset">
                                <label className="label">Parcel Name</label>
                                <input type="text" {...register('parcelName', { required: true })} className="input w-full" placeholder="Parcel Name" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <label className="label">Parcel Weight (KG) </label>
                                <input type="number" {...register('parcelWeight', { required: true })} className="input w-full" placeholder="Parcel Weight (KG) " />
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
                            <input type="text" {...register('senderName', { required: true })} defaultValue={user?.displayName} className="input w-full" placeholder="Sender Name" />

                            {/* Sender Email  */}
                            <label className="label mt-5 font-bold">Sender Email</label>
                            <input type="email" {...register('senderEmail', { required: true })} defaultValue={user?.email} className="input w-full" placeholder="Sender Email" />

                            {/* Sender Region  */}
                            <fieldset className="fieldset">
                                <label className="label mt-5 font-bold">Sender Regions</label>
                                <select {...register('senderRegion', { required: true })} defaultValue="Pick a Region" className="select w-full">
                                    <option disabled={true}>Pick a Region</option>
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>
                            </fieldset>

                            {/* Sender Districts  */}
                            <fieldset className="fieldset">
                                <label className="label mt-5 font-bold">Sender Districts</label>
                                <select {...register('senderDistrict', { required: true })} defaultValue="Pick a Districts" className="select w-full">
                                    <option disabled={true}>Pick a Districts</option>
                                    {
                                        districtByRegion(senderRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                                    }
                                </select>
                            </fieldset>

                            {/* Sender Address  */}
                            <label className="label mt-5 font-bold">Sender Address</label>
                            <input type="text" {...register('senderAddress', { required: true })} className="input w-full" placeholder="Sender Address" />

                            {/* Sender Phone No  */}
                            <label className="label mt-5 font-bold">Sender Phone No</label>
                            <input type="text" {...register('senderPhoneNo', { required: true })} className="input w-full" placeholder="Sender Phone No" />

                            {/* Pickup Instruction  */}
                            <label className="label mt-5 font-bold">Pickup Instruction</label>
                            <textarea rows={5} className='w-full border border-gray-300 rounded-sm' name="" {...register('pickupInstruction', { required: true })} id=""></textarea>
                        </fieldset>

                        {/* Receiver Details  */}
                        <fieldset className="fieldset">
                            <h4 className="font-bold mb-8">Receiver Details</h4>
                            {/* Receiver Name  */}
                            <label className="label font-bold">Receiver Name</label>
                            <input type="text" {...register('receiverName', { required: true })} className="input w-full" placeholder="Receiver Name" />

                            {/* Receiver Email  */}
                            <label className="label mt-5 font-bold">Receiver Email</label>
                            <input type="email" {...register('receiverEmail', { required: true })} className="input w-full" placeholder="Receiver Email" />


                            {/* Receiver Region  */}
                            <fieldset className="fieldset">
                                <label className="label mt-5 font-bold">Receiver Regions</label>
                                <select {...register('receiverRegion', { required: true })} defaultValue="Pick a Region" className="select w-full">
                                    <option disabled={true}>Pick a Region</option>
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>
                            </fieldset>

                            {/* Receiver Districts  */}
                            <fieldset className="fieldset">
                                <label className="label mt-5 font-bold">Receiver Districts</label>
                                <select {...register('receiverDistrict', { required: true })} defaultValue="Pick a Districts" className="select w-full">
                                    <option disabled={true}>Pick a Districts</option>
                                    {
                                        districtByRegion(receiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                                    }
                                </select>
                            </fieldset>

                            {/* Receiver Address  */}
                            <label className="label mt-5 font-bold">Receiver Address</label>
                            <input type="text" {...register('receiverAddress', { required: true })} className="input w-full" placeholder="Receiver Address" />


                            {/* Receiver Phone No  */}
                            <label className="label mt-5 font-bold">Receiver Phone No</label>
                            <input type="text" {...register('receiverPhoneNo', { required: true })} className="input w-full" placeholder="Receiver Phone No" />

                            {/* Delivery Instruction  */}
                            <label className="label mt-5 font-bold">Delivery Instruction</label>
                            <textarea rows={5} className='w-full border border-gray-300 rounded-sm' name="" {...register('deliveryInstruction', { required: true })} id=""></textarea>
                        </fieldset>
                    </div>
                    <p className='my-12'>* PickUp Time 4pm-7pm Approx.</p>
                    <input type="submit" className='btn btn-primary text-secondary md:w-fit w-full' value="Proceed to Confirm Booking" />
                </form>
            </div>
        </div>
    );
};

export default SendParcel;