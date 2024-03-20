import { HiOutlineShoppingCart } from "react-icons/hi2";

interface Product {
  name: string;
  image: string;
  regularPrice: number;
  discountPrice: number;
  sale: number;
  article: string;
  isLike: boolean;
  isComparison: boolean;
}

const CardProduct: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="card">
      <img className="card__img" src={product.image} alt={product.name} />
      <p className="card__article">Артикул {product.article}</p>
      <h3 className="card__title">{product.name}</h3>
      <p className="card-params">
        <span className="card-params__price">{product.regularPrice}</span>
        {product?.discountPrice && product.discountPrice}
        <span>{product.sale && product.sale}</span>
      </p>
      <button>
        <HiOutlineShoppingCart /> Купить
      </button>
    </div>
  );
};

export default CardProduct;
