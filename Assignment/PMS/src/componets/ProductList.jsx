import React from "react";

const ProductList = ({ products, deleteProduct }) => {
  return (
    <div>
      <h4>Product List</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.p_id}>
              <td>{product.p_id}</td>
              <td>{product.p_name}</td>
              <td>{product.p_quantity}</td>
              <td>{product.p_price}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(product.p_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
