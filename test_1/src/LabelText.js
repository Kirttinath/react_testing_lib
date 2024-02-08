import React from "react";

const LabelText = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>getByLabeText RTL Query</h1>
      <label htmlFor="input1">Username :</label>
      <input type="text" id="input1" defaultValue={"kirtti"} />
      <br />
      <label htmlFor="input2">Password :</label>
      <input type="text" id="input2" />
      <br />
      <label htmlFor="skills">Skills :</label>
      <input type="checkbox" id="skills" />
    </div>
  );
};

export default LabelText;
