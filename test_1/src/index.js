import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import User from "./User";
import FunctionComp from "./FunctionComponent";
import Role from "./Role";
import CustomRole from "./CustomRole";
import AllByRole from "./AllByRole";
import LabelText from "./LabelText";
import PlaceholderTest from "./PlaceholderTest";
import Text from "./Text";
import TestId from "./TestId";
import DisplayValue from "./DisplayValue";
import Title from "./Title";
import AltText from "./AltText";
import Assert from "./Assert";
import QueryBy from "./QueryBy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />
    <User />
    <FunctionComp />
    <Role />
    <CustomRole />
    <AllByRole />
    <LabelText />
    <PlaceholderTest />
    <Text />
    <TestId/>
    <DisplayValue />
    <Title />
    <AltText />
    <Assert /> */}
    <QueryBy />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
