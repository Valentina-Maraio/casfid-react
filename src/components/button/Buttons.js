import React from "react";
import "./style/Button.css";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <>
      <div className="button">
        <Link to="/noticias">
          <button className="info">VER MÁS</button>
        </Link>
      </div>
    </>
  );
};

export default Buttons;
