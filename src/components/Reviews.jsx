import React from "react";
import Image from "next/image";

import { Pagination, Zoom, EffectFade, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/zoom";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";

import heart from "../assets/img/heart-icon.svg";
import review from "../assets/img/reviews-1.png";
import review_2 from "../assets/img/reviews-2.png";
import review_3 from "../assets/img/reviews-3.png";
import review_4 from "../assets/img/reviews-4.png";
import review_5 from "../assets/img/reviews-5.png";
import review_6 from "../assets/img/reviews-6.png";
import review_7 from "../assets/img/reviews-7.png";
import review_8 from "../assets/img/reviews-8.png";
import review_9 from "../assets/img/reviews-9.png";

export default function Reviews() {
  console.log(Zoom);
  return (
    <div className="reviews container">
      <h2>
        Отзывы
        <Image src={heart} alt="heart" width={35} />
      </h2>
      <div className="reviews__wrapper">
        <Swiper
          zoom={true}
          modules={[Zoom, Pagination, EffectFade, Autoplay]}
          slidesPerView={2}
          spaceBetween={40}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="Cube"
          pagination={{
            clickable: true,
            bulletClass: "reviews__bullet",
            bulletActiveClass: "reviews__bullet-active",
          }}
        >
          <SwiperSlide>
            <div className="reviews__item">
              <Image
                className="reviews__img"
                src={review}
                alt="review"
                width={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews__item">
              <Image
                className="reviews__img"
                src={review_2}
                alt="review"
                width={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews__item">
              <Image
                className="reviews__img"
                src={review_3}
                alt="review"
                width={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews__item">
              <Image
                className="reviews__img"
                src={review_4}
                alt="review"
                width={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews__item">
              <Image
                className="reviews__img"
                src={review_5}
                alt="review"
                width={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews__item">
              <Image
                className="reviews__img"
                src={review_6}
                alt="review"
                width={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews__item">
              <Image
                className="reviews__img"
                src={review_7}
                alt="review"
                width={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews__item">
              <Image
                className="reviews__img"
                src={review_8}
                alt="review"
                width={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews__item">
              <Image
                className="reviews__img"
                src={review_9}
                alt="review"
                width={400}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
