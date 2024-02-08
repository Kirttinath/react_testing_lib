import React from "react";

const CustomRole = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Custom Role</h1>
      <button>Click Me</button>
      <button>Click Mee 2</button>
      <label htmlFor="input1">User name</label>
      <input type="text" id="input1" />
      <label htmlFor="input2">Password</label>
      <input type="text" id="input2" />
      <div role="dum">Hello</div>
    </div>
  );
};

export default CustomRole;
