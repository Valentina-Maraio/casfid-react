import React from 'react'
import './style/HeaderNoticias.css'
import cabecera from '../../assets/images/teatro_albeniz.jpg'
import casfid_logo from '../../assets/images/logo_casfid.png'

const HeaderNoticias = () => {
  return (
    <>
      <div className="box">
        <img src={cabecera} alt="cabecera" />
        <img className="centered_logo" src={casfid_logo} alt="casfid_logo" /> 
      </div>
    </>
  )
}

export default HeaderNoticias