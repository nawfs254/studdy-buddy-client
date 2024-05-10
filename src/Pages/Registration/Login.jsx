import React from 'react';
import logo from "../../assets/logo-study-buddy.png"
import { MdEmail, MdKey } from 'react-icons/md';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='w-full mx-auto text-center space-y-3 my-3'>
                <div className='w-full'>
                    <img src={logo} alt="" className='w-28 h-28 mx-auto' />
                </div>
                <h1 className='text-4xl font-bold'>Login</h1>
                <p>Login to explore StudyBuddy</p>
            </div>

            <form action="" className='w-4/5 mx-auto space-y-5'>
                <div className='space-y-3'>
                    <p>Email</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdEmail />
                        <input type="text" name='email' className="grow" placeholder="Place your email" />
                    </label>
                </div>

                <div className='space-y-3'>
                    <p>Password</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdKey />
                        <input type="Password" name='password' className="grow" placeholder="Enter your password" />
                        <button>
                            Show
                        </button>
                    </label>
                </div>

                <button className="btn bg-orange hover:bg-purple hover:text-white font-bold">Login</button>

                <p>New Here? <Link to="/registration/register"><span className="text-orange font-bold">Create an account</span></Link></p>
            </form>


            <div className='text-center my-5 w-4/5 mx-auto'>
                <div className='flex justify-center items-center gap-5'>
                    <hr className='w-1/3 border-dashed' /><p>Login with social</p><hr className='w-1/3 border-dashed' />
                </div>

                <div className='my-5 flex flex-col gap-2 w-4/5 lg:w-3/5 mx-auto'>
                    <button className='border p-3 rounded-md hover:bg-orange hover:border-orange transition-all'>
                        <div className='flex items-center gap-5'>
                            <FaGoogle size='1.25rem' />
                            <p>Login with Google</p>
                        </div>
                    </button>

                    <button className='border p-3 rounded-md hover:bg-orange hover:border-orange transition-all'>
                        <div className='flex items-center gap-5'>
                            <FaFacebookF size='1.25rem' />
                            <p>Login with Facebook</p>
                        </div>
                    </button>

                    <button className='border p-3 rounded-md hover:bg-orange hover:border-orange transition-all'>
                        <div className='flex items-center gap-5'>
                            <FaGithub size='1.25rem' />
                            <p>Login with Github</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;