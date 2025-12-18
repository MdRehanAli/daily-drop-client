import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaEye, FaTrash, FaUserCheck } from 'react-icons/fa';
import { IoPersonRemoveOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';

const ApproveRiders = () => {

    const axiosSecure = useAxiosSecure();
    const { data: riders = [], refetch } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders');
            return res.data;
        }
    })

    const updateRiderStatus = (rider, status) => {
        const updateInfo = { status: status, email: rider.email };
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Rider status is set to ${status}.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleApproval = rider => {
        updateRiderStatus(rider, 'approved')
    }

    const handleRejection = rider => {
        updateRiderStatus(rider, 'rejected')
    }

    return (
        <div>
            <h1 className='text-5xl'>Riders Pending Approval {riders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>NO.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Application Status</th>
                            <th>Work Status</th>
                            <th>District</th>
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
                                    <p className={`${rider.status === 'approved' ? 'text-green-500' : rider.status === 'rejected' ? 'text-red-500' : 'text-black'}`}>{rider.status}</p>
                                </td>
                                <td>{rider.workStatus}</td>
                                <td>{rider.district}</td>
                                <td>
                                    <button className='btn mr-2'>
                                        <FaEye></FaEye>
                                    </button>
                                    <button onClick={() => handleApproval(rider)} className='btn '>
                                        <FaUserCheck />
                                    </button>
                                    <button onClick={() => handleRejection(rider)} className='btn mx-2'>
                                        <IoPersonRemoveOutline />
                                    </button>
                                    <button className='btn '>
                                        <FaTrash></FaTrash>
                                    </button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRiders;