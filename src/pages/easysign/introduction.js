import React from 'react'
import MenuDecI from '@components/easysign/menueasysigni'
import Layout from '@components/layout'
import stylesIntro from '@styles/easysign/introduction.module.css'
import SEO from '@components/seo'

const IntroductionEasySign = () => (
  <Layout>
    <SEO title="Developers Stupendo | EasySign" />
    <div className={stylesIntro.body}>
      <div className={stylesIntro.container}>
        <MenuDecI className={stylesIntro.menudec} />
      </div>
      <embed
        src="/media/files/easySign/Introducción EasySign.pdf"
        className={stylesIntro.pdf}
      />
    </div>
  </Layout>
)

export default IntroductionEasySign
