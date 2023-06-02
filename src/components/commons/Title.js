import React from "react";

const Title = ({ label = "titulo" }) => (
  <div className={"row col-12 mt-1 mb-1"}>
    <div className={"text-left"}>
      <h4>{label}</h4>
    </div>
  </div>
);

export default Title;
