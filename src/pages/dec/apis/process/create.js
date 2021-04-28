import React from 'react'
import MenuDecC from '@components/dec/menudecc'
import Layout from '@components/layout'
import stylesCreate from '@styles/dec/create.module.css'
import SEO from '@components/seo'

const CreateDec = () => (
  <Layout>
    <SEO title="Developers Stupendo | Dec" />
    <div className={stylesCreate.body}>
      <div className={stylesCreate.container}>
        <MenuDecC />
      </div>

      <embed
        src="/media/files/dec/API de creación de procesos.pdf"
        className={stylesCreate.pdf}
      />
    </div>
  </Layout>
)

export default CreateDec
