import React from 'react';
import './footerCR.css';

const FooterCR = () => {
  return (
    <div className='footerCR-container'>
        <div className='footerCR__choose-country'>
            <span className='cc-text'>Shop in: United States</span>
            <a className='cc-a' href="/">Change Location / Language</a>
        </div>
        <div className='footerCR__copyright'>
            <span className='cr-text'>Powered by JOB</span>
            <a className='cr-a' href="/">clasic copyright :V</a>
        </div>
    </div>
  )
}

export default FooterCR