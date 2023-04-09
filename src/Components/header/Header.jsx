import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <nav className='md:flex justify-around items-center mt-2'>
                <div>
                    <h2 className='text-2xl font-bold'>Future-info</h2>
                </div>
                <div className='flex gap-6 text-purple-600 font-medium'>
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