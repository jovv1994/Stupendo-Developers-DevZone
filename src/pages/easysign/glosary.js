import React from 'react'
import MenuDecG from '@components/easysign//menueasysigng'
import Layout from '@components/layout'
import stylesGlosary from '@styles/easysign/glosary.module.css'
import SEO from '@components/seo'

const GlosaryEasySign = () => (
  <Layout>
    <SEO title="Developers Stupendo | EasySign" />
    <div className={stylesGlosary.body}>
      <div className={stylesGlosary.container}>
        <MenuDecG />
      </div>
      <embed
        src="/media/files/easySign/Glosario EasySign.pdf"
        className={stylesGlosary.pdf}
      />
    </div>
  </Layout>
)

export default GlosaryEasySign
