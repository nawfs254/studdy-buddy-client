const PendingAssignments = () => {

    const storedAssignments = JSON.parse(localStorage.getItem('assignments'))
    console.log(storedAssignments)

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Submission Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storedAssignments.map(assignment => {
                                return <tr key={assignment._id}>
                                    <td>{assignment.title}</td>
                                    <td>{assignment.submissionDate}</td>
                                    <td><div className="badge badge-accent">Pending</div></td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PendingAssignments;