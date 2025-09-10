import React from "react";

const Dish = ({ dish }) => {
  const { name, image, vegNonVeg, description, subCategory, price } = dish;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card shadow-lg border-0 rounded-4">
        <img
          src={image}
          className="card-img-top rounded-top-4 dish-image"
          alt={name}
        />
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title fw-bold">{name}</h5>
            <span
              className={`badge ${
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
              //   onClick={() => {
              //     console.log("clicked");
              //     dispatch({
              //       type: "ADD_ITEM",
              //       payload: {
              //         name,
              //         id,
              //         subCategory,
              //         price,
              //         description,
              //         vegNonVeg,
              //         image,
              //       },
              //     });
              //   }}
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
