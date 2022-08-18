import React, {useState} from 'react';

import slideMenu from '../../assets/logos/ico_menu_hub_dark.svg';
import SearchIcon from '@mui/icons-material/Search';
import armani from '../../assets/logos/armani.svg';
import { BiShoppingBag, BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiUser } from "react-icons/fi";

import './navbar.css';
import { Drawer } from '@mui/material';
import NavMenu from '../NavMenu/NavMenu';
import MenuHamb from '../MenuHamb/MenuHamb';
import Cart from '../Cart/Cart';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuHamb, setMenuHamb] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [navFixed, setNavFixed] = useState(false); 
  const fixNav = () => {
    if(window.scrollY >=250){
      setNavFixed(true)
    } else {
      setNavFixed(false)
    }
  }
  window.addEventListener("scroll", fixNav)
  var sWidth = window.innerWidth;

  const handleCloseMenu = () => setMenuOpen(false);
  const handleCloseMenuHamb = () => setMenuHamb(false);

  const handleOpenCart = () => setCartOpen(true);
  const handleCloseCart = () => setCartOpen(false);

  return (
    <nav className={(navFixed && sWidth<1024)?'app__nav nav-fix':'app__nav'}>
        <div className= {(navFixed && sWidth<1024)?'armani-fix': 'hidden'}>
                <img src={armani} alt="armani-dark" />
        </div>

        <div className={(navFixed && sWidth<1024)?'hidden':'app__nav-logos'}>
            <div className='app__nav-logos_menu'>
                <button className='btn-menu' onClick={()=>setMenuOpen(true)}>
                  <img src={slideMenu} alt="slideMenu" />
                </button>               
            </div>
            <Drawer anchor='left' open={menuOpen} onClose={handleCloseMenu}>
              <NavMenu closeMenu={handleCloseMenu} />
            </Drawer>
            <div className='app__nav-logos_name'>
                <a href='/'>ARMANI.COM</a>
            </div>
        </div>

        <ul className='app__nav-links'>
          <li className='app__nav-links_my-account_li'>
            <div className='app__nav-links_my-account'>
              <span className={navFixed?'hidden':'my-account'}>MY ACCOUNT</span>
              <span className={navFixed?'account-fix':'hidden'}>
                <FiUser className='svg-nav' />
              </span>
              <div className='app__nav-links_my-account_login' style={navFixed?{top: '65px', right: '0'}:{top: '80px'}}>
                <div className='app__nav-links_my-account_login-grid'>
                  <span>REGISTER USER</span>
                  <p className='txt-smaller'>Log in to go My Account</p>
                  <a className='btn-primary' href='/'>Log in</a>
                  <span className='new-user'>NEW USER</span>
                  <p className='txt-smaller'>Register now and make the most of My Account</p>
                  <a className='btn-secondary' href='/'>Register</a>
                </div>
              </div>
            </div>
          </li>
          <li className='app__nav-links_contact-us_li'>
            <div className='app__nav-links_contact-us'>
              <a href='/'>CONTACT US</a>
              <div className='app__nav-links_contact-us_layer'>
                <div className='app__nav-links_contact-us_layer-content'>
                  <div className='app__nav-links_contact-us_layer-content_section'>
                    <span className='txt-small txt-center'>May we help you?</span>
                    <p className='txt-center'>We are available Monday to Friday, from 9 am to 11 pm EST, excluding holidays.</p>
                  </div>
                  <div className='app__nav-links_contact-us_layer-content_section'>
                    <span className='txt-small ff-bold'>Online Purchases</span>
                    <div className='app__nav-links_contact-us_layer-content_item' >
                      <span className='svg-item'><BiPhone /> Call us</span>
                      <a href='/'>18554634989</a>
                    </div>
                    <div className='app__nav-links_contact-us_layer-content_item'>
                      <span className='svg-item'><AiOutlineMail /> Write us</span>
                      <a href='/'>Send your request</a>
                    </div>
                  </div>
                  <div className='app__nav-links_contact-us_layer-content_section'>
                    <span className='txt-small ff-bold'>Retail Orders</span>
                    <div className='app__nav-links_contact-us_layer-content_item'>
                      <span className='svg-item'><AiOutlineMail /> Write us</span>
                      <a href='/'>Send your request</a>
                    </div>
                  </div>
                  <div className='app__nav-links_contact-us_layer-content_section'>
                    <span className='txt-small txt-center ff-bold'>Contact us</span>
                    <div className='txt-center'>
                      <a href='/'>Find your area of interest</a>  to receive assistance for your purchases or to find the information you are looking for.
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </li>
          <li className='app__nav-links_store_li'><a href='/'>STORE LOCATOR</a></li>
          <li className={(navFixed && sWidth>1024)?' li-search search-fix':'li-search'}>
            <a href='/'><SearchIcon className='svg-nav' /></a>
          </li>
          <li className={(navFixed && sWidth>1024)?'cart-fix li-cart':'li-cart'}>
            <BiShoppingBag className='svg-nav' onClick={handleOpenCart}/>
          </li>
            <Drawer anchor={sWidth>1024?'right':'top'} open={cartOpen} onClose={handleCloseCart}>
              <Cart closeMenuCart={handleCloseCart}/>
            </Drawer>

          <li className='app__nav-links_ham_li'>
            <GiHamburgerMenu className='svg-nav' onClick={()=>setMenuHamb(true)} />
          </li>
            <Drawer anchor='right' open={menuHamb} onClose={handleCloseMenuHamb}>
              <MenuHamb closeMenuHamb={handleCloseMenuHamb} cartOpen={cartOpen} handleOpenCart={handleOpenCart} sWidth={sWidth} handleCloseCart={handleCloseCart}/>
            </Drawer>
        </ul>
    </nav>
  )
}

export default Navbar

