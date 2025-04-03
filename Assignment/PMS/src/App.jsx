import React from "react";
import ProductManagement from "./componets/ProductManagement";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-4">
      <h2>Product Management</h2>
      <ProductManagement />
    </div>
  );
}

export default App;
