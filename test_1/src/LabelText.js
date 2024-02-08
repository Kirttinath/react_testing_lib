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
      <br />
      <br />
      <label htmlFor="i1">user</label>
      <input type="text" id="i1" />
      <label htmlFor="i2">user</label>
      <input type="text" id="i2" />
      <label htmlFor="i3">user</label>
      <input type="text" id="i3" />
      <br />
      <br />
      <label htmlFor="habit">Habit</label>
      <input type="checkbox" id="habit" />
      <label htmlFor="habit1">Habit</label>
      <input type="checkbox" id="habit1" />
      <label htmlFor="habit2">Habit</label>
      <input type="checkbox" id="habit2" />
    </div>
  );
};

export default LabelText;
