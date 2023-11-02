import React from "react";
import { NavLink } from "react-router-dom";

const Product = ({currElem,id}) => {
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={currElem.image} alt={currElem.name} />
          <figcaption className="caption">{currElem.category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{currElem.name}</h3>
            <p className="card-data--price"> ${currElem.price/100}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
