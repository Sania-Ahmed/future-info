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
    const handleOnSiteOrRemote = () => {
       const onsites = cart.filter(os => os.remoteOrOnsite === "Onsite") ;
       if(onsites){
           setCart(onsites);
       }
       else{
        alert('no onsite job added')
       }
    }
    const handleOnSiteOrRemote2 = () => {
       const Remotes = cart.filter(os => os.remoteOrOnsite === "Remote") ;
       if(Remotes){
           setCart(Remotes);
       }
       else{
        alert('no remote jobs added')
       }
    }

    return (
        <div>
            <div className='flex justify-end mt-8 gap-5'>
         <button className='py-2 px-4 text-purple-500 border border-purple-600 rounded-md font-medium' onClick={() => handleOnSiteOrRemote()}>Onsite</button>
         <button className='py-2 px-4 text-purple-500 border border-purple-600 rounded-md font-medium' onClick={handleOnSiteOrRemote2}>Remote</button>
            </div>
        <div className='mt-28'>
            {
                cart.map( jb => <SelectedJobs key={jb.id} selected ={jb}></SelectedJobs>)
            }
        </div>
        </div>
    );
};

export default Applied;