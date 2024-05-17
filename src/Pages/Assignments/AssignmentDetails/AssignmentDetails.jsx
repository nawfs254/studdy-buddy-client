import { useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {

    const assignment = useLoaderData()
    console.log(assignment)
 
    const { title, marks, imgUrl, submissionDate, difficulty, description} = assignment

    return (
        <div>
            <h1 className="text-3xl text-center font-bold my-3 md:my-5">{title}</h1>

            <div className="flex flex-col md:flex-row gap-3 m-5">
                <img src={imgUrl} alt="" className="border-2 p-2 border-black"/>
                <div className="space-y-4">
                    <div className="m-4"><p className="font-bold my-2">Assignment title: </p>{title}</div>
                    <div className="m-4"><p className="font-bold my-2">Assignment marks: </p>{marks}</div>
                    <div className="m-4"><p className="font-bold my-2">Assignment submission: </p>{submissionDate}</div>
                    <div className="m-4"><p className="font-bold my-2">Assignment difficulty: </p>{difficulty}</div>
                    <div className="m-4"><p className="font-bold my-2">Assignment description: </p>{description}</div>

                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;