import * as React from "react";
import { createRoot } from "react-dom";
import { Pet } from "./Pet";
const App = () => {
  return (
    <div>
      <h1> welcome to My react App</h1>
      <Pet name="Copo" animal="dog" breed="german shepherd" />
      <Pet name="Copo" animal="dog" breed="german shepherd" />
      <Pet name="Copo" animal="dog" breed="german shepherd" />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
