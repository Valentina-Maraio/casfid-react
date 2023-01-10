import React from "react";
import Menu from "../components/menu/Menu";
import Header from "../components/header/Header";
import Evento from "../components/evento/Evento";
import NombreEvento from "../components/nombre_evento/NombreEvento";
import News from '../components/news/News'

const Home = () => {
  return (
    <>
      <Menu />
      <Header />
      <Evento />
      <NombreEvento />
      <News/>
    </>
  );
};

export default Home;
