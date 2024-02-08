import React from "react";

const TestId = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>RTL Query : getByTestId & getAllByTestId</h1>
      <h2 data-testid="id1">hello</h2>
      <h3 data-testid="id2">Hii</h3>
      <h3 data-testid="id2">Hiii</h3>
      <h3 data-testid="id2">Hiiii</h3>
      <h3 data-testid="id2">Hiiiii</h3>
    </div>
  );
};

export default TestId;
