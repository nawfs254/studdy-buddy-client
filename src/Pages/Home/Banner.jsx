import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/banner.png"
import "./Home.css"

const Banner = () => {
    return (
        <div className="bannerBg flex flex-col lg:flex-row gap-4 items-center my-5">
            <div className="text-content w-full lg:w-1/2 space-y-4 text-center lg:text-left p-2">
                <h1 className="text-3xl md:text-5xl font-bold">Unlock the Power of Collaborative <span className="text-orange">Learning</span></h1>
                <p><span className="text-orange">StudyBuddy</span> is your ultimate online platform for group study success. Connect with friends, create assignments, and engage in a supportive learning community. Enhance your knowledge and achieve your academic goals together.</p>

                <div className="flex gap-4 justify-center lg:justify-start">
                    <Link to="/login" className="bg-purple text-white font-semibold px-5 py-4 rounded-sm border-2 border-purple hover:bg-transparent hover:text-black hover:border-2 transition">Join Now</Link>

                    <Link to="/login" className="bg-transparent text-black font-semibold px-5 py-4 rounded-sm border-purple border-2 hover:bg-purple hover:text-white hover:border-2 transition">Join Now</Link>
                    
                </div>
            </div>

            <div className="image w-full lg:w-1/2 flex justify-center lg:justify-end">
                <img src={bannerImg} alt="" className="w-4/5"/>
            </div>
        </div>
    );
};

export default Banner;