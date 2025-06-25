import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const MyPostedJobs = () => {
    const [myPostedJob,setMyPostedJob] = useState([]);
    const {user} = use(AuthContext);
    useEffect(()=>{
        fetch(`https://user-jobportal-server.vercel.app/my-posted-jobs/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyPostedJob(data))
    },[user?.email])
    // console.log(myPostedJob);
    // console.log(user);


const handleDelete = (id) =>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://user-jobportal-server.vercel.app/job/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => { 
                if(data.deletedCount){
                    setMyPostedJob(myPostedJob.filter(job => job._id !== id));
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your data has been deleted.",
                        icon: "success"
                      });
                    
                }
            })
          
        }
      });


    
    

}
    
      return (
        <div className="min-h-screen flex flex-col items-center bg-white py-10 px-4">
          <h1 className="text-3xl font-bold text-purple-700 mb-6">My Posted Jobs</h1>
          <div className="w-full max-w-4xl overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 font-semibold text-sm text-gray-700">Title</th>
                  <th className="px-4 py-2 font-semibold text-sm text-gray-700">Category</th>
                  <th className="px-4 py-2 font-semibold text-sm text-gray-700">Deadline</th>
                  <th className="px-4 py-2 font-semibold text-sm text-gray-700">Budget</th>
                  <th className="px-4 py-2 font-semibold text-sm text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myPostedJob.map((job, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-2">{job.title}</td>
                    <td className="px-4 py-2">{job.category}</td>
                    <td className="px-4 py-2">{job.deadline}</td>
                    <td className="px-4 py-2">{job.budget}</td>
                    <td className="px-4 py-2 space-x-2">
                      <Link to={`/update-job/${job._id}`}  className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-3 py-1 rounded">
                        Update
                      </Link>
{/* delete */}
                      <Link onClick={()=>handleDelete(job._id)} className="bg-pink-500 hover:bg-pink-600 text-white text-sm px-3 py-1 rounded">
                        Delete
                      </Link>
                      <Link className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded">
                        View Bids
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
};

export default MyPostedJobs;