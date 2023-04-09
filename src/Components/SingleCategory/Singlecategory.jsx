import React from 'react';

const Singlecategory = ({item}) => {
    return (
        <div className='bg-purple-100 px-3 py-3 rounded-md mt-2'>
            <img className='w-12 h-12'  src={item.logo} alt="" />
            <p className='text-2xl font-bold py-2'>{item.categoryName}</p>
            <p className='text-gray-500 font-bold'>{item.numJobs} + jobs available </p>
        </div>
    );
};

export default Singlecategory;