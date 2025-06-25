import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {

    const [error,serError] = useState('');
    const {signIn,auth} = use(AuthContext)
    const location = useLocation();
    const navigate =useNavigate();


    const provider = new GoogleAuthProvider
            const handleGoogleSignIn = ()=>{
               signInWithPopup(auth,provider)
               .then(result=>{
                console.log(result);
               })
               .catch(error=>{console.log(error)})
               
            }

            
    const handleLogin =e =>{
        e.preventDefault ();
        const form =e.target;
        const email = form.email.value
        const password = form.password.value
        signIn(email,password).then((result)=>{
            const user = result.user 
            toast.success("Logged in successfully");
            // console.log(user);
            navigate(`${location.state?location.state : '/' }`)
        }).catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            // alert(errorCode ,errorMessage)
            serError(errorCode);
          });

    }
    return (
        <div>           
            <div className="hero my-10">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left">
                        
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                        <div className="card-body">

                        <h1 className="text-4xl font-bold pb-1">Login now!</h1>

                            <form onSubmit={handleLogin}>
                                <label className="label "></label>
                                <input name='email' type="email" className="input w-96" placeholder="Email" required/>

                                <label className="label"></label>
                                <input name='password' type="password" className="input w-96" placeholder="Password" required/>

                                <div><a className="link link-hover">Forgot password?</a></div>
                                {error && <p className='text-red-600 text-xs'>{error}</p>}
                                <button className="btn w-96 my-4 bg-blue-700 text-white">Login</button>

                            </form>
                                {/* google  */}
                                <button onClick={handleGoogleSignIn} type='submit' class="btn w-96 bg-white hover:bg-gray-200 text-black border-gray-700">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
<p className='mt-2'>Don’t have an account? <Link to='/register' className='text-red-600 underline '> Register</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;