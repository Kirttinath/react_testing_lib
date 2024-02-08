import "./App.css";
import { useState } from "react";

function App() {
  const [data, setdata] = useState("");

  return (
    <div className="App">
      <h1>create react app</h1>
      <br />
      <button
        onClick={() => {
          setdata("Update Data");
        }}
      >
        Update
      </button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
