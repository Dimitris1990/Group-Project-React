import React from "react";
import '../../datatables/table.css'

function DatatableTransactions({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  console.log("data", data)

    return (
    <div className="tableContainer">
     <table className="tableMain">
        <thead>
          <tr className="tableRow">
            <th>Order ID</th>
            <th>No. of Shares</th>
            <th>Current Price</th>
            <th>Timestmp</th>
            <th>Commission</th>
            <th>Symbol</th>
            <th>Order Type</th>
          </tr>
        </thead>
        {data.map(orders =>
          <tbody key={orders.oid}>
            <tr>
              <td>{orders.oid}</td>
              <td>{orders.numShares}</td>
              <td>{orders.currentPrice}€</td>
              <td>{orders.timestmp}</td>
              <td>{orders.commission}€</td>
              <td>{orders.symbol}</td>
              <td>{orders.ordertype}</td>
            </tr>
          </tbody>
        )}
     </table>
    </div>
    )
  }


export default DatatableTransactions;
