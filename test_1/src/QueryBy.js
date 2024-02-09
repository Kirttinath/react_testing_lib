import React from "react";

const QueryBy = () => {
  const data = true;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>queryBy : </h1>
      {data ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
};

export default QueryBy;
