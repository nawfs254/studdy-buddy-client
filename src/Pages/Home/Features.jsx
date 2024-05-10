import { FaPeopleGroup } from "react-icons/fa6";
import { SiSession } from "react-icons/si";
import { MdOutlineReviews } from "react-icons/md";
import { MdDashboard } from "react-icons/md";

const Features = () => {
    return (
        <div className="my-10">
            <div className="text-content text-center space-y-4 my-3">
                <h1 className="text-3xl md:text-5xl font-bold">Features</h1>
                <p className="w-full md:w-1/2 mx-auto">Unlock the power of collaborative learning with our feature-rich platform. Create assignments together, join interactive study sessions, receive peer feedback, track your progress, share resources, and earn rewards - all in one seamless experience.

                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="mx-2 border p-5  rounded-lg border-[#a0a0a0] space-y-3">
                    <div className="icon w-20 h-20 bg-gradient-to-r from-[#3b7c06] to-[#06696d] rounded-full flex justify-center items-center">
                        <FaPeopleGroup color="#fff" size="3rem" />
                    </div>

                    <h3 className="font-bold text-orange text-xl">Collaborative Assignment Creation</h3>
                    <hr className="w-1/3 border-2 border-purple" />
                    <p>Create assignments and share them with your study group. Set due dates, difficulty levels, and marks for assignments</p>
                </div>

                <div className="mx-2 border p-5  rounded-lg border-[#a0a0a0] space-y-3">
                    <div className="icon w-20 h-20 bg-gradient-to-r from-[#063c46] to-[#0a32b4] rounded-full flex justify-center items-center">
                        <SiSession color="#fff" size="3rem" />
                    </div>

                    <h3 className="font-bold text-orange text-xl">Interactive Study Sessions</h3>
                    <hr className="w-1/3 border-2 border-purple" />
                    <p>Schedule virtual study sessions with your friends. Collaborate in real-time using video conferencing and screen sharing</p>
                </div>

                <div className="mx-2 border p-5  rounded-lg border-[#a0a0a0] space-y-3">
                    <div className="icon w-20 h-20 bg-gradient-to-r from-[#58023f] to-[#cc05ab] rounded-full flex justify-center items-center">
                        <MdOutlineReviews color="#fff" size="3rem" />
                    </div>

                    <h3 className="font-bold text-orange text-xl">Peer Review and Feedback</h3>
                    <hr className="w-1/3 border-2 border-purple" />
                    <p>Submit your assignments for peer reviewProvide constructive feedback on your friends work</p>
                </div>

                <div className="mx-2 border p-5  rounded-lg border-[#a0a0a0] space-y-3">
                    <div className="icon w-20 h-20 bg-gradient-to-r from-[#e2390f] to-[#bb5d10] rounded-full flex justify-center items-center">
                        <MdDashboard color="#fff" size="3rem" />
                    </div>

                    <h3 className="font-bold text-orange text-xl">Personalized Study Dashboards</h3>
                    <hr className="w-1/3 border-2 border-purple" />
                    <p>Track your progress and performance on assignments. Analyze your strengths and areas for improvement</p>
                </div>
            </div>
        </div>
    );
};

export default Features;