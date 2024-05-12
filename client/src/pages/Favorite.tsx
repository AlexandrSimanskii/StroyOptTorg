import { Fragment, useEffect, useState } from "react";
import { ProductType } from "../types/types";

import { useAppDispatch, useAppSelector } from "../store/redux_hooks/reduxHook";
import ProductCard from "../Components/CardProduct/ProductCard";
import { getCorrectProd } from "../utils/getCorrectProduct";
import {
  deleteAllFavoritesSlice,
  addFavoriteInCartSlice,
} from "../store/users/userSlise";
import CardSkeleton from "../Components/CardProduct/CardSkeleton";

const Favorite = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const getFavoriteProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`api/products/favorite/get`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user.favorite),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        return;
      }
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const deleteAllFavorites = async () => {
    try {
      setLoading(true);

      const res = await fetch(`/api/users/${user._id}/favorites/delete`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.success === false) {
        return console.log(data.message);
      }
      setProducts([]);
      dispatch(deleteAllFavoritesSlice());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const addAllFavoriteInCart = async () => {
    const productsIsNotInCart: string[] = user.favorite
      .filter((item) => !user.cart.some((el) => el._id === item))
      .map((item) => item);

    console.log(productsIsNotInCart);

    try {
      const res = await fetch(`api/users/${user._id}/cart/addall`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: productsIsNotInCart }),
      });
      const data = await res.json();
      if (data.success == false) {
        return console.log(data.message);
      }
      dispatch(addFavoriteInCartSlice(productsIsNotInCart));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavoriteProducts();
  }, []);

  return (
    <div className="favorite">
      <div className="container">
        <h2 className="favorite-title">Избранные товары</h2>
        <div className="favorite-inner">
          {user?.favorite.length ? (
            <div className="favorite-bar">
              <p className="favorite-bar__title">
                Вам вашем списке {products.length ? products.length : "нет"}{" "}
                {getCorrectProd(products.length)}
              </p>
              <ol className="favorite-bar__list">
                {" "}
                {products.map((item) => (
                  <li key={item._id}>{item.name}</li>
                ))}
              </ol>

              <button onClick={addAllFavoriteInCart} className="favorite-bar__btn">
                Добавить все в корзину
              </button>
              <button onClick={deleteAllFavorites} className="favorite-bar__btn">
                Отчистить весь список
              </button>
            </div>
          ) : (
            <p>Нет понравившихся продуктов</p>
          )}

          <div className="favorite-cards">
            {loading
              ? user.favorite.map((item, idx) => (
                  <Fragment key={idx}>
                    <CardSkeleton />
                  </Fragment>
                ))
              : products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
