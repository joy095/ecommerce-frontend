import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pagenotfound">
      <div className="d-flex">
        <div className="row">
          <p className="col-12 mb-0">This Page does'n exist,</p>
        </div>
      </div>
      <div className="d-flex">
        <div className="row">
          <Link to="/" className="col-12">
            Click here to go back to Home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
