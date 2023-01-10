import React from 'react'
import Menu from '../components/menu/Menu'
import NewsCards from '../components/news_cards/NewsCards'

const Noticias = () => {
  return (
    <>
    <Menu/>
    <h1>Lista di tutte le notizie</h1>
    <NewsCards/>
    </>
  )
}

export default Noticias