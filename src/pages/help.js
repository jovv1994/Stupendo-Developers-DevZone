import React from 'react'
import Layout from '@components/layout'
import stylesHelp from '@styles/help.module.css'

const Help = () => (
  <Layout>
    <div className={stylesHelp.body}>
      <div className={stylesHelp.container}>Esperando ayuda...</div>
    </div>
  </Layout>
)

export default Help
