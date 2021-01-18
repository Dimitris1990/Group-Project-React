import React from 'react'
import '../tablestyles.css'

function DatatableFundings({ data }) {
    const columns = data[0] && Object.keys(data[0]);
    console.log("data", data)
    const asd = true;
    return (
        <table className="tablecont">
            <thead>
                <tr>
                    <th>Fund. ID</th>
                    <th>F. Name</th>
                    <th>L. Name</th>
                    <th>Username</th>
                    <th>Funding Date</th>
                    <th>Deposit</th>
                    <th>Withdrawal</th>
                </tr>
            </thead> 
            {data.map(funding =>
                <tbody key={funding.fid}>
                    <tr>
                        <td>{funding.fid}</td>
                        <td>{funding.useraccount.user.fname}</td>
                        <td>{funding.useraccount.user.lname}</td>
                        <td>{funding.useraccount.user.username}</td>
                        <td>{funding.fdate}</td>
                        <td>{funding.deposit}</td>
                        <td>{funding.withdrawal}</td>
                    </tr>
                </tbody>
            )}
        </table>
    )
}

export default DatatableFundings;
