import React from 'react';
import { BsStars } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';
import { MdPerson } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { Link, useLoaderData } from 'react-router';
import JobCard from './JobCard';
// import Jobs from './Jobs';

const Jobs = () => {
    const jobs = useLoaderData()
    // console.log(jobs);
    return (
        <div className='bg-gray-100 py-10'>
            {/* page container  */}
            <div className='flex justify-center py-10'><BsStars className='text-yellow-600 mr-1' size={30} /> <span className='font-bold text-3xl md:text-5xl'>Discover Your Next Jobs</span></div>
            {/* card section  */}
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto py-5'>
                {/* card   */}

                {
                    jobs.map(job=><JobCard job={job}></JobCard>)
                }
                
                
            </div>
        </div>
    );
};

export default Jobs;