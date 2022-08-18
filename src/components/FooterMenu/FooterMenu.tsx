import { useState } from 'react';
import gArmani from '../../assets/logos-marca/giorgio-armani-logo-dark.svg';
import eArmani from '../../assets/logos-marca/emporio-armani-logo-dark.svg';
import ea7 from '../../assets/logos-marca/EA7_Dark.svg';
import acasa from '../../assets/logos-marca/armani-casa-dark.svg';
import creditCards from '../../assets/logos/credit-cards.svg';
import paypal from '../../assets/logos/paypal-black.svg';
import './footerMenu.css';

export const FooterMenu = () => {
    
    const [accordionf1, setAccordionf1] = useState(false);
    const [accordionf2, setAccordionf2] = useState(false);
    const [accordionf3, setAccordionf3] = useState(false);
    const [accordionf4, setAccordionf4] = useState(false);
    const [accordionf5, setAccordionf5] = useState(false);
    const [accordionf6, setAccordionf6] = useState(false);
    var sWidth = window.innerWidth;

  return (
    <div className='footer-top_menu'>
        <div className='footer-top_column c1'>
            <div className='footer__acc-title' onClick={()=>setAccordionf1(!accordionf1)}>
                <h3 className='h3'>Customer Care</h3 >                   
                <span className={sWidth<768?'plus fplus':'hidden'}>
                    {accordionf1?'-':'+'}
                </span>
            </div>      
            {(accordionf1 || sWidth>768) &&
                <div className='ul-container'>
                    <ul className='ul-container-list'>
                        <li><a href='/'>Contact us</a></li>
                        <li><a href='/'>Size Guide</a></li>
                        <li><a href='/'>My Order</a></li>
                        <li><a href='/'>My Account</a></li>
                        <li><a href='/'>Payment</a></li>
                        <li><a href='/'>Authenticity</a></li>
                        <li><a href='/'>Our Services</a></li>
                    </ul>
                </div> 
            } 
        </div>

        <div className='footer-top_column c2'>
            <div className='footer__acc-title' onClick={()=>setAccordionf2(!accordionf2)}>
                <h3 className='h3'>Shipping & Returns</h3>
                <span className={sWidth<768?'plus fplus':'hidden'}>
                    {accordionf2?'-':'+'}
                </span>
            </div>
            {(accordionf2 || sWidth>768) &&
                <div className='ul-container'>
                    <ul className='ul-container-list'>
                        <li><a href='/'>Shipping</a></li>
                        <li><a href='/'>Track your order</a></li>
                        <li><a href='/'>Returns and exchanges</a></li>
                    </ul>
                </div>
            }  
        </div>

        <div className='footer-top_column c3'>
            <div className='footer__acc-title' onClick={()=>setAccordionf3(!accordionf3)}>
                <h3 className='h3'>Legal Area</h3>
                <span className={sWidth<768?'plus fplus':'hidden'}>
                    {accordionf3?'-':'+'}
                </span>
            </div>
            {(accordionf3 || sWidth>768) &&           
                <div className='ul-container'>
                    <ul className='ul-container-list'>
                        <li><a href='/'>Terms and Conditions of Sale</a></li>
                        <li><a href='/'>Privacy Policy</a></li>
                        <li><a href='/'>Cookie Policy</a></li>
                        <li><a href='/'>Cookie settings</a></li>
                    </ul>
                </div> 
            } 
        </div>

        <div className='footer-top_column c4'>
            <div className='footer__acc-title' onClick={()=>setAccordionf4(!accordionf4)}>
                <h3 className='h3'>Our Company</h3>
                <span className={sWidth<768?'plus fplus':'hidden'}>
                    {accordionf4?'-':'+'}
                </span>
            </div>
            {(accordionf4 || sWidth>768) &&
                <div className='ul-container'>
                    <ul className='ul-container-list'>
                        <li><a href='/'>Find a Boutique</a></li>
                        <li><a href='/'>Careers</a></li>
                        <li><a href='/'>Armani/Values</a></li>
                    </ul>
                </div>  
            }
        </div>

        <div className='footer-top_column c5'>           
            <div className='footer__acc-title' onClick={()=>setAccordionf5(!accordionf5)}>
                <h3 className='h3'>Fashion</h3>
                <span className={sWidth<768?'plus fplus':'hidden'}>
                    {accordionf5?'-':'+'}
                </span>
            </div>
            {(accordionf5 || sWidth>768) &&
                <div className='ul-container'>
                    <ul className='ul-container-list'>
                        <li className='heightImg-0_7'><a href='/'><img src={gArmani} alt="gArmani"/></a></li>
                        <li className='heightImg-0_7'><a href='/'><img src={eArmani} alt="eArmani"/></a></li>
                        <li className='heightImg-0_7'><a href='/'><img src={ea7} alt="ea7"/></a></li>
                        <li className='heightImg-0_7'><a href='/'><img src={acasa} alt="acasa"/></a></li>
                    </ul>
                </div>
            }  
        </div>

        <div className='footer-top_column c6'>
            
            <div className='footer__acc-title' onClick={()=>setAccordionf6(!accordionf6)}>
                <h3 className='h3'>Payment Methods</h3>
                <span className={sWidth<768?'plus fplus':'hidden'}>
                    {accordionf6?'-':'+'}
                </span>
            </div>
            {(accordionf6 || sWidth>768) &&
                <div className='ul-container'>
                    <ul className='ul-container-list'>
                        <li className='heightImg-0_7'><a href='/'><img src={creditCards} alt="creditCards"/></a></li>
                        <li className='heightImg-0_7'><a href='/'><img src={paypal} alt="paypal"/></a></li>
                    </ul>
                </div>
            }  
        </div>
    </div>
  )
}
