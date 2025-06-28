import React from "react";
import Papa from "papaparse";
import "./css/FileUpload.css";

const FileUpload = ({ label, onLoad}) => {
    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;


        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                const rows = result.data.filter(r => r.transaction_reference);
                console.log(label, "rows loaded:", rows.length);
                onLoad(rows);
            },
            error: (err) => {
                alert("CSV parsing error: " + err.message);
            },
        });
    };

    return (
        <div className="file-upload">
            <label className="file-label">
            {label}:
            <input type="file" accept=".csv" onChange={handleChange} />

            </label>

        </div>
    );






};

export default FileUpload;