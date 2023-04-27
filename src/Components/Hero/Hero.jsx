import React from "react";
import "./Hero.scss";
import Logo from "../../assets/logo.png";

const Hero = () => {
  return (
    <section className="container-fluid hero">
      <div className="container d-flex flex-column gap-3">
        <h1 className="title">The Official Wolf Of Wall Street </h1>
        <p className="info">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus et
          beatae autem quasi consequatur cumque labore nobis reiciendis qui
          minus, corporis quibusdam explicabo maxime tempore quis itaque aut
          magnam assumenda.
        </p>
        <a href="" className="button text-capitalize">
          buy now
        </a>

        <img src={Logo} alt="logo" className="logo" />
      </div>
    </section>
  );
};

export default Hero;
