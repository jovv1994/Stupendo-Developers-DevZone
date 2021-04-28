import React from 'react'
import stylesFooter from '@styles/footer.module.css'
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <footer className={stylesFooter.container}>
      <div className={stylesFooter.div1}>
        <Link to="/help" className={stylesFooter.link}>
          <p>Ayuda</p>
        </Link>
        <a
          href="https://app.stupendo.ec/register/free"
          target="_blank"
          className={stylesFooter.a}
        >
          <p>Contáctanos</p>
        </a>
      </div>

      <div className={stylesFooter.div2}>
        <Link to="/about" className={stylesFooter.link}>
          <p style={{ marginBottom: `13px` }}>Más sobre nosotros</p>
        </Link>
        <p>
          <a href="https://www.facebook.com/ahoraesstupendo" target="_blank">
            <img
              src="/media/images/if.png"
              alt="facebook"
              style={{ marginRight: `5px` }}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/ahoraesstupendo"
            target="_blank"
          >
            <img
              src="/media/images/iin.png"
              alt="linkedin"
              style={{ marginRight: `14px` }}
            />
          </a>
          <a
            href="https://www.stupendo.com/"
            target="_blank"
            className={stylesFooter.a}
          >
            www.stupendo.com
          </a>
        </p>
      </div>

      <div className={stylesFooter.div3}>
        <p>Information Security</p>
        <p>Management System ISO</p>
        <p>27001:2013</p>
      </div>

      <div className={stylesFooter.div4}>
        <p>&copy; 2021 Stupendo</p>
        <p> Todos los Derechos Reservados.</p>
      </div>
    </footer>
  )
}
