import React from 'react'
import stylesMenuDec from '@styles/easysign/menueasysign.module.css'
import { Link } from 'gatsby'

const MenuEasySignIntro = () => (
  <div className={stylesMenuDec.container}>
    <img
      src="/media/images/easysign.svg"
      alt="EasySign"
      className={stylesMenuDec.dec}
    />
    <hr className={stylesMenuDec.separator} />

    <div className={stylesMenuDec.main}>
      <Link to="/easysign/introduction" className={stylesMenuDec.link}>
        <div
          style={{
            margin: `15px 0 0 14px`,
            borderLeft: `1px solid #00c08b`,
          }}
        >
          <p
            style={{
              color: `#3d4975`,
              fontFamily: 'Myriad Pro',
              fontSize: `15px`,
              fontWeight: `400`,
              fontStyle: `normal`,
              letterSpacing: `normal`,
              textAlign: `left`,
              margin: `15px 0 0 11px`,
              textDecoration: `none`,
              width: `259px`,
              borderRadius: `10px`,
              backgroundColor: `#f9f9f9`,
            }}
          >
            Introducción
          </p>
        </div>
      </Link>
      <Link to="/easysign/apis/process/create" className={stylesMenuDec.link}>
        <div className={stylesMenuDec.hovertitles}>
          <p className={stylesMenuDec.titles}>Creación de firma EasySign</p>
        </div>
      </Link>
      <Link to="/easysign/glosary" className={stylesMenuDec.link}>
        <div className={stylesMenuDec.hovertitles}>
          <p className={stylesMenuDec.titles}>Glosario</p>
        </div>
      </Link>
    </div>

    <hr className={stylesMenuDec.separator} />
    <Link to="/" className={stylesMenuDec.link}>
      <div className={stylesMenuDec.hovertitles}>
        <p className={stylesMenuDec.titles}>Inicio</p>
      </div>
    </Link>
    <a
      href="https://app.stupendo.ec/register/free"
      target="_blank"
      className={stylesMenuDec.link}
    >
      <div className={stylesMenuDec.hovertitlesC}>
        <p className={stylesMenuDec.titlesC}>Contáctanos</p>
      </div>
    </a>
  </div>
)
export default MenuEasySignIntro
