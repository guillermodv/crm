import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

const ShowIconWithLabel = ({ type, label }) => (
  <Fragment>
    <i className={type}></i> {label}
  </Fragment>
);

export default ShowIconWithLabel;
