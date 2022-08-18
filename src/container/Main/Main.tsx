import React from 'react';
import SlotLiveStory from '../../components/SlotLiveStory/SlotLiveStory';
import Card2btn from '../../components/Card2btn/Card2btn';
import Card1btn from '../../components/Card1btn/Card1btn'

import pEArmani from '../../assets/pages/p1.webp';
import pGArmani from '../../assets/pages/p2.webp';
import pEa7 from '../../assets/pages/p3.webp';
import pAbeauty from '../../assets/pages/p4.webp';
import pAx from '../../assets/pages/p5.webp';
import pJunior from '../../assets/pages/p6.webp';
import pACasa from '../../assets/pages/p7.webp';
import pRist from '../../assets/pages/p8.webp';
import pAHotel from '../../assets/pages/p9.webp';
import pADolci from '../../assets/pages/p10.webp';
import pAFiori from '../../assets/pages/p11.webp';
import pASilos from '../../assets/pages/p12.webp';

import eArmani from '../../assets/logos-marca/emporio-armani-logo-dark.svg';
import gArmani from '../../assets/logos-marca/giorgio-armani-logo-dark.svg';
import ea7 from '../../assets/logos-marca/EA7_White.svg';
import abeauty from '../../assets/logos-marca/armani-beauty-dark2.svg';
import ax from '../../assets/logos-marca/ax.svg';
import acasa from '../../assets/logos-marca/armani-casa-dark.svg';
import ar from '../../assets/logos-marca/armani-ristorante-dark.svg';
import ah_r from '../../assets/logos-marca/armani-hotels-resorts-dark.svg';
import adolci from '../../assets/logos-marca/armani-dolci-dark.svg';
import afiori from '../../assets/logos-marca/armani-fiori.svg';
import asilos from '../../assets/logos-marca/armani-silos.svg';
import BackToTop from '../../components/BackToTop/BackToTop';

const Main = () => {
  return (
    <div id='main'>
        <SlotLiveStory />
        <Card2btn styleDir={{flexDirection: 'row'}} styleBg={{background: 'var(--color-nav)'}} styleLogo={{height: '1.375rem'}} title='Discover the collection' bgImg={pEArmani} logo={eArmani} kbtn={true}/>
        <Card2btn styleDir={{flexDirection: 'row-reverse'}} styleBg={{background: 'var(--color-nav)'}} styleLogo={{height: '1.375rem'}} title='Discover the collection' bgImg={pGArmani} logo={gArmani} kbtn={true}/>
        <Card2btn styleDir={{flexDirection: 'row'}} styleBg={{background: 'var(--color-black)'}} styleLogo={{height: '8vw'}} title='Discover the collection' bgImg={pEa7} logo={ea7} kbtn={false} />
        <Card1btn styleDir={{flexDirection: 'row-reverse'}} styleBg={{background: 'var(--color-nav)'}} styleLogo={{height: '2.3rem'}} title='The Fragances are online' bgImg={pAbeauty} logo={abeauty} titleBtn="Discover the selection"/>
        <Card1btn styleDir={{flexDirection: 'row'}} styleBg={{background: 'var(--color-nav)'}} styleLogo={{height: '8vw'}} title='Discover the collection' bgImg={pAx} logo={ax} titleBtn="Discover more"/>
        <Card1btn styleDir={{flexDirection: 'row-reverse'}} styleBg={{background: 'var(--color-nav)'}} styleLogo={{height: '1.375rem'}} title='Discover the junior collection' bgImg={pJunior} logo={eArmani} titleBtn="Discover more"/>
        <Card1btn styleDir={{flexDirection: 'row'}} styleBg={{background: 'var(--color-nav)'}} styleLogo={{height: '1.5rem'}} title='Living in elegance and style' bgImg={pACasa} logo={acasa} titleBtn="Discover the selection"/>
        <Card1btn styleDir={{flexDirection: 'row-reverse'}} styleBg={{background: 'var(--color-nav)'}} styleLogo={{height: '1.5rem'}} title='Exclusive Food & Beverage experience' bgImg={pRist} logo={ar} titleBtn="Explore the locations"/>
        <Card1btn styleDir={{flexDirection: 'row'}} styleBg={{background: 'var(--color-nav)'}} styleLogo={{height: '8vw'}} title='An oasis of tranquility' bgImg={pAHotel} logo={ah_r} titleBtn="Explore the Armani Lifestyle"/>
        <Card1btn styleDir={{flexDirection: 'row-reverse'}} styleBg={{background: 'var(--color-nav)'}} styleLogo={{height: '2rem'}} title='Memorable, Mouthwatering gifts' bgImg={pADolci} logo={adolci} titleBtn="Discover the selection"/>
        <Card1btn styleDir={{flexDirection: 'row'}} styleBg={{background: 'var(--color-nav)'}} styleLogo={{height: '2rem'}} title='Refined floral decorations' bgImg={pAFiori} logo={afiori} titleBtn="Discover the selection"/>
        <Card1btn styleDir={{flexDirection: 'row-reverse'}} styleBg={{background: 'var(--color-nav)'}} styleLogo={{height: '2rem'}} title='Exhibition space' bgImg={pASilos} logo={asilos} titleBtn="Discover more"/>
        <BackToTop />
    </div>
  )
}

export default Main