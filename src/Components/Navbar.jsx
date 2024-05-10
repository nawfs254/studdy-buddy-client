import { Link } from "react-router-dom";
import logo from "../assets/logo-study-buddy.png"

const Navbar = () => {


    const navMenu =
        <div className="text-base md:text-lg flex flex-col md:flex-row">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/assignments">Assignments</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </div>

    const navMenuWhileLoggedIn =
        <div className="text-base md:text-lg flex flex-col md:flex-row">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/assignments">Assignments</Link></li>
            <li><Link to="/create-assignments">Create Assignmetns</Link></li>
            <li><Link to="/pending-assignments">Pending Assignmetns</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </div>

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <Link to="/"><img src={logo} alt="" className="w-20 md:w-24 h-20 md:h-24" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <Link to="/login"><button className="btn text-base md:text-lg font-semibold bg-orange border-orange border-2 hover:bg-transparent hover:border-orange">Login</button></Link>
                <Link to="/register"><button className="btn text-base md:text-lg font-semibold border-2 border-purple hover:bg-purple hover:text-white">Register</button></Link>
            </div>
        </div>
    );
};

export default Navbar;