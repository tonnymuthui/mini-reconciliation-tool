import React, {useState, useMemo} from "react";
import FileUpload from "./components/FileUpload";
import ResultsPanel from "./components/ResultsPanel"
import { reconcile } from "./utils/reconcile";
import "./style.css";

function App() {
  const [internal, setInternal] = useState(null);
  const [provider, setProvider] = useState(null);

  const result = useMemo(() => {
    if (internal && provider) {
      return reconcile( internal, provider);
    }

    return null;
  }, [internal, provider]);


  return (
    <div className="app-container">
      <h1>Mini Reconciliation Tool</h1>
      <div className="upload-section">
        <FileUpload label="Internal Export" onLoad={setInternal} />
        <FileUpload label="Provider Statement" onLoad={setProvider} />

      </div>

        {result && <ResultsPanel result={result}/>}
    </div>
  );

}

export default App;