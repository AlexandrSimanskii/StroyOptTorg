import { LuMenu } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/redux_hooks/reduxHook";
import { logOutSlise } from "../../store/users/userSlise";

import { useState } from "react";
import ConfirmLogOut from "../ConfirmLogOut/ConfirmLogOut";

const Header = () => {
  const [logoutVisible, setLogoutVisible] = useState(false);
  const dispath = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user._id) {
      navigate("/signup");
    } else {
      setLogoutVisible(true);
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-top">
            <div className="header-menu">
              <LuMenu className="header-menu__icons" />
              <p className="header-menu__text">Меню</p>
            </div>
            <nav className="header-nav">
              <ul className="header-nav-list">
                <li className="header-nav-list__element">
                  <Link to={"/personroom"}>Личный кабинет</Link>
                </li>
                <li className="header-nav-list__element">
                  <Link to={"/about"}>О компании</Link>
                </li>

                <li className="header-nav-list__element">
                  <Link to={"/payment"}>Оплата</Link>
                </li>
                <li className="header-nav-list__element">
                  <Link to={"/delivery"}>Доставка</Link>
                </li>
                <li className="header-nav-list__element">
                  <Link to={"/return"}>Возврат</Link>
                </li>
                <li className="header-nav-list__element">
                  <Link to={"/reviews"}>Отзывы</Link>
                </li>
                <li className="header-nav-list__element">
                  <Link to={"/answear"}>Вопрос-ответ</Link>
                </li>

                <li className="header-nav-list__element">
                  <Link to={"/contacts"}>Контакты</Link>
                </li>
              </ul>
            </nav>
            <div className="header-inform">
              <p className="header-inform__time">Ежедневно, с 8:00 до 18:00</p>
              <p className="header-inform__number">8 800 444 00 65</p>
              <button className="header-inform__button">заказать звонок</button>
            </div>
          </div>

          <div className="header-bottom">
            <Link to={"/"}>
              <img
                className="header-bottom__logo"
                src="/public/images/image/logo 1.svg "
                alt="logo"
              />
            </Link>

            <div className="header-bottom__group">
              <Link to={"/catalog"}>
                <button className=" header-bottom__btn ">
                  <img src="../../public/images/icons/menu.svg" alt="" />{" "}
                  Каталог
                </button>{" "}
              </Link>
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
              <li onClick={handleClick} className="header-bottom__list-element">
                <img
                  className="header-bottom__list-img"
                  src="/images/icons/user.svg"
                  alt="search"
                />
                <p className="header-bottom__list-text">
                  {user._id ? user.username : "Войти"}
                </p>
              </li>

              <li className="header-bottom__list-element">
                <Link to={"/favorite"} className="header-bottom__list-element">
                  <div className="header-img__box">
                    <img
                      className="header-bottom__list-img"
                      src="/images/icons/heart.svg"
                      alt="search"
                    />{" "}
                    {user.favorite.length > 0 && (
                      <span className="quantity">{user?.favorite.length}</span>
                    )}
                  </div>
                  <p className="header-bottom__list-text">Избранное</p>
                </Link>
              </li>
              <li className="header-bottom__list-element">
                <Link className="header-bottom__list-element" to={"/cart"}>
                  <div className="header-img__box">
                    <img
                      className="header-bottom__list-img"
                      src="/images/icons/cart.svg"
                      alt="search"
                    />
                    {user.cart.length > 0 && (
                      <span className="quantity">{user?.cart.length}</span>
                    )}
                  </div>

                  <p className="header-bottom__list-text">Корзина</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {user._id && logoutVisible && (
        <ConfirmLogOut setLogoutVisible={setLogoutVisible} />
      )}
    </>
  );
};

export default Header;
Header;
