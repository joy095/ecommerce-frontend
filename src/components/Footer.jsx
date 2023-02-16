import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sing Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Accress"
                  aria-label="Your Email Accress"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <div className="py-4">
          <div className="container-xxl">
            <div className="row">
              <div className="col-4">
                <h4 className="text-white mb-4">Contact Us</h4>
                <div>
                  <address className="text-white fs-6">
                    Hno : 277 Newr vill chopal, <br /> Sonipat, Haryana <br />
                    PinCode: 131103
                  </address>
                  <a
                    href="tel:+91 6295511263"
                    className="mt-3 d-block mb-3 text-white"
                  >
                    +91 6295511263
                  </a>
                  <a
                    href="mailto:joykarmakar987654321@gmail.com"
                    className="mt-2 d-block mb-2 text-white"
                  >
                    joykarmakar987654321@gmail.com
                  </a>
                  <div className="social_icons d-flex align-items-center gap-30 mt-4">
                    <a className="text-white" href="#">
                      <BsLinkedin className="fs-4" />
                    </a>
                    <a className="text-white" href="#">
                      <BsInstagram className="fs-4" />
                    </a>
                    <a className="text-white" href="#">
                      <BsGithub className="fs-4" />
                    </a>
                    <a className="text-white" href="#">
                      <BsYoutube className="fs-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <h4 className="text-white mb-4">Information</h4>
                <div className="footer-links d-flex flex-column">
                  <Link to="/privacy-policy" className="text-white py-2 mb-1">
                    Privacy Policy
                  </Link>
                  <Link to="/refund-policy" className="text-white py-2 mb-1">
                    Refaund Policy
                  </Link>
                  <Link to="/shiping-policy" className="text-white py-2 mb-1">
                    Shiping Policy
                  </Link>
                  <Link to="/term-conditions" className="text-white py-2 mb-1">
                    Terms & Conditions
                  </Link>
                  <Link to="/blogs" className="text-white py-2 mb-1">
                    Blogs
                  </Link>
                </div>
              </div>
              <div className="col-3">
                <h4 className="text-white mb-4">Account</h4>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">About Us</Link>
                  <Link className="text-white py-2 mb-1">Faq</Link>
                  <Link className="text-white py-2 mb-1">Contact</Link>
                </div>
              </div>
              <div className="col-2">
                <h4 className="text-white mb-4">Quick Links</h4>
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">Laptop</Link>
                  <Link className="text-white py-2 mb-1">Headphones</Link>
                  <Link className="text-white py-2 mb-1">Tablets</Link>
                  <Link className="text-white py-2 mb-1">Watch</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powerd by Joy Karmakar
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
