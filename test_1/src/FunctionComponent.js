/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import handleClickData from "./helper";
export default function FunctionComponent() {
  const [data2, setdata2] = useState("");
  const handleClick = () => {
    setdata2("Hello New Data");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Functional Component method testing</h1>
      <br />
      <button data-testid="btn1" onClick={handleClick}>
        Update Data in FunctionalComponent
      </button>
      <br />
      <h2>{data2}</h2>
      <br />
      <button data-testid="btn2" onClick={handleClickData}>
        Update Data 2
      </button>
      <br />
      <h2></h2>
    </div>
  );
}
