import { useEffect, useState } from "react";
import AsideFilter from "../Components/AsideFilter/AsideFilter";
import SortFilter from "../Components/AsideFilter/SortFilter";
import CardProduct from "../Components/CardProduct";
import { Product } from "../types/types";
import Pagination from "../Components/Pagination";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../store/redux_hooks/reduxHook";
import { getProducts } from "../store/products/productsSlice";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [limit, setLimit] = useState(12);
  const [sort, setSort] = useState("createdAt_desc");
  const [price, setPrice] = useState<number[]>([20, 20007]);
  const [category, setCategory] = useState("");
  const [label, setLabel] = useState<string[]>([]);
  const [countPages, setCountPages] = useState(0);

  const urlSearchParams = new URLSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentProduct = useAppSelector((state) => state.products);

  const fetchProducts = async () => {
    try {
      urlSearchParams.set("startIndex", startIndex.toString());
      urlSearchParams.set("price", price.join(","));
      urlSearchParams.set("label", label.join(","));
      urlSearchParams.set("sort", sort.split("_")[0]);
      urlSearchParams.set("order", sort.split("_")[1]);
      urlSearchParams.set("category", category);
      urlSearchParams.set("limit", limit.toString());

      const searchQuery = urlSearchParams.toString();

      const res = await fetch(`/api/products/get?${urlSearchParams}`);
      const data = await res.json();
      dispatch(getProducts(data.products));
      setProducts(data.products);
      setCountPages(data.totalPages);
      navigate(`?${searchQuery}`);
    } catch (error) {
      console.log(error);
    }
  };

  const getMinMaxPrices = async () => {
    try {
      const res = await fetch("/api/products/prices");
      const data = await res.json();
      setPrice(data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getMinMaxPrices();
    fetchProducts();
  }, [startIndex]);

  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog-inner">
          <AsideFilter
            price={price}
            limit={limit}
            sort={sort}
            setPrice={setPrice}
            label={label}
            setLabel={setLabel}
            category={category}
            setCategory={setCategory}
            setProducts={setProducts}
            setCountPages={setCountPages}
          />
          <div className="catalog-content">
            <SortFilter
              startIndex={startIndex}
              price={price}
              label={label}
              limit={limit}
              setLimit={setLimit}
              category={category}
              sort={sort}
              setSort={setSort}
              products={products}
              setProducts={setProducts}
              setCountPages={setCountPages}
            />
            <div className="catalog-cards">
              {products.length > 0 &&
                products.map((product) => (
                  <CardProduct key={product._id} product={product} />
                ))}
            </div>
            {countPages !== 0 ? (
              <Pagination
                setStartIndex={setStartIndex}
                limit={limit}
                countPages={countPages}
                setCountPages={setCountPages}
              />
            ) : (
              <p>Продукты с такими параметрами не найдено.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
