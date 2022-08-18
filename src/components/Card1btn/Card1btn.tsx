import React from 'react';

import './card1btn.css';

type DivProps = {
    styleDir: React.CSSProperties,
    styleBg: React.CSSProperties,
    styleLogo: React.CSSProperties,
    title: string,
    bgImg: string,
    logo: string,
    titleBtn: string,
}

const CardImgLeft2btn = ({styleDir, styleBg, styleLogo, title, bgImg, logo, titleBtn}: DivProps) => {
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
                    <span className='slot-text_container-logo'>
                        <img style={styleLogo} src={logo} alt="eArmani" />
                    </span>
                    <div className='slot-text_container-title p__playfair'>
                        {title}
                    </div>
                    <div className='slot-text_container-btn'>
                        <a className='btn-secondary btnMain' href="/">{titleBtn}</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CardImgLeft2btn