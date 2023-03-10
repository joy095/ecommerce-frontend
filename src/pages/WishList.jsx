import React from "react";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const WishList = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BrandCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="/images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  className="img-fluid w-100"
                  src="/images/watch.jpg"
                  alt="watch"
                />
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honer T1 7.0 1 GB ROM 7 Inch With WI-FI+3G Tablet
                  </h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="/images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  className="img-fluid w-100"
                  src="/images/watch.jpg"
                  alt="watch"
                />
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honer T1 7.0 1 GB ROM 7 Inch With WI-FI+3G Tablet
                  </h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="/images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  className="img-fluid w-100"
                  src="/images/watch.jpg"
                  alt="watch"
                />
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honer T1 7.0 1 GB ROM 7 Inch With WI-FI+3G Tablet
                  </h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WishList;
