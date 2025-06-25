import React from 'react';
import { FiDollarSign } from 'react-icons/fi';
import { MdOutlineMail, MdOutlineSubtitles, MdPerson } from 'react-icons/md';
import { PiSubtitlesLight } from 'react-icons/pi';
import { SlCalender } from 'react-icons/sl';
import { Link, useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const JobDetails = () => {
    const jobData = useLoaderData()
    const{title,category,description,budget,deadline,name,email}=jobData
    const handleBid =()=>{
        toast.success("Bid placed successfully!");
    }
    // console.log(jobData);
    return (
        <div className='w-full md:w-11/12 lg:w-10/12 mx-auto'>

            

            <div className='shadow-md bg-white p-4 py-10 rounded-2xl mb-10'>
{/* one  */}
<div className='flex justify-between mb-4'>

    <div className=' text-[26px]  font-semibold flex'>
    <MdOutlineSubtitles size={32} className='self-center '/> :
        <p className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'> {title}</p>
    </div>

    

    
    <p className=' text-[14px] bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold self-center px-[12px] py-1 rounded-2xl  text-center'>{category} </p>
</div>

<h1 className='font-bold text-gray-600 mx-1'>Description : {description} </h1>

{/* two  */}
<div className=''>
    <div className='flex my-3 '><span><FiDollarSign size={18} className='text-blue-700 self-center mt-1' /></span><span className='font-bold text-gray-600 mx-1'>Budget: </span><span className='text-blue-700 font-bold bg-blue-100 px-[10px] py-0.5 mx-0.5 rounded-md' >{budget}</span></div>
    <div className='flex my-3 '><span><SlCalender size={18} className='text-red-700 self-center mt-1' /></span><span className='font-bold text-gray-600 mx-1'>Deadline: </span><span className='text-red-700 font-bold bg-red-100 px-[10px] py-0.5 mx-0.5 rounded-md' >{deadline}</span></div>


    <div className='flex my-3 '><span><MdPerson size={18} className='text-green-700 self-center mt-1' /></span><span className='font-bold text-gray-600 mx-1'>Posted by: </span><span className='text-green-700 font-bold bg-green-100 px-[10px] py-0.5 mx-0.5 rounded-md' >{name}</span></div>


    <div className='flex my-3 '><span><MdOutlineMail size={18} className='text-red-700 self-center mt-1'/></span><span className='font-bold text-gray-600 mx-1'>Email: </span><span className='text-green-700 font-bold bg-green-100 px-[10px] py-0.5 mx-0.5 rounded-md' >{email}</span></div>
    
</div>
{/* three  */}
<div className='grid justify-end '>
<button onClick={handleBid} className=' btn  bg-blue-600 hover:bg-blue-800 text-white text-center mt-5'>Place a Bid</button>
</div>
</div>
        </div>
    );
};

export default JobDetails;