import React from "react";
import "./css/DataTable.css";

const DataTable = ({ data }) => {
  if (data.length === 0) return <p>Oops, no records found.</p>;

  return (
    <table className="data-table">
      <thead>
        <tr>
        
          <th>transaction_reference</th>
          <th>amount</th>
          <th>status</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            
            {/* <td style={{ background: "yellow", color: "black" }}>
              {row.transaction_reference}
            </td> */}
            <td className={row.amountMismatch ? "mismatch" : ""}>
              {row.amount}
            </td>
            <td className={row.statusMismatch ? "mismatch" : ""}>
              {row.status}
            </td>
            <td>{row.date}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
