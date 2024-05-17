import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


const Assignments = () => {
    const allAssignments = useLoaderData()
    const navigate = useNavigate()

    const handleDeleteBtn = (id) => {
        console.log("clicked", id)

        fetch(`https://studybuddy-server.vercel.app/assignments/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/assignments')
                
            })
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Total Marks</th>
                            <th>Submission Date</th>
                            <th>Difficulty</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allAssignments.map(assignment => {
                                console.log(assignment)
                                const { _id, author, title, marks, submissionDate, difficulty } = assignment;

                                return <tr key={_id} className="hover">
                                    <td>{author}</td>
                                    <td>{title}</td>
                                    <td>{marks}</td>
                                    <td>{submissionDate}</td>
                                    <td><div className="badge badge-primary">{difficulty}</div></td>
                                    <td>
                                        <div className="flex gap-2 items-center">
                                            <Link title="View" to={`/assignments/${_id}`} className="bg-[#86ff6e] p-2 rounded-sm cursor-pointer hover:bg-[#57ff35] transition-all">
                                                <FaEye />
                                            </Link>
                                            <Link to={`/update-assignment/${_id}`} title="Edit" className="bg-[#e6ff74] p-2 rounded-sm cursor-pointer hover:bg-[#d7ff24] transition-all"><FaEdit /></Link>
                                            <Link onClick={() => handleDeleteBtn(_id)} title="Delete" className="bg-[#ff7c7c] p-2 rounded-sm cursor-pointer hover:bg-[#fa5454] transition-all"><MdDeleteForever /></Link>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Assignments;