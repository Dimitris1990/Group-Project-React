import React from 'react'
import '../tablestyles.css'

function DatatableCustomers({ data }) {
    const columns = data[0] && Object.keys(data[0]);
    console.log("data", data)
    const asd = true;
    return (
        <table className="tablecont">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>F. Name</th>
                    <th>L. Name</th>
                    <th>Username</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Address</th>
                    <th>Zipcode</th>
                    <th>Telephone</th>
                    <th>numId</th>
                    <th>VAT</th>
                </tr>
            </thead> 
            {data.map(customer =>
                <tbody key={customer.id}>
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.user.fname}</td>
                        <td>{customer.user.lname}</td>
                        <td>{customer.user.username}</td>
                        <td>{customer.country}</td>
                        <td>{customer.city}</td>
                        <td>{customer.address}</td>
                        <td>{customer.zipcode}</td>
                        <td>{customer.telephone}</td>
                        <td>{customer.numId}</td>
                        <td>{customer.vat}</td>
                    </tr>
                </tbody>
            )}
        </table>
    )
}

export default DatatableCustomers
