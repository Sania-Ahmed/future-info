import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getJobCart } from '../../fakedb';
import SelectedJobs from '../SelectedJobs/SelectedJobs';

const Applied = () => {
    const [cart, setCart] = useState([])
    const jobs = useLoaderData();
    const selected = [] ;
    useEffect(() => {
        const storedCart = getJobCart();
        for(const id in storedCart){
         const savedProduct  = jobs.find(product => product.id == parseInt(id))
         if(savedProduct){
             selected.push(savedProduct)
         }
        }  
        setCart(selected);
    }, [jobs])
    console.log(cart);

    return (
        <div>
            {
                cart.map( jb => <SelectedJobs key={jb.id} selected ={jb}></SelectedJobs>)
            }
        </div>
    );
};

export default Applied;