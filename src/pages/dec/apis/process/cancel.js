import React from 'react'
import MenuDecR from '@components/dec/menudecr'
import Layout from '@components/layout'
import stylesCancel from '@styles/dec/cancel.module.css'
import SEO from '@components/seo'

const CancelDec = () => (
  <Layout>
    <SEO title="Developers Stupendo | Dec" />
    <div className={stylesCancel.body}>
      <div className={stylesCancel.container}>
        <MenuDecR />
      </div>

      <embed
        src="/media/files/dec/API de rechazo de procesos.pdf"
        className={stylesCancel.pdf}
      />
    </div>
  </Layout>
)

export default CancelDec
