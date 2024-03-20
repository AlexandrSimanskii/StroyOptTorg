import HomeSlider from "../Components/HomeComponents'/HomeSlider";
import { assortiment, catalog } from "../assets/data/homeData";
import AssortimentCard from "../Components/HomeComponents'/AssortimentCard";
import HomeCatalogCard from "../Components/HomeComponents'/HomeCatalogCard.";
import { useEffect, useState } from "react";
import CardProduct from "../Components/CardProduct";
const Home = () => {
  const [bestseller, setBestseller] = useState([]);

  const getBestsellerProduct = async () => {
    try {
      const res = await fetch("http://localhost:3004/api/products/get");
      const data: [] = await res.json();
      setBestseller([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBestsellerProduct();
  }, []);

  return (
    <main>
      <div className="container">
        <HomeSlider />
        <section className="home-catalog">
          <ul className="home-catalog-info">
            <li className="home-catalog-info__item">
              <img src="images/icons/wallet.svg" alt="wallet" /> Оплата любым
              удобным способом
            </li>
            <li className="home-catalog-info__item">
              <img src="/images/icons/choice.svg" alt="choice" /> Большой выбор
              товаров в каталоге
            </li>
            <li className="home-catalog-info__item">
              <img src="/images/icons/box.svg" alt="box" /> Осуществляем быструю
              доставку
            </li>
            <li className="home-catalog-info__item">
              <img src="/images/icons/percent.svg" alt="percent" /> Делаем
              скидки на крупные покупки
            </li>
          </ul>
          <ul className="home-catalog-assortment ">
            {assortiment.map((item, idx) => AssortimentCard(item, idx))}
            <li className="home-catalog-assortment-item">
              <img
                className="home-catalog-assortment-item__img"
                src="/images/image/card_arrow.png"
                alt="image"
              />
              <p>Каталог</p>
            </li>
          </ul>
          <ul className="home-catalog-bottom">
            {catalog.map((item, idx) => HomeCatalogCard(item, idx))}
          </ul>
        </section>
        <section className="home-sale">
          <h2 className="home-sale-title">Хиты продаж</h2>
          <ul className="home-sale-list">
            <li className="home-sale-list__item">Все товары</li>
            <li className="home-sale-list__item">Инструменты</li>
            <li className="home-sale-list__item">Сантехника</li>
            <li className="home-sale-list__item">Для дома</li>
            <li className="home-sale-list__item">Для сада</li>
          </ul>
          <div className="home-sale-products">
            {bestseller.length &&
              bestseller.map((product) => <CardProduct product={product} />)}
          </div>
        </section>
        <section className="home-brand">
          <h2 className="home-brand-title">Популярные брэнды</h2>
          <ul className="home-brand-list">
            <li className="home-brand-list__item">
              <img src="/images/image/keramin.png" alt="keramin" />
            </li>
            <li className="home-brand-list__item">
              <img src="/images/image/ceresit.png" alt="keramin" />
            </li>
            <li className="home-brand-list__item">
              <img src="/images/image/electrolux.png" alt="electrolux" />
            </li>
            <li className="home-brand-list__item">
              <img src="/images/image/bauproffe.png" alt="bauproffe" />
            </li>
            <li className="home-brand-list__item">
              <img src="/images/image/kinplast.png" alt="kinplast" />
            </li>
            <li className="home-brand-list__item">
              <img src="/images/image/oasis.png" alt="oasis" />
            </li>{" "}
            <li className="home-brand-list__item">
              <img src="/images/image/bosch.png" alt="oasis" />
            </li>
          </ul>
        </section>
        <section className="home-better"></section>
        <section className="home-about-store"></section>
      </div>
    </main>
  );
};

export default Home;
