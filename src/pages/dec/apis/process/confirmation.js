import React from 'react'
import MenuDecP from '@components/dec/menudecp'
import Layout from '@components/layout'
import stylesConfirmation from '@styles/dec/confirmation.module.css'
import SEO from '@components/seo'
const ConfirmationDec = () => (
  <Layout>
    <SEO title="Developers Stupendo | Dec" />
    <div className={stylesConfirmation.body}>
      <div className={stylesConfirmation.container}>
        <MenuDecP />
      </div>
      <embed
        src="/media/files/dec/API de confirmación de firma con PIN.pdf"
        className={stylesConfirmation.pdf}
      />
    </div>
  </Layout>
)

export default ConfirmationDec
