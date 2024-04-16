import { HiOutlineShoppingCart } from "react-icons/hi2";

import { IoMdHeartEmpty } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";
import { Link } from "react-router-dom";

interface CardProductProps {
  product: {
    name: string;
    image: string;
    regularPrice: number;
    discountPrice: number;
    sale: number;
    article: string;
    label?: string;
    _id: string;
    isLike: boolean;
    isComparison: boolean;
  };
}

const CardProduct = ({ product }: CardProductProps) => {
  return (
    <div className="card">
      <Link to={`/product/${product._id}`}>
        <img className="card__img" src={product.image} alt={product.name} />
      </Link>

      <p className="card__article">Брэнд {product.label}</p>
      <h3 className="card__title">{product.name}</h3>
      {!product.sale ? (
        <p className="card-params">{product.regularPrice} ₽</p>
      ) : (
        <p className="card-params">
          <span className="card-params__old-price">
            {product.regularPrice} ₽
          </span>
          {product.discountPrice}₽{" "}
          <span className="card-params__discount-quantity">
            {product.sale}%
          </span>
        </p>
      )}
      <div className="card-bottom">
        <button className="card-bottom__btn">
          <HiOutlineShoppingCart /> Купить
        </button>
        <div className="card-bottom__addition">
          <IoMdHeartEmpty className="card-bottom__addition-element" />
          <FiBarChart2 className="card-bottom__addition-element" />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
