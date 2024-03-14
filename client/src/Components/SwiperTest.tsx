import { useEffect } from "react";
import Swiper from "swiper/bundle";

import "swiper/css/bundle";

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const SwiperTest = () => {


  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,

      pagination: {
        el: ".swiper-pagination",
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

        scrollbar: {
          el: ".swiper-scrollbar",
        },
    });
  }, []);

  return (
    <>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide swiper-slide1">Slide 1</div>
          <div className="swiper-slide swiper-slide2">Slide 2</div>
          <div className="swiper-slide swiper-slide3">Slide 3</div>
          ...
        </div>

        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-scrollbar"></div>
      </div>
    </>
  );
};

export default SwiperTest;
