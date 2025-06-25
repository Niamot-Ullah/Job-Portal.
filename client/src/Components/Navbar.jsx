import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    const handleLogOut = () => {
        logOut().then(() => {
            toast.warning("Logged Out successfully");
        }).catch((error) => {
            // console.log(error);
        })
    }
    // console.log(user);


    const setDarkTheme = ()=>{
        document.querySelector('body').setAttribute('data-theme','dark')
    }
    const setLightTheme = ()=>{
        document.querySelector('body').setAttribute('data-theme','light')
    }
    const toggleTheme = e =>{
        if (e.target.checked) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }


    const link = (
        <>
            <li> <NavLink className={({ isActive }) =>
                isActive ? 'bg-blue-700 text-white font-bold ' : 'font-semibold'
            } to="/"> Home</NavLink></li>
            <li><NavLink className={({ isActive }) =>
                isActive ? 'bg-blue-700 text-white font-bold ' : 'font-semibold'
            } to='/jobs' >Jobs</NavLink></li>
            <li><NavLink className={({ isActive }) =>
                isActive ? 'bg-blue-700 text-white font-bold ' : 'font-semibold'
            } to='/add-jobs'>Add Jobs</NavLink></li>
            <li><NavLink className={({ isActive }) =>
                isActive ? 'bg-blue-700 text-white font-bold ' : 'font-semibold'
            } to={`/my-posted-jobs`}>My Posted Jobs</NavLink></li>
        </>
    )
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 pr-1.5 md:px-2 md:pr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                link
                            }
                        </ul>
                    </div>
                    <NavLink to='/' className=" text-xl lg:pl-3">JOB Portal</NavLink>

                    {/* auth  */}
                    {/* <div>{user && user.email}</div> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            link
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-1.5 md:space-x-3">

                    {/* theme change  */}
                    <label className="toggle text-base-content">
  <input onChange={toggleTheme}  type="checkbox" value="synthwave" className="theme-controller" />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label>
                    {/* end  */}
                    
                    {
                        user ? (
                            <div className='flex items-center space-x-1.5 md:space-x-3'>
                                <NavLink >
                                    <img alt={user.displayName} className="w-10 rounded-xl" src={user.photoURL}></img>
                                </NavLink>
                                <button onClick={handleLogOut} className="btn border-1 border-gray-400 px-1.5 text-[12px] md:px-3 md:text-[15px]">LogOut</button>
                            </div>
                        ) : (
                            <div className='space-x-1.5 md:space-x-3'>
                                <NavLink to='/login' className="btn border-1 border-gray-400 px-1.5 text-[12px] md:px-3 md:text-[15px]">Login</NavLink>
                                <NavLink to='/Register' className="btn border-1 border-gray-400 px-1.5 text-[12px] md:px-3 md:text-[15px]">Register</NavLink>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;