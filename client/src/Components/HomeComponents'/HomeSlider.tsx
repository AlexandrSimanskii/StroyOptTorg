import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HomeSlider = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,

      pagination: {
        el: ".swiper-pagination",
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="home-banner">
      <div className="swiper">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide "
            style={{
              backgroundImage: `URL("https://s3-alpha-sig.figma.com/img/fec4/beb8/65de6f4f3fe68f8255c19ee531b468d0?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hve4wf5-MqZvuyD6rWzttbAKJWsEsMGck65LrKSqyAp-17WsDR90ub1jsSbCWWLj~3RSxP42N1of0yKpsiE3vy5qvSqRYPdS0Mr4ft-RoQ-KQ48Y990jiwfKpPnF4zvCrCWuzMHjy9MvugcZp4ZJaMPk4cenEpM-PEU7Nx7t42rm4QAgn9db0TFQLIP4OoojolTnWGgHVZ-D4GNcIp~ZsxZ5vD0WJoitjBz9LocPpUf5bgX633epagiE3xuOSA22-QgTfE2zfwT85uLMfTxSlcgBZ4OSteEkWdl0s5-nDk1OopuD08x5Q2q1X~pj0W8E3jRkInV12k6wp3W~cNJrgQ__")`,
            }}
          >
            <div className="banner-inform">
              <h2 className="banner-inform__title">
                Электроинструмент для любых нужд
              </h2>
              <p className="banner-inform__description">
                У нас обновился ассортимент сантехники, мебели для ванной
                комнаты,а так же других сопутствующих товаров.
              </p>
              <button className="banner-inform__btn">
                перейти к товарам <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          </div>

          <div
            className="swiper-slide "
            style={{
              backgroundImage: `URL("https://s3-alpha-sig.figma.com/img/9161/b297/5292207e5c8db76d7aa8040f19c0b492?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5-P4FES-Q4Z0-2HUlQRfDj15inKZGIJw-6Hw6fnxtuwKmkZ-y8Fq1FQ0qXj-Fnuh-34eCexFIvt6VdEIwRVZvmD7Sirgr4DzHpOOHqh0zdvhDdk4qOqKEOKpIFoSZsIGWQX-fVEA8-QOqeU5T0S0yo4m92Yvl2wVLFuO0FH8mUgSnwbr7-HhsHfFugjot1lLBn3Q-eGcHTxpBETjo7nc43f3W67PxypV7reiFgcgUPsvFgb74EMyHTvKpY7tvdV5V2cU47JueaStTFpJfgIxw8yEeukisTlw2DJAIRcquljmO7wQLFjS9N02b-w510snwGj5xb9S7PsOG6hTtmMLg__")`,
            }}
          >
            <div className="banner-inform">
              <h2 className="banner-inform__title">
                Электроинструмент для любых нужд
              </h2>
              <p className="banner-inform__description">
                У нас обновился ассортимент сантехники, мебели для ванной
                комнаты,а так же других сопутствующих товаров.
              </p>
              <button className="banner-inform__btn">
                перейти к товарам <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          </div>
          <div
            className="swiper-slide "
            style={{
              backgroundImage: `URL("https://s3-alpha-sig.figma.com/img/fec4/beb8/65de6f4f3fe68f8255c19ee531b468d0?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hve4wf5-MqZvuyD6rWzttbAKJWsEsMGck65LrKSqyAp-17WsDR90ub1jsSbCWWLj~3RSxP42N1of0yKpsiE3vy5qvSqRYPdS0Mr4ft-RoQ-KQ48Y990jiwfKpPnF4zvCrCWuzMHjy9MvugcZp4ZJaMPk4cenEpM-PEU7Nx7t42rm4QAgn9db0TFQLIP4OoojolTnWGgHVZ-D4GNcIp~ZsxZ5vD0WJoitjBz9LocPpUf5bgX633epagiE3xuOSA22-QgTfE2zfwT85uLMfTxSlcgBZ4OSteEkWdl0s5-nDk1OopuD08x5Q2q1X~pj0W8E3jRkInV12k6wp3W~cNJrgQ__")`,
            }}
          >
            <div className="banner-inform">
              <h2 className="banner-inform__title">
                Электроинструмент для любых нужд
              </h2>
              <p className="banner-inform__description">
                У нас обновился ассортимент сантехники, мебели для ванной
                комнаты,а так же других сопутствующих товаров.
              </p>
              <button className="banner-inform__btn">
                перейти к товарам <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          </div>
          <div
            className="swiper-slide "
            style={{
              backgroundImage: `URL("https://s3-alpha-sig.figma.com/img/9161/b297/5292207e5c8db76d7aa8040f19c0b492?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5-P4FES-Q4Z0-2HUlQRfDj15inKZGIJw-6Hw6fnxtuwKmkZ-y8Fq1FQ0qXj-Fnuh-34eCexFIvt6VdEIwRVZvmD7Sirgr4DzHpOOHqh0zdvhDdk4qOqKEOKpIFoSZsIGWQX-fVEA8-QOqeU5T0S0yo4m92Yvl2wVLFuO0FH8mUgSnwbr7-HhsHfFugjot1lLBn3Q-eGcHTxpBETjo7nc43f3W67PxypV7reiFgcgUPsvFgb74EMyHTvKpY7tvdV5V2cU47JueaStTFpJfgIxw8yEeukisTlw2DJAIRcquljmO7wQLFjS9N02b-w510snwGj5xb9S7PsOG6hTtmMLg__")`,
            }}
          >
            {" "}
            <div className="banner-inform">
              <h2 className="banner-inform__title">
                Электроинструмент для любых нужд
              </h2>
              <p className="banner-inform__description">
                У нас обновился ассортимент сантехники, мебели для ванной
                комнаты,а так же других сопутствующих товаров.
              </p>
              <button className="banner-inform__btn">
                перейти к товарам <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="swiper-pagination"></div>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default HomeSlider;
