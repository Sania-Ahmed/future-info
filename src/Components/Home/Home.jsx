import React from 'react';
import Banner from '../Banner/Banner';
import JobsCategory from '../JobsCategory/JobsCategory';
import FeaturedJobs from '../featuredJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobsCategory></JobsCategory>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;