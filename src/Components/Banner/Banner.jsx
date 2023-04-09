import React from 'react';
import image from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div className='md:flex justify-between items-center mt-12 bg-purple-100'>
            <div className='md:w-1/2 px-2'>
                <h2 className='text-5xl font-bold'>One step closer to your <span className='text-purple-500 font-bold'>Dream Job!</span></h2>
                <p className='text-gray-600 mt-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='py-2 px-1 bg-purple-600 text-white font-semibold rounded-md mt-5'>Get Started</button>
            </div>
            <div className='md:w-1/2'>
                <img className='w-full' src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;