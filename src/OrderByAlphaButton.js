import React from "react";

const OrderByAlphaButton = (props) => {
  return (
    <button
      onClick={(e) => props.onClick("alphaSort")}
      style={{ backgroundColor: "light blue", marginTop: "10px" }}
      className="btn btn-primary"
    >
    Order by Alphabet
    </button>
  );
};

export default OrderByAlphaButton;
