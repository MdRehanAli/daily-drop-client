import React, { use } from 'react';

const Process = ({ processPromise }) => {

    const processes = use(processPromise);

    return (
        <div className='flex flex-col gap-6 my-[100px]'>
            {
                processes.map(process => <div key={process.id} className='flex flex-col md:flex-row items-center p-8 gap-12 bg-white rounded-3xl'>
                    <img src={process.image} alt="Image" />
                    <div className='border-dashed border-t-2 md:border-t-0 md:border-l-2 pl-12 py-7 border-[#03464D]'>
                        <p className='text-secondary text-2xl font-extrabold mb-4'>{process.title}</p>
                        <p className='text-[#606060]'>{process.description}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Process;