import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  let navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/products", {
      method: "POST",

      body: JSON.stringify({
        title: title,
        price: price,
        description: description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/products");
      });
    Swal.fire({
      title: `You Added A New Product `,
      icon: "success",
    });
  };
  return (
    <div>
      <h1>Add New Product</h1>
      <div className="container">
        <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label htmlFor="productTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="productTitle"
              aria-describedby="product title"
              placeholder="Product Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              aria-describedby="product Price"
              placeholder="Product Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="Description"
              aria-describedby="product Price"
              placeholder="Product Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
