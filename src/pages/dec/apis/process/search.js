import React from 'react'
import MenuDecQ from '@components/dec/menudecq'
import Layout from '@components/layout'
import stylesQuery from '@styles/dec/query.module.css'
import SEO from '@components/seo'

const SearchDec = () => (
  <Layout>
    <SEO title="Developers Stupendo | Dec" />
    <div className={stylesQuery.body}>
      <div className={stylesQuery.container}>
        <MenuDecQ />
      </div>
      <embed
        src="/media/files/dec/API Consulta de procesos.pdf"
        className={stylesQuery.pdf}
      />
    </div>
  </Layout>
)

export default SearchDec
