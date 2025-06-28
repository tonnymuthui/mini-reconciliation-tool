import React from "react";
import "./css/DataTable.css";


const DataTable = ({ data }) => {
    if (data.length === 0 ) return <p> Oops No Record Found, Try Again</p>;

    const headers = Object.keys(data[0]);


    return (
        <table className="data-table">
            <thead>
                <tr>
                    {headers.map((h) => (
                        <th key={h}>{h}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i}>
                        {headers.map((h) => (
                            <td
                             key={h}
                             className={
                                row.amountMismatch && h === "amount"
                                  ? "mismatch"
                                  : row.statusMismatch && h === "status"
                                  ? "mismatch"
                                  : ""
                             }
                            >
                                {row[h]}
                            </td>
                        )
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );


};


export default DataTable;