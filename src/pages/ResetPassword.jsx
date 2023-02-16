import React from "react";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BrandCrumb title="Reset Password" />

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="newpassword"
                      className="form-control"
                      placeholder="New Password"
                    />
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button className="button border-0" type="submit">
                        Submit
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

export default ResetPassword;
