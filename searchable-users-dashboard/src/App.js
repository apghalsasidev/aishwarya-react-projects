import React from "react";
import ReactDOM from "react-dom/client";
import SearchableUserInput from "./SearchableUserInput";

const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
    return (
        <div className="App">
            <h1>Searchable Users Dashboard</h1>
            <SearchableUserInput />
            {/* Add your components and logic here */}
        </div>
    );
}
root.render(<App />);