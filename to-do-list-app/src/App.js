import React from "react";
import ReactDOM from "react-dom/client";

import HomePage from "./components/homePage";
const root = ReactDOM.createRoot(document.getElementById("root"));
function App (){
    return (
        <div className="App">
            <HomePage />
        </div>
    )
}
root.render(<App />);