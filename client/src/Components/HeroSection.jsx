import { Link } from 'react-router'; // 
import { FaCheckCircle } from 'react-icons/fa';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';




const HeroSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between mx-auto mt-12">
      
      
        {/* <FreelanceLottie /> */}
        <DotLottieReact
      src="https://lottie.host/62353857-a2fe-4f2e-8f89-5422080d1389/x4NgrkQkzX.lottie"
      loop
      autoplay
    />
     

      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-12">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-snug mb-6">
          Welcome to <span className="text-indigo-600">JOB Portal</span>
        </h1>

        <ul className="space-y-5 text-gray-700 text-lg">
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 mt-1" />
            <span><strong>No cost to join</strong><br />Register, explore, or post jobs freely.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 mt-1" />
            <span><strong>Post a job and hire freelancers</strong><br />Quickly connect with top talent.</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 mt-1" />
            <span><strong>Affordable & effective</strong><br />Get work done without breaking the bank.</span>
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/register">
            <button className="bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer text-white font-semibold py-2 px-6 rounded-md transition">
              Sign Up For Free
            </button>
          </Link>
          <Link to="/jobs">
            <button className="border border-indigo-600 text-indigo-600 hover:cursor-pointer hover:bg-indigo-50 font-semibold py-2 px-6 rounded-md transition">
              Browse jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;