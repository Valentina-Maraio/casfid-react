import React from "react";
import "./style/Menu.css";
import casfid from "../../assets/images/logo_casfid.png";
import logo from "../../assets/images/logo_dibujo_idasfest.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <Link to="/">
          <img className="casfid" src={casfid} alt="casfid" />
        </Link>
        <img className="logo" src={logo} alt="casfid" />
      </div>
      <div className="menu_bar"></div>
    </>
  );
};

export default Menu;
