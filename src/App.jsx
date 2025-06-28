import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import ResultsPanel from "./components/ResultsPanel";
import { reconcile } from "./utils/reconcile";
import "./App.css";

export default function App() {
  const [internal, setInternal] = useState(null);
  const [provider, setProvider] = useState(null);
  const [result, setResult]     = useState(null);

  const handleReconcile = () => {
    console.log("clicked");
    console.log("internal:", internal?.length, "provider:", provider?.length);

    if (!internal || !provider) {
      alert("Both files must be loaded first!");
      return;
    } //JIC

    const output = reconcile(internal, provider);
    console.log("reconcile result:", output);
    setResult(output);
  };

  return (
    <div className="app-container">
      <h1>Mini Reconciliation Tool</h1>

      <section className="upload-section">
        <FileUpload label="Internal System Export"  onLoad={setInternal} />
        <FileUpload label="Provider Statement" onLoad={setProvider} />
      </section>

      <button
        className="reconcile-btn"
        disabled={!internal || !provider} //JIC
        onClick={handleReconcile}
      >
        🔍 Reconcile
      </button>

      {result
        ? <ResultsPanel result={result} />
        : internal && provider && <p className="hint">Both files are loaded — click <b>Reconcile</b>.</p>}
    </div>
  );
}
