import React from "react";

const DisplayValue = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>RTL Query : getByDisplayValue</h1>
      <input type="text" defaultValue={"hello"} />
      <textarea defaultValue={"Hii"}></textarea>
      <input type="text" defaultValue={"Kirtti"} />
      <textarea defaultValue={"Kirtti"}></textarea>
    </div>
  );
};

export default DisplayValue;
