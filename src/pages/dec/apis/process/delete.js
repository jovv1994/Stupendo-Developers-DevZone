import React from 'react'
import MenuDecA from '@components/dec/menudecA'
import Layout from '@components/layout'
import stylesDelete from '@styles/dec/delete.module.css'
import SEO from '@components/seo'

const DeleteDec = () => (
  <Layout>
    <SEO title="Developers Stupendo | Dec" />
    <div className={stylesDelete.body}>
      <div className={stylesDelete.container}>
        <MenuDecA />
      </div>
      <embed
        src="/media/files/dec/API de anulación de procesos.pdf"
        className={stylesDelete.pdf}
      />
    </div>
  </Layout>
)

export default DeleteDec
