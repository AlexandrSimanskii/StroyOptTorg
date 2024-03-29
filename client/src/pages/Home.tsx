import HomeSlider from "../Components/HomeComponents'/HomeSlider";
import { assortiment, catalog } from "../assets/data/homeData";
import AssortimentCard from "../Components/HomeComponents'/AssortimentCard";
import HomeCatalogCard from "../Components/HomeComponents'/HomeCatalogCard.";
import { MdKeyboardArrowRight } from "react-icons/md";
import HomeHitSaleSlider from "../Components/HomeComponents'/HomeHitSaleSlider";
import CatalogList from "../Components/HomeComponents'/CatalogList";
import { useEffect, useState } from "react";
import { Product } from "../types/interfaces.ts";
import CardProduct from "../Components/CardProduct";

import InfoBlock from "../Components/InfoBlock.tsx";
import NewsComp from "../Components/NewsComp.tsx";

const Home = () => {
  const [betterProducts, setBetterProducts] = useState<Product[]>([]);

  const getBetterProducts = async () => {
    try {
      const res = await fetch("/api/products/get?limit=6&startIndex=12");
      const data = await res.json();
      setBetterProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getNews = async () => {
    try {
      const res = await fetch("/api/news/get?limit=4");
      const data = await res.json();
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBetterProducts();
    getNews();
  }, []);

  return (
    <main>
      <div className="container">
        <HomeSlider />
        <section className="home-catalog">
          <InfoBlock />

          <ul className="home-catalog-assortment ">
            {assortiment.map((item, idx) => AssortimentCard(item, idx))}
            <li className="home-catalog-assortment-item">
              <img src="/images/image/card_arrow.png" alt="image" />
              <p>Каталог</p>
            </li>
          </ul>
          <ul className="home-catalog-bottom">
            {catalog.map((item, idx) => HomeCatalogCard(item, idx))}
          </ul>
        </section>
        <section className="home-sale">
          <h2 className="title">Хиты продаж</h2>
          <CatalogList />
          <HomeHitSaleSlider />
        </section>
        <section className="home-brand">
          <div className="container">
            <h2 className="title">Популярные бренды</h2>
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
          </div>
        </section>
        <section className="home-better">
          <div className="container">
            <h2 className="title">Лучшие предложения</h2>
            <CatalogList />
            <div className="home-better-list">
              {betterProducts?.length &&
                betterProducts.map((product) => (
                  <CardProduct key={product._id} product={product} />
                ))}
            </div>
          </div>
        </section>
        <section className="home-about">
          <div className="container">
            <div className="home-about__inner">
              <div className="home-about__content">
                <h2 className="title">О нашем магазине</h2>
                <p className="home-about__top-text">
                  Цель и главная задача компании создать сервис, который не
                  ограничится продажей строительных и отделочных материалов, а
                  будет решать задачи и трудности,с которыми сталкиваются люди
                  во время ремонта
                </p>
                <dl className="home-description">
                  <div className="home-description-group">
                    <dt className="home-description-term home-description-term-area">
                      17805,3м<sup>2</sup>
                    </dt>
                    <dd className="home-description-definition">
                      торговых и складских <br /> помещений
                    </dd>
                  </div>
                  <div className="home-description-group">
                    <dt className="home-description-term">50 000+</dt>
                    <dd className="home-description-definition">
                      наименований <br /> товара
                    </dd>
                  </div>
                  <div className="home-description-group">
                    <dt className="home-description-term">2 500+</dt>
                    <dd className="home-description-definition">
                      постоянных <br /> клиентов
                    </dd>
                  </div>
                  <div className="home-description-group">
                    <dt className="home-description-term">440</dt>
                    <dd className="home-description-definition">
                      опытных <br /> сотрудников
                    </dd>
                  </div>
                </dl>
                <p className="home-about__bottom-text">
                  Уже второе десятилетия мы готовы воплотить в реальность Вашу
                  мечту о красивом,комфортабельном доме,благоустроенном
                  современом офисебуютной теплой даче, помочь реализовать любые
                  строительные и дизайнерские фантазии и с минимальными
                  затратами времени и денежных средств.
                </p>
                <button className="home-about__btn">
                  Подробнее о компании{" "}
                  <MdKeyboardArrowRight className="home-about__btn-arrow" />
                </button>
              </div>
              <img src="/images/image/home_description.png" alt="rule" />
            </div>
          </div>
        </section>
        <section className="home-news">
          <div className="container">
            <div className="home-news__inner"></div>
            <div className="home-news__group">
              <h2 className="title">Последние новости</h2>
              <button className="home-news__btn">Больше новостей</button>
            </div>
            <NewsComp />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
