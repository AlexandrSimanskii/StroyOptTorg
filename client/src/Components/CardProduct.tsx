import { HiOutlineShoppingCart } from "react-icons/hi2";

interface Product {
  image: string;
  title: string;
  regularPrice: number;
  discountPrice: number;
  sale: number;
  article: string;
  isLike: boolean;
  isComparison: boolean;
}

const CardProduct = (product: Product) => {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <p>{product.article}</p>
      <h3>{product.title}</h3>
      <p>
        <span>{product.regularPrice}</span>
        {product.discountPrice}
        <span>{product.sale}</span>
      </p>
      <button>
        <HiOutlineShoppingCart /> Купить
      </button>
    </div>
  );
};

export default CardProduct;
