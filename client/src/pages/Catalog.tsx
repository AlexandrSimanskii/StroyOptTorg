import { useEffect, useState } from "react";
import AsideFilter from "../Components/AsideFilter/AsideFilter";
import SortFilter from "../Components/AsideFilter/SortFilter";
import CardProduct from "../Components/CardProduct";
import { Product } from "../types/types";
import Pagination from "../Components/Pagination";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [limit, setLimit] = useState(12);
  const [sort, setSort] = useState("price_asc");
  const [price, setPrice] = useState<number[]>([20, 20007]);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState<string[]>([]);

  const getProducts = async () => {
    try {
      const params = new URLSearchParams({
        startIndex: startIndex.toString(),
        price: price.join(","),
        brand: brand.join(","),
        sort: sort,
        category: category,
        limit: limit.toString(),
      }).toString();

      const res = await fetch(`/api/products/get?${params}`);
      const data = await res.json();

      setProducts(data);
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
    getProducts();
  }, []);
  console.log(price);

  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog-inner">
          <AsideFilter
            price={price}
            limit={limit}
            sort={sort}
            setPrice={setPrice}
            brand={brand}
            setBrand={setBrand}
            category={category}
            setCategory={setCategory}
            setProducts={setProducts}
          />
          <div className="catalog-content">
            <SortFilter
              startIndex={startIndex}
              price={price}
              brand={brand}
              limit={limit}
              setLimit={setLimit}
              category={category}
              sort={sort}
              setSort={setSort}
              products={products}
              setProducts={setProducts}
            />
            <div className="catalog-cards">
              {products.length > 0 &&
                products.map((prod) => (
                  <CardProduct key={prod._id} product={prod} />
                ))}
            </div>
            <Pagination setStartIndex={setStartIndex} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
