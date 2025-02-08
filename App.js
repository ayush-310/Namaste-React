import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = () => {
        <h1 className="head" tableIndex="5">
            Hello World using JSX 😛
        </h1>
    
};

//  Component composition
const HeadingComponent = () => {
    return (
        <div className="container">
            {/* All are same  */}
            {Title()}
            <Title></Title>
            <Title />
            <h1 className="head">Hello World using Functional Component 😛</h1>
        </div>
    );
};

// Create root and render element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
