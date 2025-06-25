import React, { use } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const AddJobs = () => {
    const {user} = use(AuthContext)
    // console.log(user);
    const handleAddJobs = e => {
        e.preventDefault()
        const form =e.target;
        const formData = new FormData(form)
        const newJob= Object.fromEntries(formData.entries())
        // console.log(newJob);
        // send jon data to the db 
        fetch('https://user-jobportal-server.vercel.app/jobs',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newJob)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: "Drag me!",
                    icon: "success",
                    draggable: true
                  });
                  form.reset()
            }
        })
    }
    return (
        <div>
            <div className="hero my-7">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left">

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                        <div className="card-body">

                            <h1 className="text-4xl font-bold pb-1 text-blue-800">Post a New Job!</h1>

                            <form onSubmit={handleAddJobs}>
                                <label className="label text-black font-bold text-lg pb-1 mt-5">Job Title</label>
                                <input name='title' type="text"  className="input w-[500px] mb-6" placeholder="Enter Job Title" />
                                <label className="label text-black font-bold text-lg pb-1 ">Category</label>
                                <select name='category' defaultValue="Enter Category" className="select w-[500px] mb-5 text-gray-600">

                                    <option disabled={true}>Enter Category</option>
                                    <option>Web development</option>
                                    <option>Graphics Designer</option>
                                    <option>Video editor</option>
                                    <option>Logo Designer</option>
                                </select>

                                <label className="label text-black font-bold text-lg pb-1 ">Description</label>
                                <textarea name='description' className="textarea h-30 w-[500px] mb-5" placeholder="Write detail about the Job..."></textarea>

                                <p className="label text-black font-bold text-lg pb-1 ">Deadline</p>
                                <label className="input w-[500px] mb-5">
                                    <input name='deadline' type="date" />
                                </label>

                                <label className="label text-black font-bold text-lg pb-1 ">Budget(USD)</label>
                                <input name='budget' type="text" className="input w-[500px] mb-5" placeholder="Enter Your Budget" />

                                <label className="label text-black font-bold text-lg pb-1 ">Your Name</label>
                                <input value={user.displayName} name='name' type="text" className="input w-[500px] mb-5" placeholder="Enter your name" />

                                <label className="label text-black font-bold text-lg pb-1 ">Email</label>
                                <input value={user.email} name='email' type="email" className="input w-[500px] mb-5" placeholder="Enter your email" />


                                <button type='submit' className="btn w-[500px] mb-4  bg-blue-600 hover:bg-blue-800 text-white">Add</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJobs;