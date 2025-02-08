import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// JSX - HTML-Like or XML-like syntax
// JSX (transpiled before it reaches to the JSX) - PARCEL - Babel
const element = (
    <h1 className="head">
        Hello World using JSX 😛
    </h1>
);

// Create root and render element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
