import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData, Navigate, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const UpdateJobs = () => {
    const { user } = use(AuthContext)
    const jobData = useLoaderData()
    // console.log(jobData);
    const { title, category, description, deadline, budget, name, email,_id } = jobData;
    // console.log(_id);
    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = Object.fromEntries(form)
        // console.log(data);

        fetch(`https://user-jobportal-server.vercel.app/update-job/${_id}`, {
            method:'PUT',
            headers:{
               "content-type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data =>console.log(data))
        toast.success("Job Updated Successfully");
        navigate('/my-posted-jobs')


    }

    return (
        <div>
            <div className="hero my-7">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left">

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                        <div className="card-body">

                            <h1 className="text-4xl font-bold pb-1 text-blue-800">Update the Job!</h1>

                            <form onSubmit={handleUpdate}>
                                <label className="label text-black font-bold text-lg pb-1 mt-5">Job Title</label>
                                <input defaultValue={title} name='title' type="text" className="input w-[500px] mb-6" placeholder="Enter Job Title" />
                                <label className="label text-black font-bold text-lg pb-1 ">Category</label>
                                <select defaultValue={category} name='category' placeholder="Enter Category" className="select w-[500px] mb-5 text-gray-600">

                                    <option disabled={true}>Enter Category</option>
                                    <option>Web development</option>
                                    <option>Graphics Designer</option>
                                    <option>Video editor</option>
                                    <option>Logo Designer</option>
                                </select>

                                <label className="label text-black font-bold text-lg pb-1 ">Description</label>
                                <textarea defaultValue={description} name='description' className="textarea h-30 w-[500px] mb-5" placeholder="Write detail about the Job..."></textarea>

                                <p className="label text-black font-bold text-lg pb-1 ">Deadline</p>
                                <label className="input w-[500px] mb-5">
                                    <input defaultValue={deadline} name='deadline' type="date" />
                                </label>

                                <label className="label text-black font-bold text-lg pb-1 ">Budget(USD)</label>
                                <input defaultValue={budget} name='budget' type="text" className="input w-[500px] mb-5" placeholder="Enter Your Budget" />

                                <label className="label text-black font-bold text-lg pb-1 ">Your Name</label>
                                <input value={name} name='name' type="text" className="input cursor-not-allowed w-[500px] mb-5" placeholder="Enter your name" />

                                <label className="label text-black font-bold text-lg pb-1 ">Email</label>
                                <input value={email} name='email' type="email" className="input cursor-not-allowed w-[500px] mb-5" placeholder="Enter your email" />


                                <button type='submit' className="btn w-[500px] mb-4  bg-blue-600 hover:bg-blue-800 text-white">Update</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateJobs;