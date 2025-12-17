import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Rider = () => {

    const { register, control, handleSubmit, } = useForm();

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicate)];

    // Explore UseMemo useCallback
    const region = useWatch({ control, name: 'region' })

    const districtByRegion = region => {
        const regionDistricts = serviceCenters.filter(c => c.region === region)
        const districts = regionDistricts.map(d => d.district);

        return districts;
    }

    const handleBeARider = (data) => {
        console.log(data);

        axiosSecure.post('/riders', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Application has been submitted. Wait for confirmation",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className='max-w-7xl mx-auto w-11/12 mt-8 p-10 md:py-20 md:px-[100px] bg-white rounded-4xl'>
            <div className='border-b border-[#0000001a]'>
                <h1 className='text-3xl md:text-5xl font-extrabold text-secondary'>Be a Rider</h1>
                <p className='mt-12 md:w-1/2 text-sm pb-[50px] text-[#606060]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>

            <div className='my-[50px]'>
                <h4 className="font-bold mb-8 text-secondary">Tell us about yourself</h4>
                <form onSubmit={handleSubmit(handleBeARider)} className='text-black'>

                    {/* Two Column  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                        {/* Your Details  */}
                        <fieldset className="fieldset">
                            {/* Your Name  */}
                            <label className="label font-bold">Your Name</label>
                            <input type="text" {...register('name', { required: true })} defaultValue={user?.displayName} className="input w-full" placeholder="Your Name" />

                            {/*  Email  */}
                            <label className="label mt-5 font-bold"> Email</label>
                            <input type="email" {...register('email', { required: true })} defaultValue={user?.email} className="input w-full" placeholder=" Email" />

                            {/*  Region  */}
                            <fieldset className="fieldset">
                                <label className="label mt-5 font-bold"> Region</label>
                                <select {...register('region', { required: true })} defaultValue="Pick a Region" className="select w-full">
                                    <option disabled={true}>Pick a Region</option>
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>
                            </fieldset>

                            {/*  Districts  */}
                            <fieldset className="fieldset">
                                <label className="label mt-5 font-bold"> Districts</label>
                                <select {...register('district', { required: true })} defaultValue="Pick a Districts" className="select w-full">
                                    <option disabled={true}>Pick a Districts</option>
                                    {
                                        districtByRegion(region).map((d, i) => <option key={i} value={d}>{d}</option>)
                                    }
                                </select>
                            </fieldset>

                            {/*  Address  */}
                            <label className="label mt-5 font-bold"> Address</label>
                            <input type="text" {...register('address', { required: true })} className="input w-full" placeholder=" Address" />
                        </fieldset>

                        {/* Details  */}
                        <fieldset className="fieldset">
                            {/* Driving Licens  */}
                            <label className="label font-bold">Driving License</label>
                            <input type="text" {...register('license', { required: true })} className="input w-full" placeholder="Driving Licens" />

                            {/* NID  */}
                            <label className="label mt-5 font-bold">NID</label>
                            <input type="number" {...register('nid', { required: true })} className="input w-full" placeholder="NID" />


                            {/* Bike  */}
                            <label className="label mt-5 font-bold">Bike</label>
                            <input type="text" {...register('bike', { required: true })} className="input w-full" placeholder="Bike" />
                        </fieldset>
                    </div>
                    <input type="submit" className='btn btn-primary  text-black w-full mt-5 font-bold' value="Submit" />
                </form>
            </div>

        </div>
    );
};

export default Rider;