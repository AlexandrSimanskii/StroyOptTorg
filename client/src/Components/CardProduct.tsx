import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdCurrencyRuble } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";

interface Product {
  name: string;
  image: string;
  regularPrice: number;
  discountPrice: number;
  sale: number;
  article: string;
  _id: string;
  isLike: boolean;
  isComparison: boolean;
}

const CardProduct: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="card">
      <img className="card__img" src={product.image} alt={product.name} />
      <p className="card__article">Артикул {product.article}</p>
      <h3 className="card__title">{product.name}</h3>
      {!product.sale ? (
        <p className="card-params">
          {product.regularPrice}
          <MdCurrencyRuble className="card-params-rub" />
        </p>
      ) : (
        <p className="card-params">
          <span className="card-params__old-price">
            {product.regularPrice}
            <MdCurrencyRuble className="card-params-rub" />
          </span>
          {product.discountPrice}
          <MdCurrencyRuble className="card-params-rub" />{" "}
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
