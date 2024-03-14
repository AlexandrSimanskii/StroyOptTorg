import { useSwiper } from "swiper/react";

const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <>
    <div className="swiper-button"></div>
      <button onClick={() => swiper.slidePrev()}>
        Slide to the prev slide
      </button>
      <button onClick={() => swiper.slideNext()}>
        Slide to the next slide
      </button>
    </>
  );
};

export default SwiperNavButton;
