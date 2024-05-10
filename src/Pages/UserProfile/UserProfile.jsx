import { useContext } from "react";
import userDefault from "../../assets/images/userDefault.webp"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {

    const { user } = useContext(AuthContext)

    const { displayName, photoURL, email } = user

    console.log(user)

    return (
        <div className='w-full lg:w-4/5 bg-base-200 mx-auto flex flex-col lg:flex-row gap-10 p-5'>
            <div className="space-y-2 text-center mx-auto w-full lg:w-1/3">
                <div className="rounded-full bg-orange mx-auto w-40 h-40">
                    <img src={photoURL || userDefault} alt="" className="rounded-full" />
                </div>
                <h3 className="font-bold text-3xl">{displayName}</h3>
                <p>{email}</p>
            </div>

            <div className="space-y-5 w-full lg:w-2/3">
                <h1 className="text-4xl font-bold">User Profile</h1>
                <hr />

                <p><span className="mx-2 font-bold">Username :</span> {displayName} </p>

                <p><span className="mx-2 font-bold">Date of Birth: </span> N/A</p>

                <p><span className="mx-2 font-bold">Mobile No: </span> N/A</p>

                <p><span className="mx-2 font-bold">Photo Url: </span> {photoURL}</p>

                <Link to="/manage-profile" className="my-3">
                    <button className="bg-orange border-orange border-2 hover:bg-transparent p-3 rounded-sm transition-all my-5">
                        Edit Profile
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default UserProfile;