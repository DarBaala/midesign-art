import React, { useState } from "react";
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
  const [modal, setModal] = useState(false);
  const [imgLink, setImgLink] = useState("");

  const slides = [
    {
      img: review,
    },
    {
      img: review_2,
    },
    {
      img: review_3,
    },
    {
      img: review_4,
    },
    {
      img: review_5,
    },
    {
      img: review_6,
    },
    {
      img: review_7,
    },
    {
      img: review_8,
    },
    {
      img: review_9,
    },
  ];

  const openLink = (slides) => {
    console.log(slides);
    setImgLink(slides.img);
    setModal(true);
  };

  return (
    <>
      <div
        style={
          modal
            ? { opacity: 1, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
        className="reviews__modal"
      >
        {imgLink && (
          <div className="reviews__modal-wrapper">
            {/* <svg
              onClick={() => setModal(!modal)}
              viewBox="0 0 32 32"
              stroke="#852e3b"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="cross">
                <line class="cls-1" x1="7" x2="25" y1="7" y2="25" />
                <line class="cls-1" x1="7" x2="25" y1="25" y2="7" />
              </g>
            </svg> */}
            <svg onClick={() => setModal(!modal)} viewBox="0 0 512 512">
              <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
            </svg>
            <Image className="reviews__modal-img" src={imgLink} alt="review" />
          </div>
        )}
      </div>
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
            spaceBetween={20}
            effect="Cube"
            pagination={{
              clickable: true,
              bulletClass: "reviews__bullet",
              bulletActiveClass: "reviews__bullet-active",
            }}
          >
            {slides.map((slides, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    onClick={() => openLink(slides)}
                    className="reviews__item"
                  >
                    <Image
                      className="reviews__img"
                      src={slides.img}
                      alt="review"
                      width={400}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
