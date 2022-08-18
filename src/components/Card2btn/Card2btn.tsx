import { color } from '@mui/system';
import React from 'react';

import './card2btn.css';

type DivProps = {
    styleDir: React.CSSProperties,
    styleBg: React.CSSProperties,
    styleLogo: React.CSSProperties,
    title: string,
    bgImg: string,
    logo: string,
    kbtn: boolean,
}

const CardImgLeft2btn = ({styleDir, styleBg, styleLogo, title, bgImg, logo, kbtn}: DivProps) => {
  return (
    <div className='card'>
        <div className='card-container' style={styleDir}>
            <div className='slot-img'>
                <a href="/">
                    <img src={bgImg} alt="page1" />
                </a>
            </div>
            <div className='slot-text' style={styleBg}>
                <div className='slot-text_container'>
                    <span className='slot-text_container-logo' >
                        <img style={styleLogo} src={logo} alt="eArmani" />
                    </span>
                    <div className={kbtn?'slot-text_container-title p__playfair':'slot-text_container-title p__playfair colorT'}>   
                        {title}
                    </div>
                    <div className='slot-text_container-btn'>
                        <a className={kbtn?'btn-secondary':'btn-primary'} href="/">For Her</a>
                        <a className={kbtn?'btn-secondary':'btn-primary'} href="/">For Him</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CardImgLeft2btn