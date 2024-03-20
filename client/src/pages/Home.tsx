import HomeSlider from "../Components/HomeComponents'/HomeSlider";
import { assortiment, catalog } from "../assets/data/homeData";
import AssortimentCard from "../Components/HomeComponents'/AssortimentCard";
import HomeCatalogCard from "../Components/HomeComponents'/HomeCatalogCard.";
const Home = () => {
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
          <div className="home-sale-products"></div>
        </section>
        <section className="home-brand"></section>
        <section className="home-better"></section>
        <section className="home-about-store"></section>
      </div>
    </main>
  );
};

export default Home;
