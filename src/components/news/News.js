import React from "react";
import "./style/News.css";
import noticias from '../../assets/images/noticias.png'

const News = () => {
  return (
    <>
      <div className="new_box">
        <h4><b>NOTICIAS</b></h4>
          <img className="noticias" src={noticias} alt="noticias"/>
      </div>
    </>
  );
};

export default News;
