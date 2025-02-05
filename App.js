
// Nested Elements in React
{/* <div class="parent">
    <div class="child">
        <h1>I am H1</h1>
        <h2>I am H2</h2>
    </div>
</div> */}
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { className: "parent" },
    React.createElement("div", { className: "child" }, [
        React.createElement("h1", {}, "I am H1"),
        React.createElement("h2", {}, "I am H2")
    ]),
    React.createElement("div", { className: "child2" }, [
        React.createElement("h1", {}, "I am H1"),
        React.createElement("h2", {}, "I am H2")
    ]));


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

