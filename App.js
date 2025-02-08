import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = () => {
        <h1 className="head" tableIndex="5">
            Hello World using JSX 😛
        </h1>
    
};

// React Functional Component
const HeadingComponent = () => {
    return (
        <div className="container">
            <Title />
            <h1 className="head">Hello World using Functional Component 😛</h1>
        </div>
    );
};

// Create root and render element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
