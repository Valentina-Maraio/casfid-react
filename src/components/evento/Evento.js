import React from "react";
import "./style/Evento.css";
import logo from "../../assets/images/logo_dibujo_idasfest.png";

const Evento = () => {
  return (
    <>
      <div className="box">
        <div className="evento_box">
          <h4>5 &#10230; 7 SEPTIEMBRE, MÁLAGA</h4>
        </div>
        <div className="casfid_logo">
          <img src={logo} alt="casfid_logo" />
        </div>
        <div className="nombre_evento">
          <h2>INNOVACIÓN COMO EXIGENCIA</h2>
          <br />
          <h3>5 -7 Septiembre 2022</h3>
        </div>
      </div>
    </>
  );
};

export default Evento;
