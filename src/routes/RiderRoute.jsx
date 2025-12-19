import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loading from '../components/Loading/Loading';
import Error from '../pages/Error/Error';

const RiderRoute = ({children}) => {
    const { loading, user } = useAuth();
    const { role, roleLoading } = useRole();

    if (loading || !user || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== 'rider') {
        return <Error></Error>
    }

    return children
};

export default RiderRoute;