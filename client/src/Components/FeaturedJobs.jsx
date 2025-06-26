import React from 'react';
import { BsStars } from 'react-icons/bs';
import FeaturedJobCard from './FeaturedJobCard';


const FeaturedJobs = ({featuredJobs}) => {
    // console.log(featuredJobs);
    return (
        <div className='bg-gray-50'>
            <div className='flex justify-center py-10'><BsStars className='text-yellow-600 mr-1' size={30} /> <span className='font-bold text-3xl md:text-5xl bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>Featured Jobs</span></div>
          
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full md:w-11/12 mx-auto py-5'>
                {/* card   */}

                {
                    featuredJobs.map(job=><FeaturedJobCard job={job}></FeaturedJobCard>)
                }
                
                
            </div>
        
        </div>
    );
};

export default FeaturedJobs;