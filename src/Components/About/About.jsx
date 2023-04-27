import React from "react";
import Logo from "../../assets/logo.png";
import "./About.scss";
import BuyIcon from "../../assets/buy-icon.png";
import SellIcon from "../../assets/sell-icon.png";

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

            <div className="icon-div d-flex flex-column gap-3">
              <div className="d-flex gap-3 align-items-center">
                <img src={BuyIcon} alt="" />
                <h4 className="text-capitalize">buy token</h4>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <img src={SellIcon} alt="" />
                <h4 className="text-capitalize">sell token</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
