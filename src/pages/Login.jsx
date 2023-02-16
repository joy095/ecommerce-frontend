import React from "react";
import { Link } from "react-router-dom";
import BrandCrumb from "../components/BrandCrumb";
import Meta from "../components/Meta";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BrandCrumb title="Login" />

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
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
                    <Link to="/forgot-password">Forget Password?</Link>
                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                      <button type="submit" className="button border-0">
                        Login
                      </button>
                      <Link to="/signup" className="button signup">
                        Signup
                      </Link>
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

export default Login;
