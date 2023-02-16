import React from "react";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";

const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Term & Conditions"} />
      <BrandCrumb title="Term & Conditions" />
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

export default TermAndConditions;
