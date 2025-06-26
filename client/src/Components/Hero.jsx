import React from 'react';
import hired from '../assets/hire2.webp'
import jobSearch from '../assets/jobSearch2.jpg'
import payment from '../assets/payment2.avif'

const Hero = () => {
    return (
        <div className='w-full md:w-11/12 mx-auto my-10 '>
             <div className="carousel rounded-4xl">
{/* one  */}
  <div id="slide1" className="carousel-item  relative w-full h-[450px] bg-gray-500">
    <img alt=''
      src={jobSearch}
      className="w-full object-cover bg-gray-500" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">

      <div className='flex gap-3 items-center'>
      <a href="#slide3" className="btn  ">❮</a>
      <div className='text-white ml-0 lg:ml-10 mt-5'>
      <p className='text-4xl md:text-text-white font-bold'>Find Perfect Job</p>
      <p className='text-sm text-gray-300'>This is the best market place where you can find <br></br> jobs based on your skills</p>
      </div>
      </div>
      
      <a href="#slide2" className="btn  self-center">❯</a>
    </div>
  </div>
{/* two  */}
  <div id="slide2" className="carousel-item relative w-full h-[450px]">
    <img alt=''
      src={hired} 
      className="w-full object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">

    <div className='flex gap-3 items-center'>
      <a href="#slide1" className="btn  ">❮</a>
      <div className='ml-0 lg:ml-10'>
      <p className='text-4xl md:text- text-white font-bold'>Hire Freelancers</p>
      <p className='text-sm text-gray-200'>Find verified freelancers for your projects quickly.</p>
      </div>
      </div>

      <a href="#slide3" className="btn  self-center">❯</a>
    </div>
  </div>
  {/* three  */}
  <div id="slide3" className="carousel-item relative w-full h-[450px]">
    <img alt=''
      src={payment}
      className="w-full object-cover " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">

    <div className='flex gap-3 items-center '>
      <a href="#slide2" className="btn  ">❮</a>
      <div className='ml-0 lg:ml-10'>
      <p className='text-4xl  md:text-5xl font-bold '>Secure Payments</p>
      <p className='text-sm text-shadow-black'>Our system ensures safe and secure payment transactions.</p>
      </div>
      </div>
      
      <a href="#slide1" className="btn  self-center">❯</a>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default Hero;