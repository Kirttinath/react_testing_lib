/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>create react app</p>
      <input type="text" placeholder="name" value={"kirtti"} />
      <img title="React Logo" src={logo} />
    </div>
  );
}

export default App;
