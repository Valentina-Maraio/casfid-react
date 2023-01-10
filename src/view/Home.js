import React from "react";
import Menu from "../components/menu/Menu";
import Header from "../components/header/Header";
import Evento from "../components/evento/Evento";
import NombreEvento from "../components/nombre_evento/NombreEvento";
import News from '../components/news/News'
import Buttons from '../components/button/Buttons'
import Contacts from "../components/contacts/Contacts";
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Menu />
      <Header />
      <Evento />
      <NombreEvento />
      <News/>
      <Buttons/>
      <Contacts/>
      <Footer/>
    </>
  );
};

export default Home;
