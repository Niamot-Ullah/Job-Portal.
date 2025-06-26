import React from 'react';
import { BsStars } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';
import { MdPerson } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { budget, category, deadline, name, title, _id } = job
    return (
        <div className='shadow-xs bg-white  pt-4 rounded-md'>

            {/* one  */}
            <div className='px-4'>
                <h1 className=' text-[18px] font-bold'>{title}</h1>
                <div className='flex justify-between '>
                    <div className='flex mt-2 '><span><FiDollarSign size={15} className='text-yellow-700 self-center mt-1.5' /></span><span className='text-gray-600 font-semibold '>Budget: </span><span className='font-bold text-gray-600 ml-1' >{budget}</span></div>
                    <div className='grid items-end'><p className=' h-6 text-[10px] bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold items-center  px-2 py-1 rounded-2xl text-center'> {category}</p></div>
                </div>
            </div>

            {/* two  */}
            <div className='px-4'>

                <div className='flex my-3 '><span><SlCalender size={13} className='text-red-700 self-center mt-1.5 mr-1' /></span><span className=' text-gray-600 font-semibold'>Deadline: </span><span className='ml-1 font-bold text-gray-600' >{deadline}</span></div>


            </div>
            {/* three  */}
            <div className='grid mt-4 '>
                <Link to={`/job-details/${_id}`} className='bg-gray-200 hover:bg-gray-400 text-center py-2 font-semibold text-gray-700 rounded-b-md '>View Details</Link>
            </div>
        </div>

    );
};

export default JobCard;