import React from "react";
import '../../datatables/table.css'
import ProfileFooter from "../../PrFooter";

function DatatableUserFundings({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  console.log("data", data)

    return (
    <div className="Bgnd">
          <ProfileFooter/>
    <div className="tableContainer">
     <table className="tableMain">
        <thead>
          <tr className="tableRow">
            <th>Fund ID</th>
            <th>Fund Date</th>
            <th>Deposit</th>
            <th>Withdrawal</th>
          </tr>
        </thead>
        {data.map(fundings =>
          <tbody key={fundings.oid}>
            <tr>
              <td>{fundings.fid}</td>
              <td>{fundings.fdate}</td>
              <td>{fundings.deposit}€</td>
              <td>{fundings.withdrawal}€</td>
            </tr>
          </tbody>
        )}
     </table>
    </div>
    </div>
    )
  }


export default DatatableUserFundings;
