import React from "react";
import { Link } from "react-router-dom";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BrandCrumb title="Sign Up" />

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button className="button border-0" type="submit">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
