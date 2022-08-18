import React, { useState } from 'react'

import armani from '../../assets/logos/armani.svg';
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
import './navHeader.css';

const NavHeader = () => {
  const[navFixed, setNavFixed] = useState(false); 
  const fixNav = () => {
    if(window.scrollY >=115){
      setNavFixed(true)
    } else {
      setNavFixed(false)
    }
  }
window.addEventListener("scroll", fixNav)

  return (
    <div className='app__header-main-menu'>
          <div className='app__header-logo'>
            <img src={armani} alt="armani-dark" />
          </div>
          <div className={navFixed?'app__header-nav fixed': 'app__header-nav'}>
              
              <div className= {navFixed?'logo-fix': 'hidden'}>
                <img src={armani} alt="armani-dark" />
              </div>

            <div className='app__header-nav_fs'>
              <ul className='ul-name'>
                <li className='subtitle'>
                  <a className='a-name menu-item-link' href='/' >SALE</a>
                  <div className='subtitle-container'>
                    <ul className='ul-logo'>
                      <li className='subtitle_logo heightImg-1_3'>
                        <a className='a-logo menu-item-link' href='/' ><img src={emporioArmani} alt="emporioArmani"/></a>
                        <div className='subtitle_logo-container-emporioArmani'>
                          <ul className='ul-item'>
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
                        </div>
                      </li>
                      <li className='subtitle_logo heightImg-1_6'>
                        <a className='a-logo menu-item-link' href='/' ><img src={ea7} alt="emporioArmani"/></a>
                        <div className='subtitle_logo-container-ea7'>
                          <ul className='ul-item'>
                            <li className='subtitle_logo-list'>
                              <a href='/'>Woman</a>                           
                            </li>
                            <li className='subtitle_logo-list'>
                              <a href='/'>Man</a>                             
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='bg'></div>
                </li>
                
                <li className='subtitle'>
                  <a className='a-name menu-item-link' href='/' >FASHION</a>
                   <div className='subtitle-container'>
                    <ul className='ul-logo'>

                      <li className='subtitle_logo heightImg-1_3'>
                        <a className='a-logo menu-item-link' href='/' ><img src={gArmani} alt="gArmani"/></a>
                        <div className='subtitle_logo-container-gArmaniF'>
                          <ul className='ul-itemF'>
                            <li className='subtitle_logo-listF'>
                              <a className='a-item' href='/' >WOMAN</a>
                                <div className='gender-container-woman'>
                                  <ul className='ul-gender'>
                                    <li className='ul-gender-list'>
                                      <a href='/'>New Arrivals</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Clothing</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Shoes</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Bags</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Accessories</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Eyewear</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Fine Jewellery</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Bijoux</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Fragrances</a>
                                    </li>
                                  </ul>
                                </div>
                            </li>

                            <li className='subtitle_logo-listF'>
                              <a className='a-item' href='/' >MAN</a>
                                <div className='gender-container-woman'>
                                  <ul className='ul-gender'>
                                    <li className='ul-gender-list'>
                                      <a href='/'>New Arrivals</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Clothing</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Shoes</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Bags</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Accessories</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Eyewear</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Fragrances</a>
                                    </li>
                                  </ul>
                                </div>
                            </li>

                            <li className='subtitle_logo-listF'>
                              <a className='a-item' href='/' >IN BOUTIQUE</a>
                                <div className='gender-container-woman'>
                                  <ul className='ul-gender'>
                                    <li className='ul-gender-list'>
                                      <a href='/'>Book an Appointment</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Made to Measure for Him</a>
                                    </li>
                                  </ul>
                                </div>
                            </li>

                          </ul>
                        </div>
                      </li> 

                      <li className='subtitle_logo heightImg-1_3'>
                        <a className='a-logo menu-item-link' href='/' ><img src={emporioArmani} alt="emporioArmani"/></a>
                        <div className='subtitle_logo-container-gArmaniF'>
                          <ul className='ul-itemF ul-itemFea'>
                            <li className='subtitle_logo-listF '>
                              <a className='a-item' href='/' >WOMAN</a>
                                <div className='gender-container-woman'>
                                  <ul className='ul-gender'>
                                    <li className='ul-gender-list'>
                                      <a href='/'>New Arrivals</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Clothing</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Shoes</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Bags</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Accessories</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Eyewear</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Fine Jewellery</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Bijoux</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Fragrances</a>
                                    </li>
                                  </ul>
                                </div>
                            </li>

                            <li className='subtitle_logo-listF'>
                              <a className='a-item' href='/' >MAN</a>
                                <div className='gender-container-woman'>
                                  <ul className='ul-gender'>
                                    <li className='ul-gender-list'>
                                      <a href='/'>New Arrivals</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Clothing</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Shoes</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Bags</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Accessories</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Eyewear</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Fragrances</a>
                                    </li>
                                  </ul>
                                </div>
                            </li>

                            <li className='subtitle_logo-listF'>
                              <a className='a-item' href='/' >KIDS</a>
                                <div className='gender-container-woman'>
                                  <ul className='ul-gender'>
                                    <li className='ul-gender-list'>
                                      <a href='/'>New Arrivals</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Boy</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Girl</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Baby Boy 0-36 months</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Baby Girl 0-36 months</a>
                                    </li>
                                  </ul>
                                </div>
                            </li>

                            <li className='subtitle_logo-listF'>
                              <a className='a-item' href='/' >GIFTS</a>
                                <div className='gender-container-woman mb-1'>
                                  <ul className='ul-gender'>
                                    <li className='ul-gender-list'>
                                      <a href='/'>For Him</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>For Her</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>For Boys</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>For Girls</a>                                     
                                    </li>
                                  </ul>
                                </div>

                                <a className='a-item' href='/' >IN STORE</a>
                                <div className='gender-container-woman'>
                                  <ul className='ul-gender'>
                                    <li className='ul-gender-list'>
                                      <a href='/'>Book an Appoiment</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>MyEA Bag Personalization</a>
                                    </li>
                                  </ul>
                                </div>
                            </li>
                          </ul>
                        </div>
                      </li> 

                      <li className='subtitle_logo heightImg-1_6'>
                        <a className='a-logo menu-item-link' href='/' ><img src={ea7} alt="ea7"/></a>
                        <div className='subtitle_logo-container-gArmaniF ea7'>
                          <ul className='ul-itemF'>
                            <li className='subtitle_logo-listF'>
                              <a className='a-item' href='/' >WOMAN</a>
                                <div className='gender-container-woman'>
                                  <ul className='ul-gender'>
                                    <li className='ul-gender-list'>
                                      <a href='/'>New Arrivals</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Clothing</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Accessories</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Shoes</a>
                                    </li>
                                  </ul>
                                </div>
                            </li>

                            <li className='subtitle_logo-listF'>
                              <a className='a-item' href='/' >MAN</a>
                                <div className='gender-container-woman'>
                                  <ul className='ul-gender'>
                                    <li className='ul-gender-list'>
                                      <a href='/'>New Arrivals</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Clothing</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Accessories</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Shoes</a>
                                    </li>
                                  </ul>
                                </div>
                            </li>

                            <li className='subtitle_logo-listF'>
                              <a className='a-item' href='/' >KIDS</a>
                                <div className='gender-container-woman'>
                                  <ul className='ul-gender'>
                                    <li className='ul-gender-list'>
                                      <a href='/'>Boy 4-16 years</a>
                                    </li>  
                                    <li className='ul-gender-list'>
                                      <a href='/'>Girl 4-16 years</a>
                                    </li>
                                  </ul>
                                </div>
                            </li>

                          </ul>
                        </div>
                      </li>

                      <li className='subtitle_logo heightImg-1_8'>
                        <a className='a-logo menu-item-link' href='/' ><img src={ax} alt="ax"/></a>
                      </li> 

                    </ul> 
                  </div>
                  <div className='bg'></div>
                </li>

                <li className='subtitle'>
                  <a className='a-name menu-item-link' href='/' >LIFESTYLE</a>
                  <div className='subtitle-container cont-lifeStyle'>
                    <ul className='ul-logo wrap'>
                      <li className='subtitle_logo heightImg-1_3'>
                        <a className='a-logo menu-item-link' href='/' ><img src={acasa} alt="acasa"/></a>                 
                      </li>
                      <li className='subtitle_logo heightImg-1_8 '>
                        <a className='a-logo menu-item-link' href='/' ><img src={adolci} alt="adolci"/></a>                   
                      </li>
                      <li className='subtitle_logo heightImg-1_8'>
                        <a className='a-logo menu-item-link' href='/' ><img src={afiori} alt="afiori"/></a>                 
                      </li>
                      <li className='subtitle_logo heightImg-1_6 m-01'>
                        <a className='a-logo menu-item-link' href='/' ><img src={asilos} alt="asilos"/></a>                   
                      </li>
                      <li className='subtitle_logo heightImg-1_8 m-02'>
                        <a className='a-logo menu-item-link' href='/' ><img src={abeauty} alt="abeauty"/></a>                 
                      </li>
                      <li className='subtitle_logo heightImg-2_5'>
                        <a className='a-logo menu-item-link' href='/' ><img src={ah_r} alt="ah_r"/></a>                   
                      </li>
                      <li className='subtitle_logo heightImg-1_8 m-01'>
                        <a className='a-logo menu-item-link' href='/' ><img src={asilos} alt="aclubs"/></a>                 
                      </li>
                      <li className='subtitle_logo heightImg-1_3 m-01'>
                        <a className='a-logo menu-item-link' href='/' ><img src={ar} alt="ar"/></a>                   
                      </li>
                    </ul>
                  </div>
                  <div className='bg'></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
  )
}

export default NavHeader