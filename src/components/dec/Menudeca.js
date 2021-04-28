import React from 'react'
import stylesMenuDec from '@styles/dec/menudec.module.css'
import { Link } from 'gatsby'

const MenuDec = () => (
  <div className={stylesMenuDec.container}>
    <img src="/media/images/dec.svg" alt="Dec" className={stylesMenuDec.dec} />
    <hr className={stylesMenuDec.separator} />

    <div className={stylesMenuDec.main}>
      <Link to="/dec/introduction" className={stylesMenuDec.link}>
        <div className={stylesMenuDec.hovertitles}>
          <p className={stylesMenuDec.titles}>Introducción</p>
        </div>
      </Link>
      <Link to="/dec/apis/process/create" className={stylesMenuDec.link}>
        <div className={stylesMenuDec.hovertitles}>
          <p className={stylesMenuDec.titles}>Api1: Creación de procesos</p>
        </div>
      </Link>
      <Link to="/dec/apis/process/sign" className={stylesMenuDec.link}>
        <div className={stylesMenuDec.hovertitles}>
          <p className={stylesMenuDec.titles}>Api2: Firmado de procesos</p>
        </div>
      </Link>
      <Link to="/dec/apis/process/confirmation" className={stylesMenuDec.link}>
        <div className={stylesMenuDec.hovertitles}>
          <p className={stylesMenuDec.titles}>
            Api3: Confirmación de firma con PIN
          </p>
        </div>
      </Link>
      <Link to="/dec/apis/process/cancel" className={stylesMenuDec.link}>
        <div className={stylesMenuDec.hovertitles}>
          <p className={stylesMenuDec.titles}>Api4: Rechazo de procesos</p>
        </div>
      </Link>
      <Link to="/dec/apis/process/delete" className={stylesMenuDec.link}>
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
            Api5: Anulación de procesos
          </p>
        </div>
      </Link>
      <Link to="/dec/apis/process/search" className={stylesMenuDec.link}>
        <div className={stylesMenuDec.hovertitles}>
          <p className={stylesMenuDec.titles}>Api6: Consulta de procesos</p>
        </div>
      </Link>
      <Link to="/dec/widget" className={stylesMenuDec.link}>
        <div className={stylesMenuDec.hovertitles}>
          <p className={stylesMenuDec.titles}>Widget de Aceptación simple</p>
        </div>
      </Link>
      <Link to="/dec/glosary" className={stylesMenuDec.link}>
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
export default MenuDec
