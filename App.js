import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// React Element
// JSX - HTML-Like or XML-like syntax
// JSX (transpiled before it reaches to the JSX) - PARCEL - Babel
const element = (
    <h1 className="head">
        Hello World using JSX 😛
    </h1>
);

// React Component
// 1) Class Component
// 2) Functional Component

// React Functional Component

// 1) Arrow Function - all are same

const HeadingComponent1 = () => {
    return (<h1 className="head">Hello World using Functional Component 😛</h1>);
};

const HeadingComponent2= () => {
    return <h1 className="head"> Hello World using Functional Component 😛</h1>
};

const HeadingComponent3 = () => {
        <h1 className="head"> Hello World using Functional Component 😛 </h1>
    
};





// Create root and render element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
