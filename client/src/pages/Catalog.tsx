import { useEffect, useState } from "react";
import AsideFilter from "../Components/AsideFilter/AsideFilter";
import SortFilter from "../Components/AsideFilter/SortFilter";
import CardProduct from "../Components/CardProduct";
import { Product } from "../types/types";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [limit, setLimit] = useState(12);
  const [sort, setSort] = useState("price_asc");
  const [price, setPrice] = useState<number[]>([20, 20007]);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState<string[]>([]);

  const getProducts = async () => {
    try {
      const params = new URLSearchParams({
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

  useEffect(() => {
    getProducts();
  }, [limit, sort]);

  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog-inner">
          <AsideFilter
            limit={limit}
            sort={sort}
            price={price}
            setPrice={setPrice}
            brand={brand}
            setBrand={setBrand}
            category={category}
            setCategory={setCategory}
            setProducts={setProducts}
          />
          <div className="catalog-content">
            <SortFilter
              limit={limit}
              setLimit={setLimit}
              sort={sort}
              setSort={setSort}
            />
            <div className="catalog-cards">
              {products.length > 0 &&
                products.map((prod) => (
                  <CardProduct key={prod._id} product={prod} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
