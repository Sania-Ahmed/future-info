import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    
    useEffect(() => {
        fetch('./job/data.json')
        .then(res => res.json())
        .then(data => setJobs(data.slice(0,4)))
    },[])
    const handleSeeAll = () =>{
        fetch( './job/data.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }
    return (
        <div className='mt-16 px-5'>
            <h1 className='text-3xl font-bold text-center'>Featured Jobs</h1>
            <p className='text-gray-500 text-center mt-6'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
            <div className='md:grid grid-cols-2 gap-2 mt-16'>
            {
             jobs.map(job => <SingleJob key={job.id} job = {job}></SingleJob>)
            }
            </div>
            <div className='flex items-center justify-center'>
            <button onClick={handleSeeAll} className={`py-1 px-2 bg-purple-500 text-white font-medium mt-3 rounded-md w-28`}>See All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;