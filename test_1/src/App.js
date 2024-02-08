import "./App.css";
import { useState } from "react";

function App() {
  const [data, setdata] = useState();
  return (
    <div className="App">
      <p>create react app</p>
      <input
        type="text"
        value={data}
        onChange={(e) => setdata(e.target.value + "test")}
      />
      {/* <img title="React Logo" src={logo} /> */}
    </div>
  );
}

export default App;
