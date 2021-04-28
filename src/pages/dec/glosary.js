import React from 'react'
import MenuDecG from '@components/dec/MenuDecGlosary'
import Layout from '@components/layout'
import stylesGlosary from '@styles/dec/glosary.module.css'
import SEO from '@components/seo'

const GlosaryDec = () => (
  <Layout>
    <SEO title="Developers Stupendo | Dec" />
    <div className={stylesGlosary.body}>
      <div className={stylesGlosary.container}>
        <MenuDecG />
      </div>
      <embed
        src="/media/files/dec/Glosario Dec.pdf"
        className={stylesGlosary.pdf}
      />
    </div>
  </Layout>
)

export default GlosaryDec
