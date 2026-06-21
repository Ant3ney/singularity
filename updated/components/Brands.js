import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Brands = () => {

    const params = {
        modules: [Autoplay],
        slidesPerView : 5,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            1499:{
                slidesPerView : 5
            },

            991:{
                slidesPerView : 3
            },

            767:{
                slidesPerView : 3

            },

            575:{
                slidesPerView : 2
            }
        }
    }

    return (
        <div className="brand-one">
            <div className="container">
                <div className="brand-one__carousel owl-carousel owl-theme">

                    <Swiper {...params}>
                        <SwiperSlide className="item">
                            <img src="/assets/images/brand_01.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <img src="/assets/images/brand_01.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <img src="/assets/images/brand_01.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <img src="/assets/images/brand_01.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <img src="/assets/images/brand_01.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <img src="/assets/images/brand_01.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <img src="/assets/images/brand_01.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <img src="/assets/images/brand_01.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <img src="/assets/images/brand_01.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <img src="/assets/images/brand_01.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <img src="/assets/images/brand_01.webp" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <img src="/assets/images/brand_01.webp" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default Brands;
