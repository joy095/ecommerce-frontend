import React from "react";
import { Link } from "react-router-dom";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BrandCrumb title="Forgot Password" />

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className="text-center mb-3 mt-2">
                  We will send you an email to reset your password
                </p>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-15">
                      <button className="button border-0" type="submit">
                        Submit
                      </button>
                      <Link to="/login">Cancel</Link>
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

export default ForgotPassword;
