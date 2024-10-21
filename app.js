// const heading = React.createElement("h1", {}, "hey vivek");
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(heading);
import React from "react";
import ReactDOM from "react-dom";



const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "h1 first tag"),
      React.createElement("h2", {}, "h2 first tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "h1 first tag"),
      React.createElement("h2", {}, "h2 first tag"),
    ]),
  ]
  // console.log(parent);
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
