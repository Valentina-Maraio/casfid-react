import React from "react";
import Menu from "../components/menu/Menu";
import HeaderHome from "../components/header_home/HeaderHome";
import Evento from "../components/evento/Evento";
import News from "../components/news/News";
import Buttons from "../components/button/Buttons";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Menu />
      <HeaderHome />
      <Evento />
      <News />
      <Buttons />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
