import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function OrderBtns(props) {
  return (
    <span className="btn-success" {...props} role="button">
    </span>
  );
}

export default OrderBtns;
