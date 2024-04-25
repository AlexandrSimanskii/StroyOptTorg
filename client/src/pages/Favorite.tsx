import { useEffect, useState } from "react";
import { ProductType } from "../types/types";
import { useAppSelector } from "../store/redux_hooks/reduxHook";
import ProductCard from "../Components/CardProduct/ProductCard";
import { getCorrectProd } from "../utils/getCorrectProduct";

const Favorite = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const user = useAppSelector((state) => state.user);
  const getFavoriteProducts = async () => {
    try {
      const res = await fetch(`api/products/favorite/get`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user.favorite),
      });
      const data = await res.json();
      if (data.success === false) {
        return;
      }
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
const deleteAllFavorites=()=>{
    
}

  useEffect(() => {
    getFavoriteProducts();
  });
  console.log(user);

  return (
    <div className="favorite">
      <div className="container">
        <h2 className="favorite-title">Избранные товары</h2>
        <div className="favorite-inner">
          <div className="favorite-bar">
            <p className="favorite-bar__title">
              Вам вашем списке {products.length ? products.length : "нет"}{" "}
              {getCorrectProd(products.length)}
            </p>
            <ol className="favorite-bar__list">
              {" "}
              {products.map((item) => (
                <li>{item.name}</li>
              ))}
            </ol>

            <button className="favorite-btn">Добавить все в корзину</button>
            <button onClick={deleteAllFavorites} className="favorite-btn">Отчистить весь список</button>
          </div>
          <div className="favorite-cards">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
