import React, { useContext } from "react";
import CartContext from "../CartContext.jsx";
import { useNavigate } from "react-router-dom";
const Dish = ({ dish }) => {
  const navigate = useNavigate();
  const { addToCartHandler } = useContext(CartContext);

  const { id, name, image, vegNonVeg, description, subCategory, price } = dish;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card shadow-lg border-0 rounded-4 m-3">
        <img
          src={image}
          className="card-img-top rounded-top-4 dish-image"
          alt={name}
        />
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title fw-bold">{name}</h5>
            <span
              className={`text-light badge ${
                vegNonVeg === "veg" ? "bg-success" : "bg-danger"
              } mb-2 fs-6`}
            >
              {vegNonVeg}
            </span>
          </div>

          <p className="text-muted small">{subCategory}</p>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-danger fs-5">₹{price}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                console.log("clicked");
                addToCartHandler({
                  name,
                  id,
                  subCategory,
                  price,
                  description,
                  vegNonVeg,
                  image,
                });
                navigate("/cart");
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dish;
