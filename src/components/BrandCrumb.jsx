import React from "react";
import { Link } from "react-router-dom";

const BrandCrumb = (props) => {
  const { title } = props;

  return (
    <div className="brandcrumb py-4 mb-0">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0">
              <Link className="text-dark" to="/">
                Home &nbsp;
              </Link>
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCrumb;
