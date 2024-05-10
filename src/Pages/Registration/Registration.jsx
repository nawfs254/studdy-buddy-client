import { Outlet } from "react-router-dom";
import registrationImg from "../../assets/images/registration.png"

const Registration = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
                <img src={registrationImg} alt="" />
            </div>
            <div className="w-full lg:w-1/2">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Registration;