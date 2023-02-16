import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`col-3 ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="/images/wish.svg" alt="wishlist" />
            </Link>
          </div>

          <div className="product-image">
            <img className="img-fluid" src="/images/watch.jpg" alt="product" />
            <img
              className="img-fluid"
              src="/images/watch-1.avif"
              alt="product"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids heands bulk 10 pacl multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eos
              sint quis ut, impedit facere cumque placeat, earum voluptate autem
              est soluta culpa architecto consequuntur, quo vel nam corrupti
              sed.
            </p>
            <p className="p-price">$100.00</p>
          </div>
          <div className="action-bar position-absolute gap-15">
            <div className="d-flex flex-column">
              <Link>
                <img src="/images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="/images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`col-3 ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="/images/wish.svg" alt="wishlist" />
            </Link>
          </div>

          <div className="product-image">
            <img className="img-fluid" src="/images/watch.jpg" alt="product" />
            <img
              className="img-fluid"
              src="/images/watch-1.avif"
              alt="product"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids heands bulk 10 pacl multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus consequatur rem animi iusto laboriosam eius,
              exercitationem ex accusantium, laborum quae odit omnis dolorum
              fuga? Officia dolores accusantium quod veritatis temporibus.
            </p>
            <p className="p-price">$100.00</p>
          </div>
          <div className="action-bar position-absolute gap-15">
            <div className="d-flex flex-column">
              <Link>
                <img src="/images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="/images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
