export const getAssignments = () => {
    let assignments = []
    const storedAssignments = localStorage.getItem('assignments')

    if(storedAssignments){
        assignments = JSON.parse(storedAssignments)
    }
    return assignments
}


export const setAssignments = (assignment) => {
    let assignments = getAssignments()
    const isExist = assignments.find(a => a._id === assignment._id)
    console.log(isExist)


    if(isExist){
        alert('already there')
        return
    }
    assignments.push(assignment)
    localStorage.setItem('assignments', JSON.stringify(assignments))
    alert('success')
}