import { useContext } from "react";
import userDefault from "../../assets/images/userDefault.webp"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ManageProfile = () => {

    const { user, updateUser, setUser } = useContext(AuthContext)

    const { displayName, photoURL, email } = user

    const navigate = useNavigate();

    const handleUpdateBtn = e => {
        e.preventDefault()

        const form = e.target;

        const username = form.username.value;
        const photoUrl = form.photoUrl.value;

        updateUser(username, photoUrl)
                        .then(() => {
                            setUser(user)
                            toast.success("User profile updated")
                            navigate('/user-profile')
                            }
                        )
                        .catch(error => console.log(error))
    }

    return (
        <div className='w-full lg:w-4/5 bg-base-200 mx-auto flex flex-col lg:flex-row gap-10 p-5'>
            <Toaster></Toaster>
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

                <form action="" className="space-y-5" onSubmit={handleUpdateBtn}>
                    <p><span className="mx-2 font-bold">Username :</span>
                        <input type="text" defaultValue={displayName} name="username" id="" className="w-full mx-2 p-2" />
                    </p>

                    <p><span className="mx-2 font-bold">Date of Birth: </span> N/A</p>

                    <p><span className="mx-2 font-bold">Mobile No: </span> N/A</p>

                    <p><span className="mx-2 font-bold">Photo Url: </span>
                        <input type="text" defaultValue={photoURL} name="photoUrl" id="" className="w-full mx-2 p-2" />
                    </p>
                    <button className="bg-orange border-orange border-2 hover:bg-transparent p-3 rounded-sm transition-all my-5">
                        Update Profile
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ManageProfile;