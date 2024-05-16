import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CreateAssignment = () => {
    const { user } = useContext(AuthContext)
    console.log(user)

    const handleCreateBtn = (e) => {
        e.preventDefault();

        const assignmentBy = e.target.assignmentBy.value;
        const title = e.target.title.value;
        const marks = e.target.marks.value;
        const imgUrl = e.target.imgUrl.value;
        const difficulty = e.target.difficulty.value;
        const submissionDate = e.target.submissionDate.value;

        const createdAssignment =  {author : assignmentBy, title, marks, imgUrl, submissionDate, difficulty}

        console.log(createdAssignment)

    }
    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-5">Create Assignment</h1>

            <form className="m-3 grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleCreateBtn}>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Assignment by</span>
                    </div>
                    <input type="text" name="assignmentBy" value={user.email || user.user.email} placeholder="Type the assignment title" className="input input-bordered w-full border-black" readOnly />
                </label>


                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Title</span>
                    </div>
                    <input type="text" name="title" placeholder="Type the assignment title" className="input input-bordered w-full border-black" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Marks</span>
                    </div>
                    <select name="marks" className="flex items-center select select-bordered border-black w-full gap-2">
                        <option disabled defaultChecked>Select marks</option>
                        <option>100</option>
                        <option>90</option>
                        <option>80</option>
                        <option>70</option>
                        <option>60</option>
                        <option>50</option>
                        <option>40</option>
                        <option>30</option>
                        <option>20</option>
                        <option>10</option>
                    </select>
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Thumbnail Image URL</span>
                    </div>
                    <input type="text" name="imgUrl" placeholder="Type the image url here" className="input input-bordered w-full border-black" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Due Date:</span>
                    </div>
                    <input type="text" name="submissionDate" placeholder="Type submission deadline" className="input input-bordered w-full border-black" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Assignment Dificulty</span>
                    </div>
                    <select name="difficulty" className="flex items-center select select-bordered border-black w-full gap-2">
                        <option disabled defaultChecked>Select marks</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                </label>

                <button className="btn col-span-1 md:col-span-2 border-black ">Create</button>
            </form>
        </div >
    );
};

export default CreateAssignment;