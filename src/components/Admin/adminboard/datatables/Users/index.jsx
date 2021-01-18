import React from 'react'
import '../tablestyles.css'

function DatatableUsers({ data }) {
    const columns = data[0] && Object.keys(data[0]);
    console.log("data", data)
    
    return (
        <table className="tablecont">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>F. Name</th>
                    <th>L. Name</th>
                    <th>Username</th>
                    <th>E-mail</th>
                    <th>Creation Date</th>
                    <th>Active</th>
                    <th>Role</th>
                </tr>
            </thead> 
            {data.map(user =>
                <tbody key={user.id}>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.creation}</td>
                        <td>{user.actv.toString()}</td>
                        <td>{user.roles[0].name}</td>
                    </tr>
                </tbody>
            )}
        </table>
    )
}

export default DatatableUsers;
