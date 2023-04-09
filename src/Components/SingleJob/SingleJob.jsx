import React from 'react';

const SingleJob = ({job}) => {
    const {logo, jobTitle , companyName , location , fullOrPartTime, remoteOrOnsite, salary , } = job;
    return (
        <div className='border border-slate-200 rounded-md py-3 px-3'>
            <img className='w-20 h-20' src={logo} alt="" />
            <p className='text-2xl font-bold mt-6'>{jobTitle}</p>
            <p className='text-gray-500 mt-3'>{companyName}</p>
            <div className='flex gap-3 items-center mt-5'>
                <h3 className='border border-purple-400 text-purple-500 px-2 py-1 font-semibold rounded'>{fullOrPartTime}</h3>
                <h3 className='border border-purple-400 text-purple-500 px-2 py-1 font-semibold rounded'>{remoteOrOnsite}</h3>
            </div>
            <div className='flex items-center gap-3 text-gray-500 mt-5'>
            <p className='flex items-center gap-2'><img className='w-4 h-5' src="https://img.freepik.com/free-icon/pin-geolocalization_318-9542.jpg?size=626&ext=jpg&ga=GA1.1.632902743.1676570136&semt=ais" alt="" />
            {location}</p>
            <p className='flex items-center gap-2'> <img className='w-4 h-4'src="https://img.freepik.com/free-icon/coin_318-130572.jpg?size=626&ext=jpg&ga=GA1.2.632902743.1676570136&semt=ais" alt="" /> Salary: {salary}</p>
            </div>
            
            <button className='py-1 px-2 bg-purple-500 text-white font-medium mt-3 rounded-md'>View Details</button>
        </div>
    );
};

export default SingleJob;