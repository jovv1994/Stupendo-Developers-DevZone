import React from 'react'
import Header from '@components/header'
import Banner from '@components/banner'
import Products from '@components/products'
import Footer from '@components/footer'
import stylesIndex from '@styles/index.module.css'
import SEO from '@components/seo'

const Home = () => (
  <div className={stylesIndex.container}>
    <SEO title="Developers Stupendo | Home" />
    <Header className={stylesIndex.footer} />
    <div className={stylesIndex.body}>
      <Banner className={stylesIndex.banner} />
      <div className={stylesIndex.separator} />
      <Products className={stylesIndex.products} />
    </div>
    <Footer className={stylesIndex.footer} />
  </div>
)

export default Home
