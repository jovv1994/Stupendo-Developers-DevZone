import React from 'react'
import MenuDecS from '@components/dec/menudecs'
import Layout from '@components/layout'
import stylesSign from '@styles/dec/sign.module.css'
import SEO from '@components/seo'

const SignDec = () => (
  <Layout>
    <SEO title="Developers Stupendo | Dec" />
    <div className={stylesSign.body}>
      <div className={stylesSign.container}>
        <MenuDecS />
      </div>
      <embed
        src="/media/files/dec/API de firmado de procesos.pdf"
        className={stylesSign.pdf}
      />
    </div>
  </Layout>
)

export default SignDec
