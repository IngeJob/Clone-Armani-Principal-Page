import React from 'react';
import SlideShow from '../SlideShow/SlideShow';
import './slotLiveStory.css';

const SlotLiveStory = () => {
  return (
    <div className='slot-container'>
        <div className='slot-title'>
            <p className='p__playfair'>WHAT'S NEW</p>
        </div>
        <div className='slot-slideShow'>
            <SlideShow />
        </div>
    </div>
  )
}

export default SlotLiveStory