import React from 'react';
import Hero from '../Components/Hero';
import HowWorks from '../Components/HowWorks';

import FeaturedJobs from './../Components/FeaturedJobs';
import { useLoaderData } from 'react-router';
import HeroSection from '../Components/HeroSection';

const Home = () => {
    const featuredJobs = useLoaderData()
    // console.log(featuredJobs);
    return (
        <div>
            <Hero></Hero>
            <HeroSection></HeroSection>
            <FeaturedJobs featuredJobs={featuredJobs}></FeaturedJobs>
            <HowWorks></HowWorks>
        </div>
    );
};

export default Home;