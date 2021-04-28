import React from 'react'
import MenuDecI from '@components/dec/MenuDecIntroduction'
import LayoutDec from '@components/dec/layoutdec'
import stylesIntro from '@styles/dec/introduction.module.css'
import SEO from '@components/seo'

const IntroductionDec = () => (
  <LayoutDec>
    <SEO title="Developers Stupendo | Dec" />
    <div className={stylesIntro.body}>
      <div className={stylesIntro.container}>
        <MenuDecI className={stylesIntro.menudec} />
      </div>
      <embed
        src="/media/files/dec/Introducción Dec.pdf"
        className={stylesIntro.pdf}
      />
    </div>
  </LayoutDec>
)

export default IntroductionDec
