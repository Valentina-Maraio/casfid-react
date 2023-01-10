import React from "react";
import cabecera from '../../assets/images/cabecera_home.jpg'
import casfid_logo from '../../assets/images/logo_casfid.png'
import './style/Header.css'

const Header = () => {
  return (
    <>
      <div className="box">
        <img src={cabecera} alt="cabecera" />
        <img className="centered_logo" src={casfid_logo} alt="casfid_logo" /> 
      </div>
    </>
  );
};

export default Header;
