import React from 'react'
import stylesMenuEasySign from '@styles/easysign/menueasysign.module.css'
import { Link } from 'gatsby'

const MenuEasySignGlosary = () => (
  <div className={stylesMenuEasySign.container}>
    <img
      src="/media/images/easysign.svg"
      alt="EasySign"
      className={stylesMenuEasySign.dec}
    />
    <hr className={stylesMenuEasySign.separator} />

    <div className={stylesMenuEasySign.main}>
      <Link to="/easysign/introduction" className={stylesMenuEasySign.link}>
        <div className={stylesMenuEasySign.hovertitles}>
          <p className={stylesMenuEasySign.titles}>Introducción</p>
        </div>
      </Link>
      <Link
        to="/easysign/apis/process/create"
        className={stylesMenuEasySign.link}
      >
        <div className={stylesMenuEasySign.hovertitles}>
          <p className={stylesMenuEasySign.titles}>
            Creación de firma EasySign
          </p>
        </div>
      </Link>

      <Link to="/easysign/glosary" className={stylesMenuEasySign.link}>
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
            Glosario
          </p>
        </div>
      </Link>
    </div>

    <hr className={stylesMenuEasySign.separator} />
    <Link to="/" className={stylesMenuEasySign.link}>
      <div className={stylesMenuEasySign.hovertitles}>
        <p className={stylesMenuEasySign.titles}>Inicio</p>
      </div>
    </Link>
    <a
      href="https://app.stupendo.ec/register/free"
      target="_blank"
      className={stylesMenuEasySign.link}
    >
      <div className={stylesMenuEasySign.hovertitlesC}>
        <p className={stylesMenuEasySign.titlesC}>Contáctanos</p>
      </div>
    </a>
  </div>
)
export default MenuEasySignGlosary
