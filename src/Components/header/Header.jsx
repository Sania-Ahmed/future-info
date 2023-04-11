import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon,Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div >
            <nav className='flex justify-around items-center mt-2'>
                <div>
                    <h2 className='text-2xl font-bold'>Future-info</h2>
                </div>
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    <span >{ open === true ? <XMarkIcon className="h-6 w-6 text-purple-500" /> : 
                    <Bars3Icon className="h-6 w-6 text-purple-500" />}</span>
                </div>
                <div className={`flex md:flex-row flex-col md:gap-6 gap-2 text-purple-600 font-medium  duration-500 absolute md:static ${open ? 'top-12 z-10 bg-purple-400 text-center px-28 py-1 rounded-md hover:text-white' : ' -top-44'}`}>
                <Link to="/">Home</Link>
                <Link to="/statictis">Statistics</Link>
                <Link to="/applied">Applied jobs</Link>
                <Link to="/blog">Blog</Link>
                </div>
                <div>
                    <button className='py-2 px-1 bg-purple-600 text-white font-semibold rounded-md'>Start Applying</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;