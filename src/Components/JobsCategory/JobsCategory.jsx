import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Singlecategory from '../SingleCategory/Singlecategory';

const JobsCategory = () => {
    const [category , setCategory] = useState([])
    useEffect(() => {
        fetch('category.json')
        .then(res => res.json())
        .then( data => setCategory(data))
    },[])
    return (
        <div>
            <h2 className='mt-12 text-3xl font-bold text-center'>Job Category List</h2>
            <p className='mt-3 text-gray-500 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:flex justify-around items-center mt-8'>
                {
                    category.map(item => <Singlecategory item = {item}></Singlecategory>)
                }
            </div>
        </div>
    );
};

export default JobsCategory;