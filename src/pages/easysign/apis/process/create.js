import React from 'react'
import MenuDecC from '@components/easysign/menueasysignc'
import Layout from '@components/layout'
import stylesCreate from '@styles/easysign/create.module.css'
import SEO from '@components/seo'

const Create = () => (
  <Layout>
    <SEO title="Developers Stupendo | EasySign" />
    <div className={stylesCreate.body}>
      <div className={stylesCreate.container}>
        <MenuDecC />
      </div>
      <embed
        src="/media/files/easySign/API de creación de firma EasySign.pdf"
        className={stylesCreate.pdf}
      />
    </div>
  </Layout>
)

export default Create
