import React, { Fragment } from "react";

const ShowIconWithLabel = ({ type, label }) => (
  <Fragment>
    <i className={type}></i> {label}
  </Fragment>
);

export default ShowIconWithLabel;
