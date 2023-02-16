import React from "react";
import Meta from "../components/Meta";
import BrandCrumb from "../components/BrandCrumb";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BrandCrumb title="Dynamic Blog Name" />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <MdOutlineKeyboardBackspace className="fs-4" /> Go back to
                  Blogs
                </Link>
                <h3 className="title">
                  A Beautifull Sunday Morning Renissance
                </h3>
                <img
                  className="img-fluid w-100 my-4"
                  src="/images/blog-1.jpg"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consectetur vitae veritatis, rem laudantium quibusdam
                  molestiae dignissimos ducimus unde totam, quis reprehenderit
                  et cumque voluptate sed ipsam. Mollitia officiis animi
                  repellat?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
