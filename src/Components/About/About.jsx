import React from "react";
import Logo from "../../assets/logo.png";
import "./About.scss";

const About = () => {
  return (
    <section className="About container-fluid">
      <div className="container">
        <div className="row justify-content-between align-items-center column-gap-5">
          <div className="col-lg-6 img-div">
            <img src={Logo} alt="" />
          </div>
          <div className="col-lg-6 d-flex gap-3 flex-column">
            <h1 className="title text-capitalize">about us</h1>
            <p className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              perferendis? Fuga vero aliquam saepe pariatur ratione qui est iure
              voluptatem sequi illum. Ipsum, eius reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
