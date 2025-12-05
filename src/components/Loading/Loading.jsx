import React from 'react';
import { RingLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="min-h-screen flex  justify-center items-center">
            <RingLoader color={'red'} />
        </div>
    );
};

export default Loading;