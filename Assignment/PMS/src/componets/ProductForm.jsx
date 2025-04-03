import React, { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    p_id: "",
    p_name: "",
    p_quantity: "",
    p_price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.p_id || !formData.p_name) return;
    addProduct(formData);
    setFormData({ p_id: "", p_name: "", p_quantity: "", p_price: "" });
  };

  return (
    <div className="card p-3 mb-3">
      <h4>Add New Product</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="p_id" placeholder="Product ID" value={formData.p_id} onChange={handleChange} className="form-control mb-2" />
        <input type="text" name="p_name" placeholder="Product Name" value={formData.p_name} onChange={handleChange} className="form-control mb-2" />
        <input type="number" name="p_quantity" placeholder="Quantity" value={formData.p_quantity} onChange={handleChange} className="form-control mb-2" />
        <input type="number" name="p_price" placeholder="Price" value={formData.p_price} onChange={handleChange} className="form-control mb-2" />
        <button className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
