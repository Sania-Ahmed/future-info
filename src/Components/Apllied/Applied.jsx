import React, { useEffect, useState } from 'react';
import { getJobCart } from '../../fakedb';
import SelectedJobs from '../SelectedJobs/SelectedJobs';

const Applied = () => {
    const [jobs,setJobs] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then (choosed => setJobs(choosed))
    },[])
    console.log(jobs)
    const selected = [] ;
    useEffect(() => {
        const storedCart = getJobCart();
        for(const id in storedCart){
         const savedProduct  = jobs.find(product => product.id == parseInt(id))
         console.log(savedProduct)
         if(savedProduct){
             selected.push(savedProduct)
         }
        }  
        console.log(selected)
        setCart(selected);
    }, [jobs])
    console.log(cart);

    return (
        <div className='mt-28'>
            {
                cart.map( jb => <SelectedJobs key={jb.id} selected ={jb}></SelectedJobs>)
            }
        </div>
    );
};

export default Applied;