import React from 'react';
import { Link } from 'react-router-dom';

const SelectedJobs = ({ selected }) => {
    console.log(selected)
    const { companyName, jobTitle, logo, location, salary, remoteOrOnsite, fullOrPartTime, id

    } = selected;
    return (
        <div className='flex border items-center justify-around border-gray-400 px-6 py-5 w-3/4 mx-auto my-3 rounded-md'>
            <div>
                <img src={logo} className='w-20 h-20 rounded-md' alt="" />
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-lg font-bold'> {jobTitle}</p>
                 <p className='text-gray-500'>{companyName}</p>
                <div className='flex gap-3 items-center mt-5'>
                    <h3 className='border border-purple-400 text-purple-500 px-2 py-1 font-semibold rounded'>{fullOrPartTime}</h3>
                    <h3 className='border border-purple-400 text-purple-500 px-2 py-1 font-semibold rounded'>{remoteOrOnsite}</h3>
                </div>
                    <p className='flex items-center gap-2 mt-4'><img className='w-4 h-5' src="https://img.freepik.com/free-icon/pin-geolocalization_318-9542.jpg?size=626&ext=jpg&ga=GA1.1.632902743.1676570136&semt=ais" alt="" />
                        {location}</p>
                    <p className='flex items-center gap-2 mt-4'> <img className='w-4 h-4' src="https://img.freepik.com/free-icon/coin_318-130572.jpg?size=626&ext=jpg&ga=GA1.2.632902743.1676570136&semt=ais" alt="" /> Salary: {salary}</p>
            </div>
            <Link to={`/job/${id}`}><button className='py-1 px-2 bg-purple-500 text-white font-medium mt-3 rounded-md'>View Details</button> </Link>
        </div>
    );
};

export default SelectedJobs;