import React, { useState } from 'react';

import { BiShoppingBag} from "react-icons/bi";
import { Drawer } from '@mui/material';
import { FiUser, FiMapPin, FiHelpCircle, FiArrowLeft } from "react-icons/fi";
import { RiCaravanLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import SearchIcon from '@mui/icons-material/Search';
import Cart from '../Cart/Cart';

import emporioArmani from '../../assets/logos-marca/emporio-armani-logo-dark.svg';
import ea7 from '../../assets/logos-marca/EA7_Dark.svg';
import ax from '../../assets/logos-marca/ax.svg';
import gArmani from '../../assets/logos-marca/giorgio-armani-logo-dark.svg';
import acasa from '../../assets/logos-marca/armani-casa-dark.svg';
import adolci from '../../assets/logos-marca/armani-dolci-dark.svg';
import afiori from '../../assets/logos-marca/armani-fiori.svg';
import asilos from '../../assets/logos-marca/armani-silos.svg';
import abeauty from '../../assets/logos-marca/armani-beauty-dark2.svg';
import ah_r from '../../assets/logos-marca/armani-hotels-resorts-dark.svg';
import ar from '../../assets/logos-marca/armani-ristorante-dark.svg';
import  './menuHamb.css';

type CloseMenuProps = {
    closeMenuHamb: () => void,
    handleOpenCart: () => void,
    handleCloseCart: () => void,
    cartOpen: boolean,
    sWidth: number
}

const MenuHamb = ({closeMenuHamb, handleOpenCart, handleCloseCart, cartOpen, sWidth}: CloseMenuProps) => {
    const [accordionCC, setAccordionCC] = useState(false);
    const [accordionSR, setAccordionSR] = useState(false);
    
    const [hambSale, setHambSale] = useState(false);
    const [hambFa, setHambFa] = useState(false);
    const [hambLife, setHambLife] = useState(false);

    const [accordion1, setAccordion1] = useState(false);
    const [accordion2, setAccordion2] = useState(false);
    const [accordion3, setAccordion3] = useState(false);

    const [accordionk1, setAccordionk1] = useState(false);
    const [accordionk2, setAccordionk2] = useState(false);
    const [accordionk3, setAccordionk3] = useState(false);
    const [accordionk4, setAccordionk4] = useState(false);
    const [accordionk5, setAccordionk5] = useState(false);

  return (
    <div className='menuHamb-container'>
        <a href='/'><SearchIcon className='svg__hamb-search' /></a>
        <BiShoppingBag className='svg__hamb-cart' onClick={handleOpenCart}/>
        <Drawer anchor={sWidth>1024?'right':'top'} open={cartOpen} onClose={handleCloseCart}>
            <Cart closeMenuCart={handleCloseCart}/>
        </Drawer>
        <span className='close-menuHamb'><button onClick={closeMenuHamb} className='btn-menu'>X</button> </span>

        <div className={hambSale||hambFa||hambLife?'hidden':'menuHamb-header'}>
            <ul className='menuHamb-header_ul'>
                <li className='menuHamb-header_li'>
                   <div className='li-accordion' onClick={()=>setHambSale(true)}>
                        <span>
                            Sale
                        </span>                       
                        <span className='plus'>
                            {'>'}
                        </span>
                    </div>
                </li>
                <li className='menuHamb-header_li'>
                    <div className='li-accordion' onClick={()=>setHambFa(true)}>
                        <span>
                            Fashion
                        </span>                       
                        <span className='plus'>
                            {'>'}
                        </span>
                    </div>
                </li>
                <li className='menuHamb-header_li'>
                    <div className='li-accordion' onClick={()=>setHambLife(true)}>
                        <span>
                            Lifestyle
                        </span>                       
                        <span className='plus'>
                            {'>'}
                        </span>
                    </div>
                </li>
            </ul>
        </div>

        <div className={hambSale?'menuHamb-header_li':'hidden'}>          
            <span className='arrow' onClick={()=>setHambSale(false)}>
                <FiArrowLeft />
            </span>
                Sale
            <ul>
                <li className='heightImg-1_3'>
                    <div className='li-accordion li-margin' onClick={()=>setAccordion1(!accordion1)}>
                        <span>
                            <img src={emporioArmani} alt="emporioArmani"/>
                        </span>                       
                        <span className='plus'>
                            {accordion1?'-':'+'}
                        </span>
                    </div>
                    {accordion1 &&
                        <ul className='li-margin'>
                            <li className='subtitle_logo-list'>                             
                                <a href='/'>Woman</a>
                            </li>
                            <li className='subtitle_logo-list'>                             
                                <a href='/'>Man</a>
                            </li>
                            <li className='subtitle_logo-list'>                             
                                <a href='/'>Girl</a>
                            </li>
                            <li className='subtitle_logo-list'>                             
                                <a href='/'>Boy</a>
                            </li>
                        </ul>
                    }  
                </li>
                <li className='heightImg-1_6'>
                    <div className='li-accordion li-margin' onClick={()=>setAccordion2(!accordion2)}>
                        <span>
                            <img src={ea7} alt="ea7"/>
                        </span>                       
                        <span className='plus'>
                            {accordion2?'-':'+'}
                        </span>
                    </div>
                    {accordion2 &&
                        <ul className='li-margin'>
                            <li className='subtitle_logo-list'>
                                <a href='/'>Woman</a>                           
                            </li>
                            <li className='subtitle_logo-list'>
                                <a href='/'>Man</a>                             
                            </li>
                        </ul>  
                    }                
                </li>
            </ul>                 
        </div>

        <div className={hambFa?'menuHamb-header_li':'hidden'}>
            <span className='arrow' onClick={()=>setHambFa(false)}>
                <FiArrowLeft />
            </span>
                Fashion
            <ul>
                <li className='heightImg-1_3'>
                    <div className='li-accordion li-margin' onClick={()=>setAccordion1(!accordion1)}>
                        <span>
                            <img src={gArmani} alt="gArmani"/>
                        </span>                       
                        <span className='plus'>
                            {accordion1?'-':'+'}
                        </span>
                    </div>
                    {accordion1 &&
                        <ul className='li-margin'>
                            <li className='subtitle_logo-list'>                              
                                <div className='li-accordion li-margin ml-1' onClick={()=>setAccordionk1(!accordionk1)}>
                                    <span>
                                        Woman
                                    </span>                       
                                    <span className='plus'>
                                        {accordionk1?'-':'+'}
                                    </span>
                                </div>
                                {accordionk1 &&
                                    <ul className='li-margin ham-kind'>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>New Arrivals</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Clothing</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Shoes</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Bags</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Accessories</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Eyewear</a>  
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Fragrances</a>
                                        </li>
                                    </ul>
                                }                                                            
                            </li>
                            <li className='subtitle_logo-list'>                             
                                <div className='li-accordion li-margin ml-1' onClick={()=>setAccordionk2(!accordionk2)}>
                                    <span>
                                        Man
                                    </span>                       
                                    <span className='plus'>
                                        {accordionk2?'-':'+'}
                                    </span>
                                </div>
                                {accordionk2 &&
                                    <ul className='li-margin ham-kind'>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>New Arrivals</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Clothing</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Shoes</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Bags</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Accessories</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Eyewear</a>  
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Fragrances</a>
                                        </li>
                                    </ul>
                                }       
                            </li>
                            <li className='subtitle_logo-list'>                             
                                <div className='li-accordion li-margin ml-1' onClick={()=>setAccordionk3(!accordionk3)}>
                                    <span>
                                        In Boutique
                                    </span>                       
                                    <span className='plus'>
                                        {accordionk3?'-':'+'}
                                    </span>
                                </div>
                                {accordionk3 &&
                                    <ul className='li-margin ham-kind'>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Book an Appointment</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Made to Measure for Him</a>
                                        </li>                             
                                    </ul>
                                }       
                            </li>
                        </ul>
                    }  
                </li>
                <li className='heightImg-1_3'>
                    <div className='li-accordion li-margin' onClick={()=>setAccordion2(!accordion2)}>
                        <span>
                            <img src={emporioArmani} alt="emporioArmani"/>
                        </span>                       
                        <span className='plus'>
                            {accordion2?'-':'+'}
                        </span>
                    </div>
                    {accordion2 &&
                        <ul className='li-margin'>
                            <li className='subtitle_logo-list'>                              
                                <div className='li-accordion li-margin ml-1' onClick={()=>setAccordionk1(!accordionk1)}>
                                    <span>
                                        Woman
                                    </span>                       
                                    <span className='plus'>
                                        {accordionk1?'-':'+'}
                                    </span>
                                </div>
                                {accordionk1 &&
                                    <ul className='li-margin ham-kind'>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>New Arrivals</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Clothing</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Underwear and Loungewear</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Shoes</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Bags</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Accessories</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Eyewear</a>  
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Watches</a>  
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Fragrances</a>
                                        </li>
                                    </ul>
                                }                                                            
                            </li>
                            <li className='subtitle_logo-list'>                             
                                <div className='li-accordion li-margin ml-1' onClick={()=>setAccordionk2(!accordionk2)}>
                                    <span>
                                        Man
                                    </span>                       
                                    <span className='plus'>
                                        {accordionk2?'-':'+'}
                                    </span>
                                </div>
                                {accordionk2 &&
                                    <ul className='li-margin ham-kind'>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>New Arrivals</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Clothing</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Underwear and Loungewear</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Shoes</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Bags</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Accessories</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Eyewear</a>  
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Watches</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Fragrances</a>
                                        </li>
                                    </ul>
                                }       
                            </li>
                            <li className='subtitle_logo-list'>                             
                                <div className='li-accordion li-margin ml-1' onClick={()=>setAccordionk3(!accordionk3)}>
                                    <span>
                                        Kids
                                    </span>                       
                                    <span className='plus'>
                                        {accordionk3?'-':'+'}
                                    </span>
                                </div>
                                {accordionk3 &&
                                    <ul className='li-margin ham-kind'>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>New Arrivals</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Boy</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Girl</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Baby Boy 0-36 months</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Baby Girl 0-36 months</a>
                                        </li>                             
                                    </ul>
                                }       
                            </li>
                            <li className='subtitle_logo-list'>                             
                                <div className='li-accordion li-margin ml-1' onClick={()=>setAccordionk4(!accordionk4)}>
                                    <span>
                                        Gifts
                                    </span>                       
                                    <span className='plus'>
                                        {accordionk4?'-':'+'}
                                    </span>
                                </div>
                                {accordionk4 &&
                                    <ul className='li-margin ham-kind'>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>For Him</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>For Her</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>For Boys</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>For Girls</a>
                                        </li>                            
                                    </ul>
                                }       
                            </li>
                            <li className='subtitle_logo-list'>                             
                                <div className='li-accordion li-margin ml-1' onClick={()=>setAccordionk5(!accordionk5)}>
                                    <span>
                                        In Store
                                    </span>                       
                                    <span className='plus'>
                                        {accordionk5?'-':'+'}
                                    </span>
                                </div>
                                {accordionk5 &&
                                    <ul className='li-margin ham-kind'>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Book an Appointment</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>MyEA Bag Personalization</a>
                                        </li>                            
                                    </ul>
                                }       
                            </li>
                        </ul>                        
                    }                
                </li>
                <li className='heightImg-1_6'>
                    <div className='li-accordion li-margin' onClick={()=>setAccordion3(!accordion3)}>
                        <span>
                            <img src={ea7} alt="ea7"/>
                        </span>                       
                        <span className='plus'>
                            {accordion3?'-':'+'}
                        </span>
                    </div>
                    {accordion3 &&
                        <ul className='li-margin'>
                            <li className='subtitle_logo-list'>                              
                                <div className='li-accordion li-margin ml-1' onClick={()=>setAccordionk1(!accordionk1)}>
                                    <span>
                                        Woman
                                    </span>                       
                                    <span className='plus'>
                                        {accordionk1?'-':'+'}
                                    </span>
                                </div>
                                {accordionk1 &&
                                    <ul className='li-margin ham-kind'>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>New Arrivals</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Clothing</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Accessories</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Shoes</a>
                                        </li>                                   
                                    </ul>
                                }                                                            
                            </li>
                            <li className='subtitle_logo-list'>                             
                                <div className='li-accordion li-margin ml-1' onClick={()=>setAccordionk2(!accordionk2)}>
                                    <span>
                                        Man
                                    </span>                       
                                    <span className='plus'>
                                        {accordionk2?'-':'+'}
                                    </span>
                                </div>
                                {accordionk2 &&
                                    <ul className='li-margin ham-kind'>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>New Arrivals</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Clothing</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Accessories</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Shoes</a>
                                        </li>                                       
                                    </ul>
                                }       
                            </li>
                            <li className='subtitle_logo-list'>                             
                                <div className='li-accordion li-margin ml-1' onClick={()=>setAccordionk3(!accordionk3)}>
                                    <span>
                                        Kids
                                    </span>                       
                                    <span className='plus'>
                                        {accordionk3?'-':'+'}
                                    </span>
                                </div>
                                {accordionk3 &&
                                    <ul className='li-margin ham-kind'>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Boy 4-16 years</a>
                                        </li>
                                        <li className='subtitle_logo-list'>                             
                                            <a href='/'>Girl 4-16 years</a>
                                        </li>                             
                                    </ul>
                                }       
                            </li>
                        </ul>                 
                    }                
                </li>
                <li className='heightImg-1_8'>
                    <div className='li-accordion li-margin'>
                        <span>
                            <a href="/"><img src={ax} alt="ax"/></a>                           
                        </span>                       
                    </div>               
                </li>
            </ul>                 
        </div>

        <div className={hambLife?'menuHamb-header_li':'hidden'}>          
            <span className='arrow' onClick={()=>setHambLife(false)}>
                <FiArrowLeft />
            </span>
                LifeStyle
            <ul>
                <li className='heightImg-1_3'>
                    <div className='li-accordion li-margin'>
                        <a href='/' ><img src={acasa} alt="acasa"/></a>                                            
                    </div>                   
                </li>
                <li className='heightImg-1_8'>
                    <div className='li-accordion li-margin'>
                        <a href="/"><img src={adolci} alt="adolci"/></a>                             
                    </div>                                     
                </li>
                <li className='heightImg-1_8'>
                    <div className='li-accordion li-margin'>
                        <a href="/"><img src={afiori} alt="afiori"/></a>                             
                    </div>                                     
                </li>
                <li className='heightImg-1_6'>
                    <div className='li-accordion li-margin'>
                        <a href="/"><img src={asilos} alt="asilos"/></a>                             
                    </div>                                     
                </li>
                <li className='heightImg-1_8'>
                    <div className='li-accordion li-margin'>
                        <a href="/"><img src={abeauty} alt="abeauty"/></a>                             
                    </div>                                     
                </li>
                <li className='heightImg-2_5'>
                    <div className='li-accordion li-margin'>
                        <a href="/"><img src={ah_r} alt="ah_r"/></a>                             
                    </div>                                     
                </li>
                <li className='heightImg-1_8'>
                    <div className='li-accordion li-margin'>
                        <a href="/"><img src={asilos} alt="aclubs"/></a>                             
                    </div>                                     
                </li>
                <li className='heightImg-1_3'>
                    <div className='li-accordion li-margin'>
                        <a href="/"><img src={ar} alt="ar"/></a>                             
                    </div>                                     
                </li>
            </ul>                 
        </div>


        <div className='menuHamb-nav'>
            <ul className='menuHamb-nav_ul'>
                <li className='menuHamb-nav_li'>
                    <a className='menuHamb-nav_li-item' href="">
                        <FiUser />
                        <span>My account</span>
                    </a>
                </li>
                <li className='menuHamb-nav_li'>
                    <a className='menuHamb-nav_li-item' href="">
                        <FiMapPin />
                        <span>Store Locator</span>
                    </a>
                </li>
                <li className='menuHamb-nav_li'>
                    <div className='li-accordion' onClick={()=>setAccordionCC(!accordionCC)}>
                        <span>
                            <FiHelpCircle />
                            <span>Customer Care</span>
                        </span>
                        <span className='plus'>
                            {accordionCC?'-':'+'}
                        </span>
                    </div>
                    {accordionCC && 
                        <ul className='li-accordion_ul'>
                            <li><a href="/">Contact us</a></li>
                            <li><a href="/">Size Guide</a></li>
                            <li><a href="/">My Order</a></li>
                            <li><a href="/">My Account</a></li>
                            <li><a href="/">Payment</a></li>
                            <li><a href="/">Authenticity</a></li>
                        </ul>
                    }
                </li>
                <li className='menuHamb-nav_li'>
                    <div className='li-accordion' onClick={()=>setAccordionSR(!accordionSR)}>
                        <span>
                            <RiCaravanLine />
                            <span>Shipping & Returns</span>
                        </span>
                        <span className='plus'>
                        {accordionSR?'-':'+'}
                        </span>
                    </div>
                    {accordionSR && 
                        <ul className='li-accordion_ul'>
                            <li><a href="/">Returns and exchanges</a></li>
                            <li><a href="/">Track your order</a></li>
                            <li><a href="/">Shipping</a></li>
                        </ul>
                    }
                </li>
                <li className='menuHamb-nav_li'>
                    <a className='menuHamb-nav_li-item' href="">
                        <TbWorld />
                        <span>Unidted States</span>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default MenuHamb