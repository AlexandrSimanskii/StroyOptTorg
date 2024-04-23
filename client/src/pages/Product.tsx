import InfoBlock from "../Components/InfoBlock";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../store/redux_hooks/reduxHook";
import { useEffect, useState } from "react";
import { ProductType } from "../types/types";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";
import ProductSlider from "../Components/Product/ProductSlider";
import ProductTabs from "../Components/Product/ProductTabs";
import SimilarProductSlider from "../Components/Product/SimilarProductSlider";

const Product = () => {
  const [count, setCount] = useState(1);
  const params = useParams();
  const [product, setProduct] = useState<ProductType>();
  const [similarProduct, setSimilarProduct] = useState<ProductType[]>([]);

  const productImages = product?.images;

  const getSimilarProduct = async (el: string) => {
    try {
      const res = await fetch(`/api/products/get?type=${el}`);
      const data = await res.json();
      setSimilarProduct(data.products);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getProduct = async () => {
    try {
      const res = await fetch(`/api/products/get/${params.id}`);
      const data = await res.json();
      setProduct(data);

      getSimilarProduct(data.type);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [params]);

  return (
    <div className="product">
      <div className="container">
        {product && (
          <div className="product-inner">
            <section className="product-inform">
              <ProductSlider productImages={productImages} />
              <div className="product-params-block">
                <dl className="product-params">
                  {Object.entries(product.characteristics)
                    .slice(0, 6)
                    .map(([key, value]) => (
                      <div key={key} className="product-params__group">
                        <dt>{key}</dt>
                        <div className="product-params__doted"></div>
                        <dd className="product-params__dd">{value}</dd>
                      </div>
                    ))}
                </dl>
               
                  <a className="product-params__btn"  href="#tabs">Показать больше</a>
                

                <InfoBlock />
              </div>
              <div className="add-cart">
                <p>Брэнд:{product.label}</p>
                {!product.sale ? (
                  <p className="card-params">{product.regularPrice} ₽</p>
                ) : (
                  <div className="add-cart-box">
                    <p className="add-cart__discount">
                      {product.discountPrice}₽{" "}
                    </p>
                    <span className="add-cart__regular">
                      {product.regularPrice} ₽
                    </span>
                    <span className="add-cart__sale">-{product.sale}%</span>
                  </div>
                )}

                <div className="count-group">
                  <p className="count-group__brand">Количество</p>
                  <div className="count-group-box">
                    <button className="count-group__btn">-</button>
                    <p>{count}</p>
                    <button className="count-group__btn">+</button>
                  </div>
                </div>

                <button className="add-cart__added">Добавить в корзину </button>
                <button className="add-cart__pay">Купить в один клик</button>

                <div className="product-box">
                  <div className="add-cart-bottom">
                    <IoMdHeartEmpty className="add-cart-bottom__icon" />В
                    избранное
                  </div>
                  <div className="add-cart-bottom">
                    <FiBarChart2 className="add-cart-bottom__icon" /> Сравнить
                  </div>
                </div>
              </div>
            </section>
            <ProductTabs  product={product} />
            <SimilarProductSlider similarProduct={similarProduct} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
