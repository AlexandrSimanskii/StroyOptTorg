import { useEffect, useState } from "react";
import { useAppSelector } from "../store/redux_hooks/reduxHook";
import { ProductType } from "../types/types";

const Cart = () => {
  const user = useAppSelector((state) => state.user);
  const [cartProducts, setCartProducts] = useState<ProductType[]>();

  const getCartProduct = async () => {
    const fetchProd = user.cart.map((item) => item._id);

    try {
      const res = await fetch("/api/products/get/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fetchProd),
      });

      const data = await res.json();
      if (data.success === false) {
        return console.log(data.message);
      }
      setCartProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartProduct();
  }, []);

  return (
    <div className="cart">
      <div className="container">
        <h2>Корзина товаров</h2>
        <div className="cart-inner">
          {/* <table>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {" "}
              <th scope="row">
                <img src="" alt="" />
              </th>
              <td>HTML tables</td>
              <td>22</td>
            </tbody>
          </table> */}
          <div className="cart-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
