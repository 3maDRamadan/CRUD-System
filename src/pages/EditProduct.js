import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditProduct = () => {
  const [producttt, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/products/5f56`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  const [title, setTitle] = useState(producttt.title);
  const [price, setPrice] = useState(producttt.price);
  const [description, setDescription] = useState(producttt.description);

  let navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/products/5f56`, {
      method: "PUT",
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
      title: `You Edited ${producttt.title} to ${title}`,
    });
  };
  return (
    <div>
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
            value={title}
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
          Edit Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
