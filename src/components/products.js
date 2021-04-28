import React from 'react'
import stylesProducts from '@styles/products.module.css'
import { Link } from 'gatsby'

const Main = () => (
  <div className={stylesProducts.container}>
    <p className={stylesProducts.p}>Selecciona el producto:</p>

    <Link to="/dec/introduction">
      <div className={stylesProducts.div}>
        <img
          src="/media/images/dec.svg"
          alt="Dec"
          className={stylesProducts.dec}
        />
      </div>
    </Link>
    <Link to="/easysign/introduction">
      <div className={stylesProducts.div}>
        <img
          src="/media/images/easySign.svg"
          alt="Easy Sign"
          className={stylesProducts.easy}
        />
      </div>
    </Link>
  </div>
)

export default Main
