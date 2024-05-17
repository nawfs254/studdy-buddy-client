import { useLoaderData } from "react-router-dom";
import { setAssignments } from "../../../../utilities";

const AssignmentDetails = () => {

    const assignment = useLoaderData()
    // console.log(assignment)

    const { title, marks, imgUrl, submissionDate, difficulty, description } = assignment


    const handleMarkBtn = () => {
        setAssignments(assignment)
    }

    

    return (
        <div>
            <h1 className="text-3xl text-center font-bold my-3 md:my-5">{title}</h1>

            <div className="flex flex-col md:flex-row gap-3 m-5">
                <img src={imgUrl} alt="" className="border-2 p-2 border-black" />
                <div className="space-y-4">
                    <div className="m-4"><p className="font-bold my-2">Assignment title: </p>{title}</div>
                    <div className="m-4"><p className="font-bold my-2">Assignment marks: </p>{marks}</div>
                    <div className="m-4"><p className="font-bold my-2">Assignment submission: </p>{submissionDate}</div>
                    <div className="m-4"><p className="font-bold my-2">Assignment difficulty: </p>{difficulty}</div>
                    <div className="m-4"><p className="font-bold my-2">Assignment description: </p>{description}</div>
                    
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn m-3 border-2 border-black" onClick={() => document.getElementById('my_modal_4').showModal()}>Take Assignment</button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog" onSubmit={handleMarkBtn}>
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn">Mark for Submit</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;