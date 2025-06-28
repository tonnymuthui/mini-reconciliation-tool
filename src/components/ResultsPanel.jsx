import React from "react";

import Papa from "papaparse";         
import { saveAs } from "file-saver";
import DataTable from "./DataTable";
import "./css/ResultsPanel.css";

const ResultsPanel = ({ result }) => {
  const handleExport = (rows, label) => {
    const csv = Papa.unparse(rows);    //  this is to convert JSON → CSV, probably..
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, `${label}.csv`);
  };

  return (
    <div className="results-panel">
      {[["✅ Matched Transactions", result.matched],
        ["⚠️ Internal Only", result.internalOnly],
        ["❌ Provider Only", result.providerOnly]]
        .map(([title, rows]) => (
          <section key={title} className="section">
            <h2>{title} ({rows.length})</h2>
            <button onClick={() => handleExport(rows, title)}>Export CSV </button>
            <DataTable data={rows} />
          </section>
        ))}
    </div>
  );
};

export default ResultsPanel;
