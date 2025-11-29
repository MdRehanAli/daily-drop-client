import React, { use } from 'react';
import Work from './Work';

const Works = ({ worksPromise }) => {

    const works = use(worksPromise);

    return (
        <div>
            <h1 className='text-3xl font-extrabold mb-8 text-center'>How it Works</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    works.map(work => <Work work={work} key={work.id}></Work>)
                }
            </div>
        </div>
    );
};

export default Works;