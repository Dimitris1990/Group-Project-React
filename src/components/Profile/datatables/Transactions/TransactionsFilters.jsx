import React, {useState, useEffect} from 'react'
import DatatableTransactions from '.';
import authService from '../../../../services/auth.service';

require("es6-promise").polyfill();
require("isomorphic-fetch");

const currentUser = authService.getCurrentUser();

function TransactionsTable() {
    const [data, setData] = useState([]);
    const [q, setQ] = useState("");
    const [searchColumns, setSearchColumns] = useState(["symbol"]);
    
    useEffect(() => {
        fetch("http://localhost:8080/api/accounts/"+currentUser.id+"/orders")
        .then(response => response.json())
        .then((json) => setData(json));
    },[])

    function search(rows){
        
        return rows.filter((row) => 
        searchColumns.some(
                (column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase())>-1 ));
    }
    const columns = data[0] && Object.keys(data[0]);
    return (
        <div className="Container">
            <div className="input-wrapper">
                <input className="search-input" 
                        type="text" 
                        placeholder="search.." 
                        value={q} onChange={(ev) => setQ(ev.target.value)}/>
                {columns && columns.map((column) => (
                <label>
                    <input className="checkboxes"
                    type="checkbox"
                    checked={searchColumns.includes(column)}
                    onChange={(e)=>{
                    const checked = searchColumns.includes(column);
                    setSearchColumns((prev) =>
                    checked ? prev.filter((sc) => sc !== column)
                    : [...prev, column]);
                }}/>
                    {column}
                </label>))}
            </div>
            <div>
                <DatatableTransactions data={search(data)} />
            </div>
        </div>
    )
}

export default TransactionsTable;