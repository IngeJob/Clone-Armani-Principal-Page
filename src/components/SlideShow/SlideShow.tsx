import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ban1 from '../../assets/banner/ban1.png';
import ban2 from '../../assets/banner/ban2.png';
import ban3 from '../../assets/banner/ban3.png';
import ban4 from '../../assets/banner/ban4.png';
import ban5 from '../../assets/banner/ban5.png';
import ban6 from '../../assets/banner/ban6.png';
import ban7 from '../../assets/banner/ban7.png';
import ban8 from '../../assets/banner/ban8.png';
import ban9 from '../../assets/banner/ban9.png';
import hover from '../../assets/banner/hover.png'
import './slideShow.css';

const SlideShow = () => {
  return (
      <div className="swiper-container">
        <Swiper
          slidesPerView={5}
          slidesPerGroup={1}
          spaceBetween={5}
          loop={false}
          breakpoints={{
            787: {
              slidesPerView: 6,
              slidesPerGroup: 3,
            },
          }}
          loopFillGroupWithBlank={false}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href="/">
              <img className="ban" src={ban1} alt="ban1" />
              <img src={hover} alt="hover" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img className="ban" src={ban2} alt="ban2" />
              <img src={hover} alt="hover" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img className="ban" src={ban3} alt="ban3" />
              <img src={hover} alt="hover" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img className="ban" src={ban4} alt="ban4" />
              <img src={hover} alt="hover" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img className="ban" src={ban5} alt="ban5" />
              <img src={hover} alt="hover" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img className="ban" src={ban6} alt="ban6" />
              <img src={hover} alt="hover" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img className="ban" src={ban7} alt="ban7" />
              <img src={hover} alt="hover" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img className="ban" src={ban8} alt="ban8" />
              <img src={hover} alt="hover" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img className="ban" src={ban9} alt="ban9" />
              <img src={hover} alt="hover" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>    
  )
}

export default SlideShow