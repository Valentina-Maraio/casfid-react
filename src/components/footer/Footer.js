import React from "react";
import "./style/Footer.css";

import ideafest from "../../assets/images/logo_idasfest.png";
import casfid from "../../assets/images/logo_casfid.png";
import congress from "../../assets/images/logo_idcongress.png";
import cars from "../../assets/images/logo_idcars.png";
import enter from "../../assets/images/logo_enterticket.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <label className="patrocinador">
          PATROCINADOR PRINCIPAL INSTITUCIONAL
        </label>
        <div>
          <img className="ideafest" src={ideafest} alt="ideafest" />
          <img className="casfid" src={casfid} alt="casfid" />
          <br />
        </div>
        <label className="colaboración">EN COLABORACION CON</label>
        <div>
          <img className="congress" src={congress} alt="congress" />
          <img className="cars" src={cars} alt="cars" />
          <img className="enter" src={enter} alt="enter" />
        </div>
      </div>
    </>
  );
};

export default Footer;
