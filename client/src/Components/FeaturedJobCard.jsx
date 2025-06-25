import React from 'react';
import { FiDollarSign } from 'react-icons/fi';
import { MdPerson } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { Link } from 'react-router';

const FeaturedJobCard = ({job}) => {
   
    const {budget,category,deadline,name,title,_id } = job
    return (
        <div className='shadow-md bg-white p-4 py-10 rounded-2xl'>

                    {/* one  */}
                    <div className='grid grid-cols-5 mb-5'>
                        <h1 className='col-span-4 text-[23px] font-semibold'>{title}</h1>
                        <p className='col-span-1 text-[10px] bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold self-center px-[1px] py-1 rounded-2xl text-center'>{category}</p>
                    </div>

                    {/* two  */}
                    <div className=''>
                        <div className='flex my-3 '><span><FiDollarSign size={18} className='text-blue-700 self-center mt-1' /></span><span className='font-bold text-gray-600 mx-1'>Budget: </span><span className='text-blue-700 font-bold bg-blue-100 px-[10px] py-0.5 mx-0.5 rounded-md' >{budget}</span></div>
                        <div className='flex my-3 '><span><SlCalender size={18} className='text-red-700 self-center mt-1' /></span><span className='font-bold text-gray-600 mx-1'>deadline</span><span className='text-red-700 font-bold bg-red-100 px-[10px] py-0.5 mx-0.5 rounded-md' >{deadline}</span></div>
                        <div className='flex my-3 '><span><MdPerson size={18} className='text-green-700 self-center mt-1' /></span><span className='font-bold text-gray-600 mx-1'>Posted by: </span><span className='text-green-700 font-bold bg-green-100 px-[10px] py-0.5 mx-0.5 rounded-md' >{name}</span></div>

                    </div>
                    {/* three  */}
                    <Link to={`/job-details/${_id}`} className='w-full btn bg-blue-600 hover:bg-blue-800 text-white text-center mt-5'>View Details</Link>
                </div>

    );
};

export default FeaturedJobCard;