import logo from "../../assets/logo-study-buddy.png"
import { MdEmail, MdKey } from 'react-icons/md';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const {signInWithEmail, user, setUser} = useContext(AuthContext)
    
    const [isClicked, setIsClicked] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    useEffect(() => {
        if(user){
            navigate(location.state)
        }
    }, [user])

    const toggleShowAndHide = () => {
        setIsClicked(!isClicked)
    }

    const handleLoginBtn = e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInWithEmail(email, password)
            .then(user=> {
                console.log(user)
                setUser(user)
                toast.success('login')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div>
            <Toaster></Toaster>
            <div className='w-full mx-auto text-center space-y-3 my-3'>
                <div className='w-full'>
                    <img src={logo} alt="" className='w-28 h-28 mx-auto' />
                </div>
                <h1 className='text-4xl font-bold'>Login</h1>
                <p>Login to explore StudyBuddy</p>
            </div>

            <form action="" className='w-4/5 mx-auto space-y-5' onSubmit={handleLoginBtn}>
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
                        <input type={isClicked ? "text" : "password"} name='password' className="grow" placeholder="Enter your password" />
                        <button onClick={toggleShowAndHide}>
                            {isClicked ? "Hide" : "Show"}
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