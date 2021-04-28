import React from 'react'
import stylesBanner from '@styles/banner.module.css'

const Banner = () => (
  <div className={stylesBanner.container}>
    <div className={stylesBanner.banner} />
    <div>
      <img
        src="/media/images/ilustracion.svg"
        alt="Ilustracion"
        className={stylesBanner.img}
      />
    </div>
    <p className={stylesBanner.p}>Bienvenidos a nuestro Development Center</p>
  </div>
)

export default Banner
