import React from 'react'
import MenuDecW from '@components/dec/menudecw'
import Layout from '@components/layout'
import stylesWidget from '@styles/dec/widget.module.css'
import SEO from '@components/seo'

const WidgetDec = () => (
  <Layout>
    <SEO title="Developers Stupendo | Dec" />
    <div className={stylesWidget.body}>
      <div className={stylesWidget.container}>
        <MenuDecW />
      </div>
      <embed
        src="/media/files/dec/Widget de aceptación simple.pdf"
        className={stylesWidget.pdf}
      />
    </div>
  </Layout>
)

export default WidgetDec
