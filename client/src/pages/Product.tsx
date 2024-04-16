import InfoBlock from "../Components/InfoBlock";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/redux_hooks/reduxHook";

const Product = () => {
  const params = useParams();

  const products = useAppSelector((state) => state.products);



  console.log(products.filter((item)=>item._id===params.id));

  return (
    <div className="product">
      <div className="container">
        <div className="product-inner">
          <section className="product-inform">
            <div className="product-slider"></div>
            <img src={""} alt="" />
            <div className="product-box">
              <dl className="product-info"></dl>
              <InfoBlock />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Product;
