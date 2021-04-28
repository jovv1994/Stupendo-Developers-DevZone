import * as React from 'react'
import Layout from '@components/layout'
import SEO from '@components/seo'
import styles404 from '@styles/404.module.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Developers Stupendo | 404: Not found" />
    <div className={styles404.body}>
      <div className={styles404.container}>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
