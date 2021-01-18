import React from 'react'
import '../tablestyles.css'

function DatatableOrders({ data }) {
    const columns = data[0] && Object.keys(data[0]);
    console.log("data", data)
    const asd = true;
    return (
        <table className="tablecont">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>User F. Name</th>
                    <th>User L. Name</th>
                    <th>Symbol</th>
                    <th>Shares no.</th>
                    <th>Current Price</th>
                    <th>Time Stamp</th>
                    <th>Commission</th>
                    <th>Order Type</th>
                    <th>Actvive</th>
                </tr>
            </thead> 
            {data.map(order =>
                <tbody key={order.id}>
                    <tr>
                        <td>{order.oid}</td>
                        <td>{order.useraccount.user.fname}</td>
                        <td>{order.useraccount.user.lname}</td>
                        <td>{order.symbol}</td>
                        <td>{order.numShares}</td>
                        <td>{order.currentPrice}</td>
                        <td>{order.timestmp}</td>
                        <td>{order.commission}</td>
                        <td>{order.ordertype}</td>
                        <td>{order.actv.toString()}</td>
                    </tr>
                </tbody>
            )}
        </table>
    )
}

export default DatatableOrders;
