import IconButton from '@material-ui/core/IconButton'
import React from 'react'
import stylesHeaderDec from '@styles/headerdec.module.css'
import { Link } from 'gatsby'
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => (
  <div className={stylesHeaderDec.container}>
    <IconButton aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Link to="/">
      <img
        src="/media/images/logo.svg"
        alt="Logo"
        className={stylesHeaderDec.logo}
      />
    </Link>
  </div>
)

export default Header
