import React from 'react'
import FooterCR from '../../components/FooterCR/FooterCR'
import { FooterMenu } from '../../components/FooterMenu/FooterMenu'
import Newsletter from '../../components/Newsletter/Newsletter'

const Footer = () => {
  return (
    <div>
        <Newsletter />
        <FooterMenu />
        <FooterCR />
    </div>
  )
}

export default Footer