import React from "react";
import Papa from "papaparse";
import "./FileUpload.css";

const FileUpload = ({ label, onLoad}) => {
    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;


        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            compelete: (result) => {
                onLoad(result.data);
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