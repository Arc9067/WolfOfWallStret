import React from "react";
import "./Header.scss";
import NavLogo from "../../assets/nav-logo.png";

const Header = () => {
  return (
    <header className="container-fluid header">
      <nav className="container d-flex justify-content-between align-items-center">
        <a href="" className="nav-logo d-flex align-items-center gap-3">
          <img src={NavLogo} alt="logo" className="logo" />
          Wolf of Wall Street
        </a>

        <a href="" className="button text-capitalize">
          buy now
        </a>
      </nav>
    </header>
  );
};

export default Header;
