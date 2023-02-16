import React from "react";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";

const ShipingPolicy = () => {
  return (
    <>
      <Meta title={"Shiping Policy"} />
      <BrandCrumb title="Shiping Policy" />

      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShipingPolicy;
