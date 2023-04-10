// use local storage to manage cart data
const addToDb = (id, title) => {
    let JobCart = getJobCart();
    // add quantity
    const quantity = JobCart[id];
    if (!quantity) {
        JobCart[id] = title;
    }
    else{
        alert('already added')
    }
   
    localStorage.setItem('job-cart', JSON.stringify(JobCart));
}

const removeFromDb = id => {
    const JobCart = getJobCart();
    if (id in JobCart) {
        delete JobCart[id];
        localStorage.setItem('job-cart', JSON.stringify(JobCart));
    }
}

const getJobCart = () => {
    let JobCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-cart');
    if (storedCart) {
        JobCart = JSON.parse(storedCart);
    }
    return JobCart;
}

const deleteJobCart = () => {
    localStorage.removeItem('job-cart');
}

export {
    addToDb,
    removeFromDb,
    getJobCart,
    deleteJobCart
}
