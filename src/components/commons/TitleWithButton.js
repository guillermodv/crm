import React from "react";
import { Link } from "react-router-dom";
import { ShowIconWithLabel } from "./index";

const TitleWithButton = ({ label = "titulo", buttonLabel }) => (
  <div className={"row col-13 mt-2 mb-1 mx-1"}>
    <div className={"mt-1 col-6 text-left"}>
      <h3>{label}</h3>
    </div>
    <div className={"col-sm-6 text-right"}>
      <Link to="/account/new" className="btn btn-secondary">
        <ShowIconWithLabel label={buttonLabel} type={"fas fa-plus"} />
      </Link>
    </div>
  </div>
);

export default TitleWithButton;
