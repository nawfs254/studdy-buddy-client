import toast, { Toaster } from "react-hot-toast";
import logo from "../../assets/logo-study-buddy.png"
import { FaFacebookF, FaGithub, FaGoogle, FaLink, FaUser } from 'react-icons/fa6';
import { MdEmail, MdKey } from 'react-icons/md';
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const Register = () => {
    const { registerWithEmail, setUser } = useContext(AuthContext)

    const handleRegisterBtn = e => {
        e.preventDefault();

        const form = e.target;

        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photoUrl = form.photoUrl.value;

        // console.log(username, email, password, photoUrl)

        if (!/^[^\s]+$/.test(username)) {
            
            toast.error('username cannot contain any spaces')
            return
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            
            toast.error("Your provided email is invalid")
            return
        }

        if (password < 6) {
            
            toast.error('Password must have 6 characters')
            return
        }

        if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
        
            toast.error('Password must contain at least one uppercase and one lowercase')
            return
        }

        if (password !== confirmPassword) {
        
            toast.error('Password and Confirm password must be the same')
            return
        }

        else{
            registerWithEmail(email, password)
                .then(user => {
                    setUser(user)
                    toast.success("signed up")
                })
                .catch(error => console.log(error))
            
        }

    }

    return (
        <div>
            <Toaster></Toaster>
            <div className='w-full mx-auto text-center space-y-3 my-3'>
                <div className='w-full'>
                    <img src={logo} alt="" className='w-28 h-28 mx-auto' />
                </div>
                <h1 className='text-4xl font-bold'>Register</h1>
                <p>Register to know more</p>
            </div>

            <form action="" className='w-4/5 mx-auto space-y-5' onSubmit={handleRegisterBtn}>
                <div className='space-y-3'>
                    <p>Username</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <FaUser />
                        <input type="text" name='username' className="grow" placeholder="Place your username" />
                    </label>
                </div>

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

                <div className='space-y-3'>
                    <p>Confirm Password</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdKey />
                        <input type="Password" name='confirmPassword' className="grow" placeholder="Confirm your password" />
                        <button>
                            Show
                        </button>
                    </label>
                </div>

                <div className='space-y-3'>
                    <p>Photo Url</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <FaLink />
                        <input type="text" name='photoUrl' className="grow" placeholder="Place your photo URL" />
                    </label>
                </div>

                <button className="btn bg-orange hover:bg-purple hover:text-white font-bold">Register</button>

                <p>Already have an account? <Link to="/registration/register"><span className="text-orange font-bold">Login here</span></Link></p>
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

export default Register;