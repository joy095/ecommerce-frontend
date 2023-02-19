import React from "react";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const ShipingPolicy = () => {
  return (
    <>
      <Meta title={"Shiping Policy"} />
      <BrandCrumb title="Shiping Policy" />

      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShipingPolicy;
