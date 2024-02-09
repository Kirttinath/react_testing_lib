import React, { useEffect, useState } from "react";

const FindBy = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 1000);
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>findBy : </h1>
      {data ? <h2>Data Found</h2> : <h2>Data not found</h2>}
    </div>
  );
};

export default FindBy;
