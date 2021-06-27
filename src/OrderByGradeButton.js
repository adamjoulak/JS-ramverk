import React from "react";

const OrderByGradeButton = (props) => {
  return (
    <button
      onClick={(e) => props.onClick("gradesSort")}
      style={{ backgroundColor: "light blue", marginTop: "10px" }}
      className="btn btn-primary"
    >
      Order by grade
    </button>
  );
};

export default OrderByGradeButton;
