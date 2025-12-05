import React from 'react';
import { RingLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="min-h-screen flex  justify-center items-center">
            <RingLoader size={70} color={'#CAEB66'} />
        </div>
    );
};

export default Loading;