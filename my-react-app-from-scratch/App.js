import React from "react";
import ReactDOM from "react-dom/client";



const root = ReactDOM.createRoot(document.getElementById("root"));
// React Element
const Title = () => (
    <h1 id="heading" className="heading">
        Hi, Welcome to Aishwarya's  React App, This is my Title Compnnent
    </h1>
    );
// React Functional Component
const HeadingComponent = () => (
    <>
        <Title />
        <h1 id="heading" className="heading">
            Hi, Welcome to Aishwarya's React App, This is my functional component
        </h1>  
     </>
    );
console.log(HeadingComponent);

root.render(<HeadingComponent />); //take the heading obj -> covert it into h1 tag and insert into root
