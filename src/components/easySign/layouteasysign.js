import React from 'react'
import HeaderEasySign from '../dec/headerdeceasysign'
import Footer from '../footer'

export default function Layout({ children }) {
  return (
    <div>
      <HeaderEasySign />
      {children}
      <Footer />
    </div>
  )
}
