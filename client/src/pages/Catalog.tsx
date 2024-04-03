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
  const [sort, setSort] = useState("createdAt_desc");
  const [price, setPrice] = useState<number[]>([20, 20007]);
  const [category, setCategory] = useState("");
  const [label, setLabel] = useState<string[]>([]);
  const [countPages, setCountPages] = useState(1);

  const getProducts = async () => {
    try {
      const params = new URLSearchParams({
        startIndex: startIndex.toString(),
        price: price.join(","),
        label: label.join(","),
        sort: sort.split("_")[0],
        order: sort.split("_")[1],
        category: category,
        limit: limit.toString(),
      }).toString();

      const res = await fetch(`/api/products/get?${params}`);
      const data = await res.json();

      setProducts(data.products);
      setCountPages(data.totalPages);
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
            <Pagination
              setStartIndex={setStartIndex}
              limit={limit}
              countPages={countPages}
              setCountPages={setCountPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
