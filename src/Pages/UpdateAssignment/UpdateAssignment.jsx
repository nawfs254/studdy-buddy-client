import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateAssignment = () => {

    const [startDate, setStartDate] = useState(new Date());

    const navigate = useNavigate()

    const assignment = useLoaderData()

    const { _id, author, title, marks, imgUrl, submissionDate, difficulty, description } = assignment

    // const handleUpdateBtn = e => {
    //     e.preventDefault()

    //     const assignmentBy = e.target.assignmentBy.value;
    //     const title = e.target.title.value;
    //     const marks = e.target.marks.value;
    //     const imgUrl = e.target.imgUrl.value;
    //     const difficulty = e.target.difficulty.value;
    //     const submissionDate = e.target.submissionDate.value;
    //     const description = e.target.description.value;

    //     const createdAssignment = { author:assignmentBy, title, marks, imgUrl, submissionDate, difficulty, description }

    //     console.log(createdAssignment)

    //     // fetch(`http://localhost:5000/assignments/${id}`, {
    //     //     method: "PUT"
    //     // })
    //     //     .then(res => res.json())
    //     //     .then(data => {
    //     //         console.log(data)
    //     //         // navigate('/assignments')
    //     //     })

    // }

    const handleUpdateBtn = e => {
        e.preventDefault()


        const assignmentBy = e.target.assignmentBy.value;
        const title = e.target.title.value;
        const marks = e.target.marks.value;
        const imgUrl = e.target.imgUrl.value;
        const difficulty = e.target.difficulty.value;
        const submissionDate = e.target.submissionDate.value;
        const description = e.target.description.value;

        const createdAssignment = { author: assignmentBy, title, marks, imgUrl, submissionDate, difficulty, description }

        console.log(createdAssignment, _id)

        fetch(`http://localhost:5000/assignments/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(createdAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/assignments')
            })
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-5">Update Assignment</h1>

            <form className="m-3 grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleUpdateBtn}>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Assignment by</span>
                    </div>
                    <input type="text" value={author} name="assignmentBy" placeholder="Type the assignment title" className="input input-bordered w-full border-black" readOnly />
                </label>


                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Title</span>
                    </div>
                    <input defaultValue={title} type="text" name="title" placeholder="Type the assignment title" className="input input-bordered w-full border-black" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Marks</span>
                    </div>
                    <select defaultValue={marks} name="marks" className="flex items-center select select-bordered border-black w-full gap-2">
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
                    <input defaultValue={imgUrl} type="text" name="imgUrl" placeholder="Type the image url here" className="input input-bordered w-full border-black" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Due Date:</span>
                    </div>
                    <div className="w-full border my-1 p-2 rounded-md" >
                        <DatePicker defaultValue={submissionDate} name="submissionDate" style={{ 'border': 'none' }} selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Assignment Dificulty</span>
                    </div>
                    <select defaultValue={difficulty} name="difficulty" className="flex items-center select select-bordered border-black w-full gap-2">
                        <option disabled defaultChecked>Select marks</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                </label>

                <label className="form-control col-span-1 md:col-span-2">
                    <div className="label">
                        <span className="label-text">Description</span>
                    </div>
                    <textarea defaultValue={description} name="description" className="textarea textarea-bordered h-24 border-black" placeholder="Type the assignment description"></textarea>
                </label>

                <button className="btn col-span-1 md:col-span-2 border-black ">Update</button>
            </form>
        </div >
    );
};

export default UpdateAssignment;