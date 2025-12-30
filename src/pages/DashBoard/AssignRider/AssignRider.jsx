import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AssignRider = () => {
    const [selectedParcel, setSelectedParcel] = useState(null);

    const axiosSecure = useAxiosSecure();
    const riderModalRef = useRef();

    const { refetch: parcelsRefetch, data: parcels = [] } = useQuery({
        queryKey: ['parcels', 'pending-pickup'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?deliveryStatus=pending-pickup`);
            return res.data;
        }
    })

    // Todo Invalidate Query after assigning a rider
    const { data: riders = [] } = useQuery({
        queryKey: ['riders', selectedParcel?.senderDistrict, 'available'],
        enabled: !!selectedParcel,
        queryFn: async () => {
            const res = await axiosSecure.get(`/riders?status=approved&district=${selectedParcel?.senderDistrict}&workStatus=available`);
            return res.data;
        }
    })

    const openAssignRiderModal = (parcel) => {
        setSelectedParcel(parcel);
        // console.log(parcel.senderDistrict);
        riderModalRef.current.showModal()
    }

    const handleAssignRider = rider => {
        const riderAssignInfo = {
            riderId: rider._id,
            riderEmail: rider.email,
            riderName: rider.name,
            parcelId: selectedParcel._id,
            trackingId: selectedParcel.trackingId
        }
        axiosSecure.patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    riderModalRef.current.close();
                    parcelsRefetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Rider has been Assigned.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className='shadow-xl bg-gray-100 rounded-2xl p-5 py-10 md:p-10 w-11/12 mx-auto mt-8'>
            <h1 className='text-3xl md:text-5xl text-center font-extrabold text-secondary mb-5'>Assign Riders: {parcels.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>NO.</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Time</th>
                            <th>Tracking Id</th>
                            <th>Delivery Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>

                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.cost}</td>
                                <td>{parcel.createdAt}</td>
                                <td>{parcel.trackingId}</td>
                                <td>{parcel.deliveryStatus}</td>
                                <td>
                                    <button onClick={() => openAssignRiderModal(parcel)} className='btn btn-primary text-black'>Find Riders</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>


            <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Riders: {riders.length}</h3>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead className='text-center'>
                                <tr>
                                    <th>NO.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>

                                {
                                    riders.map((rider, index) => <tr key={rider._id}>
                                        <th>{index + 1}</th>
                                        <td>{rider.name}</td>
                                        <td>{rider.email}</td>
                                        <td>
                                            <button onClick={() => handleAssignRider(rider)} className='btn btn-primary text-black'>Assign</button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AssignRider;