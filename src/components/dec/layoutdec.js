import React from 'react'
import HeaderDec from '@components/dec/headerdec'
import Footer from '@components/footer'

export default function Layout({ children }) {
  return (
    <div>
      <HeaderDec />
      {children}
      <Footer />
    </div>
  )
}
