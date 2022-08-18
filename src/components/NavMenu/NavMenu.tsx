import React, { SetStateAction } from 'react';
import './navMenu.css';

type CloseMenuProps = {
    closeMenu: () => void;
}

const NavMenu = ( {closeMenu}: CloseMenuProps) => {
  return (
    <div className='navMenu-container'>
        <a className='text' href="/" style={{color: 'var(--color-black)'}}>Armani.com</a>
        <ul className='navMenu-ul'>
            <li className='menu-item'>
                <a href=""><span className='text'>Sale</span></a>
                <ul className='item-ul'>
                    <li>
                        <a href=""><span className='textLogo'>Emporio Armani</span></a>
                    </li>
                    <li>
                        <a href=""><span>EA7</span></a>
                    </li>
                </ul>
            </li>

            <li className='menu-item'>
                <a href=""><span className='text'>Fashion</span></a>
                <ul className='item-ul'>
                    <li>
                        <a href=""><span className='textLogo'>Giorgio Armani</span></a>
                    </li>
                    <li>
                        <a href=""><span className='textLogo'>Emporio Armani</span></a>
                    </li>
                    <li>
                        <a href=""><span className='textLogo'>EA7</span></a>
                    </li>
                    <li>
                        <a href=""><span className='textLogo'>Armani Exchange</span></a>
                    </li>
                </ul>
            </li>

            <li className='menu-item'>
                <a href=""><span className='text'>Lyfestyle</span></a>
                <ul className='item-ul'>
                    <li>
                        <a href=""><span className='textLogo'>Armani/Casa</span></a>
                    </li>
                    <li>
                        <a href=""><span className='textLogo'>Armani Beauty</span></a>
                    </li>
                    <li>
                        <a href=""><span className='textLogo'>Armani/Dolci</span></a>
                    </li>
                    <li>
                        <a href=""><span className='textLogo'>Armani/Fiori</span></a>
                    </li>
                    <li>
                        <a href=""><span className='textLogo'>Armani/Hotels</span></a>
                    </li>
                    <li>
                        <a href=""><span className='textLogo'>Armani/Clubs</span></a>
                    </li>
                    <li>
                        <a href=""><span className='textLogo'>Armani/Restaurants</span></a>
                    </li>
                    <li>
                        <a href=""><span className='textLogo'>Armani/Silos</span></a>
                    </li>
                </ul>
            </li>
        </ul>
        <span className='close-menu'><button onClick={closeMenu} className='btn-menu'>X</button> </span>
    </div>
  )
}

export default NavMenu