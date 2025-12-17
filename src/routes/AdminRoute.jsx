import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../components/Loading/Loading';
import useRole from '../hooks/useRole';
import Error from '../pages/Error/Error';

const AdminRoute = ({ children }) => {
    const { loading } = useAuth();
    const { role, roleLoading } = useRole();

    if (loading || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== 'admin') {
        return <Error></Error>
    }

    return children

};

export default AdminRoute;