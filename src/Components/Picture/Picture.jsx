import React from "react";
import "./Picture.scss";
import Logo from "../../assets/logo2.png";

const Picture = () => {
  return (
    <section className="container-fluid Picture">
      <div className="container d-flex justify-content-center align-items-center">
        <img src={Logo} alt="" />
      </div>
    </section>
  );
};

export default Picture;
