import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const UsersManagement = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users',],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = (user) => {
        const roleInfo = { role: 'admin' }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.displayName} marked as an Admin.`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });
            }
        })
    }


    const handleRemoveAdmin = (user) => {
        const roleInfo = { role: 'user' }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.displayName} removed from admin.`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });
            }
        })
    }

    return (
        <div>
            <h1>Manage users {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Action</th>
                            <th>Others Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>

                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td className='w-fit'>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded-2xl h-12 w-12">
                                                <img
                                                    src={user.photoURL}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.displayName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    {user.role === 'admin' ?
                                        <button onClick={() => handleRemoveAdmin(user)} className='btn'>
                                            <FiShieldOff></FiShieldOff>
                                        </button>
                                        :
                                        <button onClick={() => handleMakeAdmin(user)} className='btn'>
                                            <FaUserShield></FaUserShield>
                                        </button>
                                    }
                                </td>
                                <td>Actions</td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManagement;