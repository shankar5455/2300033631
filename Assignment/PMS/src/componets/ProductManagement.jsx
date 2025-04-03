import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  // Add Product
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // Delete Product
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.p_id !== id));
  };

  // Update Product
  const updateProduct = (updatedProduct) => {
    setProducts(products.map((product) => 
      product.p_id === updatedProduct.p_id ? updatedProduct : product
    ));
  };

  return (
    <div>
      <ProductForm addProduct={addProduct} />
      <ProductList 
        products={products} 
        deleteProduct={deleteProduct} 
        updateProduct={updateProduct} 
      />
    </div>
  );
};

export default ProductManagement;
