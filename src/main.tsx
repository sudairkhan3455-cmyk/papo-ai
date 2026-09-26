import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>My App</h1>
      <p>App is working!</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
