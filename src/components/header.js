import React from 'react'
import stylesHeader from '@styles/header.module.css'
import { Link } from 'gatsby'

const Header = () => (
  <div className={stylesHeader.container}>
    <Link to="/">
      <img
        src="/media/images/logo.svg"
        alt="Logo"
        className={stylesHeader.logo}
      />
    </Link>
  </div>
)

export default Header
