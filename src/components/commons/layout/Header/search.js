import React from "react";
import { ShowIcon } from "../../index";

const Search = () => (
  <form className="form-inline ml-auto">
    <div className="md-form my-0">
      <input
        style={{ height: "20px", backgroundColor: "red" }}
        className="form-control"
        type="text"
        placeholder="Búsqueda"
        aria-label="Search"
      />
    </div>
    &nbsp; &nbsp;
    <div className={"text-white"}>
      <ShowIcon type={"fa fa-search"} />
    </div>
  </form>
);

export default Search;
