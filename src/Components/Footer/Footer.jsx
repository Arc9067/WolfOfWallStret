import React from "react";
import "./Footer.scss";
import NavLogo from "../../assets/nav-logo.png";
import Telegram from "../../assets/telegram.svg";
import Twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="container d-flex justify-content-between align-items-center con flex-wrap gap-3">
          <a href="" className="nav-logo d-flex align-items-center gap-3 ">
            <img src={NavLogo} alt="logo" className="logo" />
            Wolf of Wall Street
          </a>
          <ul className="footer-icon d-flex gap-3">
            <li>
              <a href="">
                <img src={Twitter} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={Telegram} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
