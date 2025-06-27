import React from "react";
import DataTable from "./DataTable";
import { saveAs } from "file-saver";
import { Parser } from "json2csv";
import "./ResultsPanel.css";


const ResultsPanel = ({result}) => {
    const handleExport = (data, label) => {
        const parser = new Parser();
        const csv = parser.parse(data);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8"});
        saveAs(blob, `${label}.csv`);
    };


    return (
        <div className="results-panel">
            {[
                ["✅ Matched Transactions", result.matched],
                ["⚠️ Internal Only", result.internalOnly],
                ["❌ Provider Only", result.providerOnly], 
            ].map(([label, data])=>(
                <div className="section" key={label}>
                    <h2>{label} ({data.length})</h2>
                    <button onClick={() => handleExport(data, label)}>Export CSV</button>
                    <DataTable data={data}/>
                    </div>
            ))
            }
        </div>
    );
};

export default ResultsPanel;

