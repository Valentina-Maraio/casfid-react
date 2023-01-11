import React from 'react'
import Menu from '../components/menu/Menu'
import NewsCards from '../components/news_cards/NewsCards'
import HeaderNoticias from '../components/header_noticias/HeaderNoticias'

const Noticias = () => {
  return (
    <>
    <Menu/>
    <HeaderNoticias/>
    <h1>Lista di tutte le notizie</h1>
    <NewsCards/>
    </>
  )
}

export default Noticias