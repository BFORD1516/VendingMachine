import React from "react";
import { Link } from "react-router-dom";

const Snack1 = () => {
  return (
    <div className="snack-container">
      <h1>Snack 1</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Snack1;
