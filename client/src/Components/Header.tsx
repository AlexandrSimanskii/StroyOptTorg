import { LuMenu } from "react-icons/lu";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-top">
          <div className="header-menu">
            <LuMenu className="header-menu__icons" />
            <p className="header-menu__text">Меню</p>
          </div>
          <nav className="header-nav">
            <ul className="header-nav-list">
              <li className="header-nav-list__element">О компании</li>
              <li className="header-nav-list__element">Оплата</li>
              <li className="header-nav-list__element">Доставка</li>
              <li className="header-nav-list__element">Возврат</li>
              <li className="header-nav-list__element">Отзывы</li>
              <li className="header-nav-list__element">Вопрос-ответ</li>
              <li className="header-nav-list__element">Новости</li>
              <li className="header-nav-list__element">Контакты</li>
            </ul>
          </nav>
          <div className="header-inform">
            <p className="header-inform__time">Ежедневно, с 8:00 до 18:00</p>
            <p className="header-inform__number">8 800 444 00 65</p>
            <button className="header-inform__button">заказать звонок</button>
          </div>
        </div>









        <div className="header-bottom">
          <img
            className="header-bottom__logo"
            src="/public/images/image/logo 1.svg "
            alt="logo"
          />
          <div className="header-bottom__group">
            <button className=" header-bottom__btn ">
              <img src="../../public/images/icons/menu.svg" alt="" /> Каталог
            </button>
            <form className="header-search-form">
              <input className="header-search-input" type="text" />
              <img
                className="header-search-img"
                src="../../public/images/icons/search.svg"
                alt=""
              />
            </form>
          </div>

          <ul className="header-bottom__list">
            <li className="header-bottom__list-element  header-bottom__list-element_invisible">
              <img
                className="header-bottom__list-img"
                src="../../public/images/icons/Present.svg"
                alt="search"
              />
              <p className="header-bottom__list-text">Все акции</p>
            </li>
            <li className="header-bottom__list-element">
              <img
                className="header-bottom__list-img"
                src="/images/icons/user.svg"
                alt="search"
              />
              <p className="header-bottom__list-text">Войти</p>
            </li>
            <li className="header-bottom__list-element">
              <img
                className="header-bottom__list-img"
                src="/images/icons/comparison.svg"
                alt="search"
              />
              <p className="header-bottom__list-text">Сравнение</p>
            </li>
            <li className="header-bottom__list-element">
              <img
                className="header-bottom__list-img"
                src="/images/icons/heart.svg"
                alt="search"
              />
              <p className="header-bottom__list-text">Избранное</p>
            </li>
            <li className="header-bottom__list-element">
              <img
                className="header-bottom__list-img"
                src="images/icons/cart.svg"
                alt="search"
              />
              <p className="header-bottom__list-text">Корзина</p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
Header;
