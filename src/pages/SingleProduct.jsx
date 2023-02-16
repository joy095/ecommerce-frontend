import React from "react";
import Meta from "../components/Meta";
import BrandCrumb from "../components/BrandCrumb";

const SingleProduct = () => {
  return (
    <>
      <Meta title={"Dynamic Product Name"} />
      <BrandCrumb title="Dynamic Product Name" />

      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
