import * as React from "react";
import { createRoot } from "react-dom";
import SearchForm from "./SearchForm";
const App = () => {
  return (
    <div>
      <h1> welcome to My react App</h1>
      <SearchForm />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
