import InfoBlock from "../Components/InfoBlock";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/redux_hooks/reduxHook";
import { useEffect, useState } from "react";
import { ProductType } from "../types/types";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState<ProductType>();
  console.log(params);

  const getProduct = async () => {
    try {
      const res = await fetch(`/api/products/get/${params.id}`);
      const data = await res.json();

      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(product);

  return (
    <div className="product">
      <div className="container">
        <div className="product-inner">
          <section className="product-inform">
            <div className="product-slider"></div>
            <img src={product?.image} alt="" />
            <div className="product-box">
              <dl className="product-info">
                {/* {product?.characteristics
                })} */}
              </dl>
              <InfoBlock />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Product;
