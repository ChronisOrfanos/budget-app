// client/src/App.jsx
import React from "react";
import Budget from "./Budget";

export default function App() {
  return (
    <div style={{ background: "white", minHeight: "100vh", padding: "20px" }}>
      <h1>Το Οικονομικό μας Πρόγραμμα</h1>
      <Budget />
    </div>
  );
}
