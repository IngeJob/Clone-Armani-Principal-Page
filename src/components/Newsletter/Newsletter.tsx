import React from 'react';
import './newsletter.css';

const Newsletter = () => {
  return (
    <div className='footer-newsletter'>
        <span className='footer-newsletter_title'>Subscribe to our Newsletter</span>
        <form className='footer-newsletter_form' action="">
            <div>
                <input 
                    className='form-input' 
                    type="email" 
                    placeholder='Email Address' 
                />
            </div>
            <div>
                <button className='form-submit' type='submit'>Subscribe</button>
            </div>
        </form>
    </div>
  )
}

export default Newsletter